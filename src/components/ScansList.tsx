import React from "react";
import {Button, Card, Container, Group, SimpleGrid, Text} from "@mantine/core";
import ScanCard from "./ScanCard";

function ScansList() {
    return (
        <SimpleGrid
            cols={{
                xs: 1,
                sm: 2,
                md: 4,
            }}
            spacing="lg"
        >
            {
                Array.from({length: 10}, (_, i) => (
                    <ScanCard/>
                ))
            }
        </SimpleGrid>
    );
}

export default ScansList;