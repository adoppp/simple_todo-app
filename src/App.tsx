import { Box, Container, Typography } from "@mui/material";
import { AddItem } from "@/sections/AddItem/AddItem";
import { TodoList } from "@/sections/TodoList";
import { UiButton } from "@/ui/UiButton";
import { ModalContainer } from "./components/ModalContainer/ModalContainer";
import { SelectFilter } from "@/ui/SelectFilter";
import { containerStyles, typographyStyles, boxStyles, addButtonStyles } from "@/App.styles";
import { useApp } from "./App.hooks";

export function App() {
    const { open, handleOpen, filter, setFilter, handleClose, todos } = useApp();

return (
    <Container component="article" sx={containerStyles}>
        <Typography sx={{ fontWeight: 700, ...typographyStyles }} variant="h3" component="h1">
            Todo's
        </Typography>
        <Box sx={boxStyles}> 
            {
                todos.length ?
                    <div>
                        <SelectFilter currentFilter={filter} setFilter={setFilter} />
                        <TodoList filter={filter} />
                    </div> : 
                    <Typography sx={{ fontWeight: 500, ...typographyStyles }} variant="h5" component="h1">
                        There are no tasks
                    </Typography>
            }
        </Box>
        <UiButton
            label="+"
            styles={addButtonStyles}
            handleClick={handleOpen} />
        <ModalContainer open={open} handleClick={handleClose} title="Add todo">
            <AddItem handleClick={handleClose} />
        </ModalContainer>
    </Container>
);
};
