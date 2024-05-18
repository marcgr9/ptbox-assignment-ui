import React from "react";
import {Center, Loader, SimpleGrid} from "@mantine/core";
import ScanCard from "./ScanCard";
import {HttpMethod, query as q} from "../utils/query";
import {Scans} from "../model/Scan";
import {useQuery} from "@tanstack/react-query";

function ScansList() {
    const query = useQuery({
        queryKey: ['scans'],
        queryFn: () => q<Scans>("/scans", HttpMethod.GET)
    })

    if (query.isLoading) return (
        <Center p={'lg'}>
            <Loader />
        </Center>
    )

    return (
        <SimpleGrid
            cols={{xs: 1, sm: 2, md: 4}}
            spacing="lg" >
            {
                query?.data?.scans.map((s) => <ScanCard scan={s} key={s.id}/> )
            }
        </SimpleGrid>
    );
}

export default ScansList;
