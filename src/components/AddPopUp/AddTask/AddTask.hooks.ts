import { useState, type FormEvent } from "react";

import { ResponsiveNotify } from "@/utils/ResponsiveNotify/ResponsiveNotify";
import { useAddTodoMutation } from "@/store/services/todosApi";

interface useAddItemProps {
    handleClick: () => void,
};

export const useAddItem = ({ handleClick }: useAddItemProps) => {
    const [text, setText] = useState<string>("");
    const [ addTodo ] = useAddTodoMutation();

    const handleChange = (value: string) => {
        setText(value);
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    
        if (text === "") return ResponsiveNotify("failure", "Title is empty");

        addTodo(text)
        setText("");
        handleClick();
        ResponsiveNotify('success', "Task added");
    };
    
    return { text, handleChange, handleSubmit };
};