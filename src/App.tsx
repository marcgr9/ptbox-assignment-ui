import './App.css';
import MainPage from "./pages/MainPage";
import {AppShell, Container, createTheme, MantineProvider, Text} from "@mantine/core";
import React from "react";

function App() {
  return (
      <MantineProvider>
          <AppShell
              header={{ height: 90 }}
              padding="md"
          >
              <AppShell.Header>
                  <Container size={'lg'}>
                      <img src={'ptbox-logo.webp'} height={60}/>
                      <Text>Assignment</Text>
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
