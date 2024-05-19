import React from 'react';
import {Center, Modal, ScrollArea, Text} from '@mantine/core';
import {Scan} from "../model/Scan";

interface ResultsModalProps {
    isOpen: boolean,
    onClose: () => void,
    scan: Scan,
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
            <Text fw={700} size={'lg'}>
                WhoIs results
            </Text>
            <ScrollArea.Autosize mah={400}>
                {
                    scan?.results.whoIs.length > 0
                        ? (
                            scan?.results.whoIs.map((res: string) => (
                                <Text c={'dimmed'} key={res}>{res}</Text>
                            ))
                        ) : <NoResults />
                }
            </ScrollArea.Autosize>
            <Text fw={700} size={'lg'}>
                IP Addresses
            </Text>
            <ScrollArea.Autosize mah={400}>
                {
                    scan?.results.ips.length > 0
                        ? (
                            scan?.results.ips.map((res: string) => (
                                <Text c={'dimmed'} key={res}>{res}</Text>
                            ))
                        ) : <NoResults />
                }
            </ScrollArea.Autosize>
            <Text fw={700} size={'lg'}>
                Email Addresses
            </Text>
            <ScrollArea.Autosize mah={400}>
                {
                    scan?.results.emails.length > 0
                        ? (
                            scan?.results.emails.map((res: string) => (
                                <Text c={'dimmed'} key={res}>{res}</Text>
                            ))
                        ) : <NoResults />
                }
            </ScrollArea.Autosize>
            <Text fw={700} size={'lg'}>
                Subdomains
            </Text>
            <ScrollArea.Autosize mah={400}>
                {
                    scan?.results.subdomains.length > 0
                        ? (
                            scan?.results.subdomains.map((res: string) => (
                                <Text c={'dimmed'} key={res}>{res}</Text>
                            ))
                        ) : <NoResults />
                }
            </ScrollArea.Autosize>
        </Modal>
    );
}

export default ResultsModal;
