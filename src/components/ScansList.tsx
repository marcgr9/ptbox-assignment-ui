import React, {useEffect, useRef} from "react";
import {Center, Loader, SimpleGrid, Text} from "@mantine/core";
import ScanCard from "./ScanCard";
import {HttpMethod, query as q} from "../utils/query";
import {Scan, Scans} from "../model/Scan";
import {QueryClient, useQuery, useQueryClient} from "@tanstack/react-query";

function ScansList() {
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
    }, [updateScan])

    if (query.isLoading) return (
        <Center p={'lg'}>
            <Loader />
        </Center>
    )

    return (
        <>
            <Text fw={800} size={'xl'} mb="xs" mt={'xl'}>
                Past scans
            </Text>
            <Text fw={500} size={'md'} mb="xs">
                Filter by
            </Text>

            <SimpleGrid
                cols={{xs: 1, sm: 2, md: 4}}
                spacing="lg" >
                {
                    query?.data?.scans.map((s) => <ScanCard scan={s} key={s.id}/> )
                }
            </SimpleGrid>
        </>

    );
}

export default ScansList;
