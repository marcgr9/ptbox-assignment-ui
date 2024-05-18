import React from "react";
import {Container} from "@mantine/core";
import NewScanCard from "../components/NewScanCard";
import ScansList from "../components/ScansList";

function MainPage() {
    return (
        <Container size={'lg'}>
            <NewScanCard />
            <ScansList />
        </Container>
    );
}

export default MainPage;
