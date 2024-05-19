import React from 'react';
import {Center, Modal, ScrollArea, Text} from '@mantine/core';
import {Scan} from "../model/Scan";
import DataPoint from "./DataPoint";

interface ResultsModalProps {
    isOpen: boolean,
    onClose: () => void,
    scan: Scan,
}

function ResultsModal({ isOpen, onClose, scan }: ResultsModalProps) {
    return (
        <Modal
            opened={isOpen}
            onClose={onClose}
            title={
                <Text>Scan #<Text fw={'600'} span>{scan?.id}</Text></Text>
            }
            w={'auto'}
        >
            <Text fw={700} size={'lg'}>
                Target
            </Text>
            <Text c={'dimmed'} mb={'md'}>
                {scan?.website}
            </Text>
            <Text fw={700} size={'lg'}>
                Scan type
            </Text>
            <Text c={'dimmed'} mb={'md'}>
                {scan?.type}
            </Text>
            <Text fw={700} size={'lg'}>
                Execution
            </Text>
            <Text c={'dimmed'}>
                From: {new Date(scan?.createdAt).toLocaleString()}
            </Text>
            <Text c={'dimmed'} mb={'md'}>
                To: {new Date(scan?.completedAt).toLocaleString()}
            </Text>
            <DataPoint title={"WhoIS results"} results={scan?.results.whoIs} />
            <DataPoint title={"IP Addresses"} results={scan?.results.ips} />
            <DataPoint title={"Email Addresses"} results={scan?.results.emails} />
            <DataPoint title={"Subdomains"} results={scan?.results.subdomains} />
        </Modal>
    );
}

export default ResultsModal;
