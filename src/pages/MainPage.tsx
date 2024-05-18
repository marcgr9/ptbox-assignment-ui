import React from "react";
import {Container} from "@mantine/core";
import LandingComponent from "../components/LandingComponent";
import ScansList from "../components/ScansList";

function MainPage() {
    return (
        <Container size={'lg'}>
            <LandingComponent />
            <ScansList />
        </Container>
    );
}

export default MainPage;
