import type { FC, FormEvent } from "react";
import { Box, FormControl } from "@mui/material"

import { AddInput } from "@/ui/AddInput"
import { UiButton } from "@/ui/UiButton/UiButton"
import { useText } from "@/utils";
import { useDispatch } from "react-redux";
import { addTodo } from "@/storage/operations/todoThunk";
import type { AppDispatch } from "@/storage/store";

export const AddItem: FC = () => {
    const { text, setText } = useText();
    const dispatch = useDispatch<AppDispatch>();

    const handleChange = (value: string) => {
        setText(value);
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    
        if (text === "") return;

        dispatch(addTodo(text))
    
        setText("");
    };
    
    return (
        <Box component="section" sx={{ display: "flex", flexDirection: "column", width: "100%", maxWidth: "768px" }}>
            <FormControl component="form" onSubmit={handleSubmit}>
                <AddInput onChange={handleChange} inputValue={text} isRequered />
                <UiButton />
            </FormControl>
        </Box>
    )
};