import React, {useEffect, useMemo, useRef, useState} from "react";
import {Center, Group, Loader, SimpleGrid, Text} from "@mantine/core";
import ScanCard from "./ScanCard";
import {HttpMethod, query as q} from "../utils/query";
import {Scan, Scans} from "../model/Scan";
import {QueryClient, useQuery, useQueryClient} from "@tanstack/react-query";
import ResultsModal from "./ResultsModal";

function ScansList() {
    const [highlightedScan, setHighlightedScan] = useState<Scan | null>(null)

    const queryClient: QueryClient = useQueryClient()
    const query = useQuery({
        queryKey: ['scans'],
        queryFn: () => q<Scans>("/scans", HttpMethod.GET)
    })

    const updateScan = (updatedScan: Scan): void => {
        queryClient.setQueryData(["scans"], (scans: Scans) => {
            let newScans: Scan[] = scans['scans'].map((scan: Scan) => {
                if (scan.id === updatedScan.id) {
                    return updatedScan
                } else return scan
            })

            return {'scans': [...newScans]}
        })
    }

    const connection = useRef<WebSocket | null>(null)

    useEffect(() => {
        const ws: WebSocket = new WebSocket("ws://127.0.0.1:8080")

        ws.addEventListener("message", (event) => {
            let updatedScan = JSON.parse(event.data) as Scan
            updateScan(updatedScan)
        })

        connection.current = ws

        return () => connection.current?.close()
    }, [])

    return (
        <>
            <Group>
                <Text fw={800} size={'xl'} mb="xs" mt={'xl'}>
                    Past scans
                </Text>
                {
                    query.isLoading ? <Loader /> : null
                }
            </Group>

            <Center>

            </Center>
            <SimpleGrid
                cols={{xs: 2, sm: 2, md: 4}}
                spacing="lg">
                {
                    query?.data?.scans.map((s) => (
                        <ScanCard
                            key={s.id}
                            scan={s}
                            onOpenResultsClick={setHighlightedScan}
                        />
                    ))
                }
            </SimpleGrid>

            <ResultsModal
                isOpen={highlightedScan != null}
                onClose={() => setHighlightedScan(null)}
                scan={highlightedScan!} />
        </>
    );
}

export default ScansList;
