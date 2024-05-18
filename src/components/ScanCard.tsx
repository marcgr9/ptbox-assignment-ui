import React from "react";
import {Button, Card, Group, Text} from "@mantine/core";
import {Scan, ScanStatus} from "../model/Scan";
import StatusText from "./StatusText";

interface ScanCardProps {
    scan: Scan,
    onOpenResultsClick: (scan: Scan) => void
}

function ScanCard({ scan, onOpenResultsClick }: ScanCardProps) {
    return (
        <Card shadow="sm" w={'auto'} maw={'400'} padding="md">
            <Text fw={500} size="lg" mb="xs">
                {scan.website}
            </Text>
            <Text c="dimmed" size="sm" mb={'xs'}>
                Scan ID: {scan.id.substring(0, 5)}...{scan.id.substring(scan.id.length - 5)}
            </Text>
            <StatusText status={scan.status} />
            <Group mt="xl">
                <Button
                    onClick={() => onOpenResultsClick(scan)}
                    disabled={scan.status !== ScanStatus.COMPLETED}
                    fullWidth >
                    See details & results
                </Button>
            </Group>
        </Card>
    );
}

export default ScanCard;