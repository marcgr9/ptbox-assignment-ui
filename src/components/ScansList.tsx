import React, {useEffect} from "react";
import {Center, Loader, SimpleGrid} from "@mantine/core";
import ScanCard from "./ScanCard";
import useRestApi, {HttpMethod} from "../hooks/useRestApiGet";
import {List} from "postcss/lib/list";
import {Scans} from "../model/Scan";

function ScansList() {
    const { getData: getScans, response, isLoading }
        = useRestApi<Scans>("/scans", HttpMethod.GET);

    useEffect(() => {
        getScans();
        return () => { };
    }, [getScans]);

    console.log(response, isLoading)

    if (isLoading) return (
        <Center p={'lg'}>
            <Loader />
        </Center>
    )

    return (
        <SimpleGrid
            cols={{xs: 1, sm: 2, md: 4}}
            spacing="lg" >
            {
                response ? response.scans.map((s) => <ScanCard scan={s} key={s.id}/> ) : []
            }
        </SimpleGrid>
    );
}

export default ScansList;
