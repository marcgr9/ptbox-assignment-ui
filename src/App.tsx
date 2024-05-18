import './App.css';
import MainPage from "./pages/MainPage";
import {AppShell, Container, MantineProvider} from "@mantine/core";
import React from "react";

function App() {
  return (
      <MantineProvider>
          <AppShell
              header={{ height: 50 }}
              padding="md"
          >
              <AppShell.Header>
                      <div>PTBOX Assignment</div>
                      <div>by marc</div>
              </AppShell.Header>

              <AppShell.Main>
                  <MainPage/>
              </AppShell.Main>
          </AppShell>
      </MantineProvider>

  )
}

export default App;
