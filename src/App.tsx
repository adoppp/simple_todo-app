import { Box, Container, Typography, type SxProps } from "@mui/material";
import { AddItem } from "@/sections/AddItem/AddItem";
import { TodoList } from "@/sections/TodoList";
import { UiButton } from "@/ui/UiButton";
import { useEffect, useState } from "react";
import { ModalContainer } from "./components/ModalContainer/ModalContainer";
import type { Filter } from "@/constants";
import { SelectFilter } from "@/ui/SelectFilter";
import { useInitNotify } from "@/utils/useInitNotify/useInitNotify";
import { useDispatch, useSelector } from "react-redux";
import { getTodos, todoSelector, type AppDispatch } from "@/storage";

const containerStyles: SxProps = {
    p: "80px 16px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center"
};

const typographyStyles: SxProps = {
    mb: 2,
    textAlign: "center",
};

const boxStyles = {
    flexGrow: 1,
    width: "100%",
    maxWidth: "520px"
};

const addButtonStyles = {
    position: "fixed",
    bottom: "10px",
    right: "24px",
    borderRadius: "50%",
    display: "block",
    padding: "8px",
    minWidth: "60px",
    fontSize: "24px"
};

export function App() {
    const [open, setOpen] = useState<boolean>(false);
    const [filter, setFilter] = useState<Filter>("All");
    const dispatch = useDispatch<AppDispatch>();
    const todos = useSelector(todoSelector);

    useEffect(() => {
        dispatch(getTodos());
    }, []);

    useInitNotify(); 
        
    const handleOpen = () => {
        setOpen(true)
    };

    const handleClose = () => {
        setOpen(false)
    };

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
