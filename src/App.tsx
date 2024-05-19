import './App.css';
import MainPage from "./pages/MainPage";
import {AppShell, Container, MantineProvider, Stack, Text} from "@mantine/core";
import React from "react";

function App() {
  return (
      <MantineProvider defaultColorScheme={'dark'}>
          <AppShell
              header={{ height: 90 }}
              padding="md"
          >
              <AppShell.Header className={"App-header"}>
                  <Container size={'lg'}>
                      <Stack align={'end'} w={'min-content'} gap={'0'}>
                          <img src={'ptbox-logo.webp'} height={60}/>
                          <Text fw={'500'} style={{userSelect: 'none'}}>ASSIGNMENT <Text size={'xs'} span>by marc</Text></Text>
                      </Stack>
                  </Container>
              </AppShell.Header>

              <AppShell.Main>
                  <MainPage/>
              </AppShell.Main>
          </AppShell>
      </MantineProvider>

  )
}

export default App;
