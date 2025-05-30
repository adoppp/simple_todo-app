import { useState, type FC, type FormEvent } from "react";
import { FormControl } from "@mui/material"

import { UiInput } from "@/ui/UiInput"
import { UiButton } from "@/ui/UiButton/UiButton"
import { useDispatch } from "react-redux";
import { addTodo } from "@/storage/operations";
import type { AppDispatch } from "@/storage/store";
import { ResponsiveNotify } from "@/utils/ResponsiveNotify/ResponsiveNotify";

interface AddItemProps {
    handleClick: () => void,
}

export const AddItem: FC<AddItemProps> = ({ handleClick }) => {
    const [ text, setText ] = useState<string>("");
    const dispatch = useDispatch<AppDispatch>();

    const handleChange = (value: string) => {
        setText(value);
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    
        if (text === "") return ResponsiveNotify("failure", "Title is empty");

        dispatch(addTodo(text))
        setText("");
        handleClick();
        ResponsiveNotify('success', "Task added");
    };
    
    return (
        <>
            <FormControl component="form" onSubmit={handleSubmit}>
                <UiInput id="add" label="Add todo" styles={{ paddingBottom: "16px" }} onChange={handleChange} inputValue={text} isRequered />
                <UiButton label="Add" type="submit" />
            </FormControl>
        </>
        
    )
};