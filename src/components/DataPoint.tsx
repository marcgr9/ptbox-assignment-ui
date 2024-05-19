import {Center, ScrollArea, Text} from "@mantine/core";
import React from "react";

interface DataPointProps {
    title: string,
    results: string[] | undefined,
}

function NoResults() {
    return (
        <Center p={'lg'}>
            <Text c={'red'} style={{userSelect: 'none'}}>
                No results were found.
            </Text>
        </Center>
    )
}

function DataPoint({ title, results }: DataPointProps) {
    return (
        <>
            <Text fw={700} size={'lg'}>
                {title}
            </Text>
            <ScrollArea.Autosize mah={400}>
                {
                    results && results?.length > 0
                        ? (
                            results?.map((res: string) => (
                                <Text c={'dimmed'} key={res}>{res}</Text>
                            ))
                        ) : <NoResults />
                }
            </ScrollArea.Autosize>
        </>
    )
}

export default DataPoint;
