import { Box, Container, Typography } from "@mui/material";
import { AddItem } from "@/sections/AddItem/AddItem";
import { UiButton } from "@/ui/UiButton";
import { ModalContainer } from "./components/ModalContainer/ModalContainer";
import { containerStyles, typographyStyles, boxStyles, addButtonStyles } from "@/App.styles";
import { useApp } from "./App.hooks";
import { LoaderBox } from "./components/LoaderBox";
import { Loader } from "./components/Loader/Loader";

export function App() {
    const { open, handleOpen, handleClose, tasksLeft, isGetLoading, isLoading } = useApp();

    return (
        <>
            <Container component="article" sx={containerStyles}>
                <Typography sx={{ fontWeight: 700, ...typographyStyles }} variant="h3" component="h1">
                    Todo's
                </Typography>
                <Box sx={boxStyles}>
                    {isGetLoading ? <LoaderBox/> : tasksLeft()}
                </Box>
                <UiButton
                    label="+"
                    styles={addButtonStyles}
                    handleClick={handleOpen} />
                <ModalContainer open={open} handleClick={handleClose} title="Add todo">
                    <AddItem handleClick={handleClose} />
                </ModalContainer>
            </Container>
            {isLoading && <Loader />}
        </>
    );
};
