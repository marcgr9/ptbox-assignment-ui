import React from "react";
import {Combobox, Container} from "@mantine/core";
import ScanFormModal from "../components/ScanFormModal";
import ScanCard from "../components/ScanCard";

function MainPage() {
    return (
        <Container size="xl">
            <ScanFormModal />
            <ScanCard />
        </Container>
    );
}

export default MainPage;
