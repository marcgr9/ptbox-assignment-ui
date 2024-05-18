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
            <Text c={'red'}>
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
                Started at
            </Text>
            <Text c={'dimmed'} mb={'md'}>
                {new Date(scan?.createdAt).toLocaleString()}
            </Text>
            <Text fw={700} size={'lg'}>
                WhoIs results
            </Text>
            <ScrollArea.Autosize mah={400}>
                {
                    scan?.results.length > 0
                        ? (
                            scan?.results.map((website: string) => (
                                <Text c={'dimmed'}>{website}</Text>
                            ))
                        ) : <NoResults />
                }
            </ScrollArea.Autosize>
        </Modal>
    );
}

export default ResultsModal;
