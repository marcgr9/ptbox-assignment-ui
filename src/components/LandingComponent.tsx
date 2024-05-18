import React, {useState} from "react";
import {Button, Card, Text} from "@mantine/core";
import NewScanModal from "./NewScanModal";

function LandingComponent() {
    const [isModalOpen, setIsModalOpen] = useState(false)

    return (
        <Card maw={500}>
            <Text fw={800} size={'xl'} mb="xs">
                OSSINT Domain Scanner
            </Text>
            <Text c="dimmed" size="md" mb={'xl'}>
                Efficiently scan domains using the OSSINT tools Amass and theHarvester, providing crucial information for cybersecurity and research purposes.
            </Text>

            <Button bg={'#993dcf'} onClick={() => setIsModalOpen(true)}>
                Scan a website
            </Button>

            <NewScanModal
                isOpen={isModalOpen}
                onClose={isLoading => setIsModalOpen(isLoading)}
                onScanInitiated={() => setIsModalOpen(false)}
            />
        </Card>
    );
}

export default LandingComponent;
