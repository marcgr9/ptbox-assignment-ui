import './App.css';
import MainPage from "./pages/MainPage";
import {AppShell, Burger, Combobox, createTheme, MantineProvider, Text} from "@mantine/core";
import React from "react";
import Header = Combobox.Header;
import {useDisclosure} from "@mantine/hooks";

const theme = createTheme({
    /** Put your mantine theme override here */
});

function App() {
  const [opened, { toggle }] = useDisclosure();

  return (
      <MantineProvider>
          <AppShell
              header={{ height: 40 }}
              padding="md"
          >
              <AppShell.Header>
                  <div>Logo</div>
              </AppShell.Header>

              <AppShell.Main>
                  <MainPage/>
              </AppShell.Main>
          </AppShell>
      </MantineProvider>

  )
}

export default App;
