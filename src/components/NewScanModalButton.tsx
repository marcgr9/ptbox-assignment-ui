import React, {useState} from 'react';
import {Button, Container, Group, Modal, SegmentedControl, Text, TextInput, useMantineTheme} from '@mantine/core';

function NewScanModalButton() {
  const [opened, setOpened] = useState(false);
  const theme = useMantineTheme();

  const handleSubmit = () => {
    console.log('submitted');
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
                      data={[
                          {
                              value: 'AMASS',
                              label: 'Amass',
                          },
                          {
                              value: 'THE_HARVESTER',
                              label: 'theHarvester',
                          },
                      ]}
                  />
              </Container>
              <Group align={'center'} mt="md">
                  <Button onClick={handleSubmit}>Submit</Button>
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