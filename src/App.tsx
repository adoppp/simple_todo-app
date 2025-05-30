import { Box, Container, Typography } from "@mui/material";
import { AddItem } from "@/sections/AddItem/AddItem";
import { TodoList } from "@/sections/TodoList";
import { UiButton } from "@/ui/UiButton";
import { useState } from "react";
import { ModalContainer } from "./components/ModalContainer/ModalContainer";
import type { Filter } from "@/constants";
import { SelectFilter } from "@/ui/SelectFilter";
import { useInitNotify } from "@/utils/useInitNotify/useInitNotify";
import { useSelector } from "react-redux";
import { todoSelector } from "./storage/selectors";

export function App() {
    const [open, setOpen] = useState<boolean>(false);
    const [filter, setFilter] = useState<Filter>("All");
    const todos = useSelector(todoSelector);
    console.log("🚀 ~ App ~ todos:", todos.length)

    useInitNotify(); 
        
    const handleOpen = () => {
        setOpen(true)
    };

    const handleClose = () => {
        setOpen(false)
    };

return (
    <Container component="article" sx={{ p: "80px 16px", display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "center" }}>
        <Typography sx={{ mb: 2, textAlign: "center", fontWeight: 700 }} variant="h3" component="h1">
            Todo's
        </Typography>
        <Box sx={{ flexGrow: 1, width: "100%", maxWidth: "520px" }}> 
            {
                todos.length ?
                    <div>
                        <SelectFilter currentFilter={filter} setFilter={setFilter} />
                        <TodoList filter={filter} />
                    </div> : 
                    <Typography sx={{ mb: 2, textAlign: "center", fontWeight: 700 }} variant="h5" component="h1">
                        There are no tasks
                    </Typography>
            }
        </Box>
        <UiButton
            label="+"
            styles={{ position: "fixed", bottom: "10px", right: "24px", borderRadius: "50%", display: "block", padding: "8px", minWidth: "60px", fontSize: "24px" }}
            handleClick={handleOpen} />
        <ModalContainer open={open} handleClick={handleClose} title="Add todo">
            <AddItem handleClick={handleClose} />
        </ModalContainer>
    </Container>
);
};
