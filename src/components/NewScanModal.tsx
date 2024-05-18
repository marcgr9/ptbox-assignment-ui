import React, {useState} from 'react';
import {Button, Container, Group, Modal, SegmentedControl, Text, TextInput} from '@mantine/core';
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {HttpMethod, query} from "../utils/query";
import {NewScanDTO, Scan, ScanType} from "../model/Scan";

interface ModalProps {
    isOpen: boolean
    onClose: (isLoading: boolean) => void
    onScanInitiated: () => void
}

function NewScanModal({ isOpen, onClose, onScanInitiated }: ModalProps) {
    const [domain, setDomain] = useState("")
    const [type, setType] = useState(ScanType.AMASS)
    const [domainError, setDomainError] = useState("")

    const queryClient = useQueryClient()

    const mutation = useMutation({
        mutationFn: (dto: NewScanDTO) => query<Scan>("/scans", HttpMethod.POST, dto),
        onSuccess: () => {
            setDomain("")
            setType(ScanType.AMASS)
            onScanInitiated()

            queryClient.invalidateQueries({ queryKey: ['scans'] })
        },
    })

    const handleSubmit = (domain: string, type: ScanType) => {
        if (!/[a-zA-Z0-9][a-zA-Z0-9-_]+\.[a-zA-Z]{2,11}?$/.test(domain)) {
            setDomainError(" ")
            return
        }

        mutation.mutate({
            website: domain,
            scanType: type
        })
    };

    return (
      <Modal
        opened={isOpen}
        onClose={() => onClose(mutation.isPending)}
        title="New Scan"
        closeOnClickOutside={false}
      >
          <form>
              <TextInput
                  value={domain}
                  onChange={(e) => {
                      setDomainError("");
                      setDomain(e.currentTarget.value)
                  }}
                  label="Domain"
                  placeholder="Enter domain name"
                  maxLength={50}
                  disabled={mutation.isPending}
                  error={domainError}
                  required
              />
              <Container px={0} mt="md" >
                  <Text size={"sm"} fw={500} mb={3}>
                      Scanning tool
                  </Text>
                  <SegmentedControl
                      value={type}
                      onChange={(t) => setType(t as ScanType)}
                      disabled={mutation.isPending}
                      data={[
                          {
                              value: ScanType.AMASS,
                              label: 'Amass',
                          },
                          {
                              value: ScanType.THE_HARVESTER,
                              label: 'theHarvester',
                          },
                      ]}
                  />
              </Container>
              <Group align={'center'} mt="md">
                  <Button
                      disabled={mutation.isPending}
                      onClick={() => handleSubmit(domain, type)} >
                      Submit
                  </Button>
              </Group>
          </form>
      </Modal>
  );
}

export default NewScanModal;
