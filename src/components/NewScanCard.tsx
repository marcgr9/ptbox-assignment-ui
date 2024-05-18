import React from "react";
import {Card, Paper, Text} from "@mantine/core";
import NewScanModalButton from "./NewScanModalButton";

function NewScanCard() {
    return (
        <Card maw={500}>
            <Text fw={800} size={'xl'} mb="xs">
                OSSINT Domain Scanner
            </Text>
            <Text c="dimmed" size="md" mb={'xl'}>
                Efficiently scan domains using the OSSINT tools Amass and theHarvester, providing crucial information for cybersecurity and research purposes.
            </Text>

            <NewScanModalButton />
        </Card>
    );
}

export default NewScanCard;