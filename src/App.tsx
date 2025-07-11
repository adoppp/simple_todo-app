import { Box, Container, Typography } from "@mui/material";

import { useApp } from "@/App.hooks";
import { containerStyles, typographyStyles, boxStyles } from "@/App.styles";
import { AddPopUp } from "@/components/AddPopUp/AddPopUp";
import { MainSection } from "@/sections/MainSection/MainSection";

export function App() {
    const { } = useApp();

    return (
        <>
            <Container component="article" sx={containerStyles}>
                <Typography sx={{ fontWeight: 700, ...typographyStyles }} variant="h3" component="h1">
                    Todo's
                </Typography>
                <Box sx={boxStyles}>
                    <MainSection />
                </Box>
                <AddPopUp />
            </Container>
        </>
    );
};
