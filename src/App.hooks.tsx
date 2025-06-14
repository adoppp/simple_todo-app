import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { Filter } from "@/constants";
import { getTodos, loaderGetSelector, loaderSelector, todoSelector, type AppDispatch } from "@/storage";
import { useInitNotify } from "@/utils/useInitNotify/useInitNotify";
import { SelectFilter } from "@/ui/SelectFilter";
import { TodoList } from "@/sections/TodoList";
import { Typography } from "@mui/material";
import { typographyStyles } from "@/App.styles";
import { UiInput } from "./ui/UiInput";

export const useApp = () => {
    const [open, setOpen] = useState<boolean>(false);
    const [filter, setFilter] = useState<Filter>("All");
    const [search, setSearch] = useState<string>("");
    const todos = useSelector(todoSelector);
    const isLoading = useSelector(loaderSelector);
    const isGetLoading = useSelector(loaderGetSelector);
    const dispatch = useDispatch<AppDispatch>();

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

    const handleSearch = (value: string) => {
        setSearch(value)
    };

    const tasksLeft = () => {
        return todos.length ?
            <div>
                <UiInput id="search" label="Search" onChange={handleSearch} inputValue={search} styles={{width: "100%", mb: "24px"}} />
                <SelectFilter currentFilter={filter} setFilter={setFilter} />
                <TodoList filter={filter} search={search} />
            </div> :
            <Typography sx={{ fontWeight: 500, ...typographyStyles }} variant="h5" component="h1">
                There are no tasks
            </Typography>
    };

    return { open, handleOpen, filter, setFilter, handleClose, tasksLeft, isGetLoading, isLoading, todos };
};