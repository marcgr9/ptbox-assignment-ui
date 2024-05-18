import './App.css';
import MainPage from "./pages/MainPage";
import {AppShell, Combobox, Container, createTheme, MantineProvider} from "@mantine/core";
import React from "react";

const theme = createTheme({
    /** Put your mantine theme override here */
});

function App() {
  return (
      <MantineProvider>
          <AppShell
              header={{ height: 40 }}
              padding="md"
          >
              <AppShell.Header>
                  <Container size={'lg'}>
                      <div>Logo</div>
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
