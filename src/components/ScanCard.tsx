import React from "react";
import {Button, Card, Container, Group, Text} from "@mantine/core";

function ScanCard() {
    return (
        <Card shadow="sm" w={'auto'} maw={'400'} padding="md">
            <Text fw={500} size="lg" mb="xs">
                gruita.ro
            </Text>
            <Text c="dimmed" size="sm">
                ID: 1234
            </Text>
            <Text mt="md">
                Status: PENDING
            </Text>
            <Group mt="md">
                <Button>Open Results</Button>
            </Group>
        </Card>
    );
}

export default ScanCard;