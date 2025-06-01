import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { Filter } from "@/constants";
import { getTodos, todoSelector, type AppDispatch } from "@/storage";
import { useInitNotify } from "@/utils/useInitNotify/useInitNotify";

export const useApp = () => {
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

    return { open, handleOpen, filter, setFilter, handleClose, todos };
};