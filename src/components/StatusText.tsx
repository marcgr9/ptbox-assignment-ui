import {ScanStatus} from "../model/Scan";
import {Group, Loader, Paper, Text} from "@mantine/core";

interface StatusTextProps {
    status: ScanStatus,
}

function StatusText({ status }: StatusTextProps) {
    if (status === ScanStatus.COMPLETED) return (
        <Text c={'#549c68'}>
            Completed
        </Text>
    )
    if (status === ScanStatus.FAILED) return (
        <Text c={'red'}>
            Failed
        </Text>
    )
    if (status === ScanStatus.PENDING) {
        return (
            <Group gap={'xs'}>
                <Loader size={'xs'} color={'yellow'}/>
                <Text c={'yellow'}>
                    Loading
                </Text>
            </Group>
        )
    }

    throw Error("unhandled status " + status)
}

export default StatusText;
