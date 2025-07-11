import { useCallback, useEffect, useRef, useState, type FormEvent } from 'react';

import type { Todo } from '@/constants/global';
import { ResponsiveNotify } from '@/utils/ResponsiveNotify/ResponsiveNotify';
import { useDeleteTodoMutation, usePutTodoMutation } from '@/store/services/todosApi';

export const useTodoItem = () => {
    const [inputValue, setInputValue] = useState<string>("");
    const [isEdit, setIsEdit] = useState<boolean>(false);
    const wrapperRef = useRef<HTMLDivElement | null>(null);
    const [ deleteTodo ] = useDeleteTodoMutation();
    const [ putTodo ] = usePutTodoMutation();

    const handleEdit = () => {
        setIsEdit(!isEdit);
        setInputValue("");
    };

    const handleChange = (value: string) => {
        setInputValue(value);
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>, task: Todo) => {
        event.preventDefault();
    
        if (inputValue === "") return ResponsiveNotify("failure", "Title is empty");
        if (inputValue === task.title) return ResponsiveNotify("failure", "It's the same name");

        putTodo({id: task.id, title: inputValue, isCompleted: task.isCompleted})
        setIsEdit(!isEdit);
        setInputValue("");
        ResponsiveNotify('success', "Task added");
    };
    
    const handleDelete = useCallback(
        async (id: string) => {
            try {
                await deleteTodo(id);
                ResponsiveNotify('success', "Task deleted");
            } catch (e) {
                ResponsiveNotify("failure", "We can't delete your task, please try again");
            }
        },
        [deleteTodo]
    );
    
    const toggleIsComplited = useCallback(
        async (todo: Todo) => {
            try {
                const toggledTodo: Todo = { ...todo, isCompleted: !todo.isCompleted };
                await putTodo(toggledTodo);
                ResponsiveNotify(`${toggledTodo.isCompleted ? "success" : "info"}`, `Task "${toggledTodo.title}" is ${toggledTodo.isCompleted ? 'completed' : 'active'}`);
            } catch (e) {
                ResponsiveNotify("failure", "Error to toggle your todo");
            }
        },
        [putTodo]
    );

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                wrapperRef.current &&
                !wrapperRef.current.contains(event.target as Node)
            ) {
                setIsEdit(false);
            }
        };
    
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
    
    return { toggleIsComplited, handleDelete, handleEdit, handleChange, handleSubmit, wrapperRef, inputValue, isEdit };
};