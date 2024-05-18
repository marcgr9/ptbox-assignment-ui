import React from "react";
import {Button, Card, Group, Text} from "@mantine/core";
import {Scan, ScanStatus} from "../model/Scan";

interface ScanCardProps {
    scan: Scan,
}

function ScanCard({ scan }: ScanCardProps) {
    return (
        <Card shadow="sm" w={'auto'} maw={'400'} padding="md">
            <Text fw={500} size="lg" mb="xs">
                {scan.website}
            </Text>
            <Text c="dimmed" size="sm">
                Scan ID: {scan.id.substring(0, 5)}...{scan.id.substring(scan.id.length - 5)}
            </Text>
            <Text mt="md">
                {scan.status}
            </Text>
            <Group mt="md">
                <Button disabled={scan.status != ScanStatus.COMPLETED}>Open Results</Button>
            </Group>
        </Card>
    );
}

export default ScanCard;