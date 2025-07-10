import { useDispatch } from "react-redux";
import { ResponsiveNotify } from "@/utils/ResponsiveNotify/ResponsiveNotify";
import { useState, type FormEvent } from "react";

interface useAddItemProps {
    handleClick: () => void,
};

export const useAddItem = ({ handleClick }: useAddItemProps) => {
    const [text, setText] = useState<string>("");
    // const dispatch = useDispatch<AppDispatch>();

    const handleChange = (value: string) => {
        setText(value);
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    
        if (text === "") return ResponsiveNotify("failure", "Title is empty");

        // dispatch(addTodo(text))
        setText("");
        handleClick();
        ResponsiveNotify('success', "Task added");
    };
    
    return { text, handleChange, handleSubmit };
};