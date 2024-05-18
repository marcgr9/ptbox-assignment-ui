import React, {useState} from 'react';
import {Button, Container, Group, Modal, SegmentedControl, Text, TextInput} from '@mantine/core';
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {HttpMethod, query} from "../utils/query";
import {NewScanDTO, Scan, ScanType} from "../model/Scan";

function NewScanModalButton() {
    const [domain, setDomain] = useState("")
    const [type, setType] = useState(ScanType.AMASS)
    const [opened, setOpened] = useState(false);
    const queryClient = useQueryClient()

    const mutation = useMutation({
        mutationFn: (dto: NewScanDTO) => {console.log('b'); return query<Scan>("/scans", HttpMethod.POST, dto)},
        onSuccess: () => {
            // Invalidate and refetch
            queryClient.invalidateQueries({ queryKey: ['scans'] })
        },
    })

    const handleSubmit = (domain: string, type: ScanType) => {
        mutation.mutate({
            website: domain,
            scanType: type
        })
    };

  return (
    <>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="New Scan"
        closeOnClickOutside={false}
      >
          <form>
              <TextInput
                  value={domain}
                  onChange={(e) => setDomain(e.currentTarget.value)}
                  label="Domain"
                  placeholder="Enter domain name"
                  maxLength={50}
                  required
              />
              <Container px={0} mt="md" >
                  <Text size={"sm"} fw={500} mb={3}>
                      Scanning tool
                  </Text>
                  <SegmentedControl
                      value={type}
                      onChange={(t) => setType(t as ScanType)}
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
                  <Button onClick={() => handleSubmit(domain, type)}>Submit</Button>
              </Group>
          </form>
      </Modal>

        <Group>
            <Button onClick={() => setOpened(true)}>
                  Scan a website
            </Button>
        </Group>
    </>
  );
}

export default NewScanModalButton;