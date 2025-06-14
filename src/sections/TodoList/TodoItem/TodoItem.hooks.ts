import type { AppDispatch } from '@/storage/store';
import { useCallback, useEffect, useRef, useState, type FormEvent } from 'react';
import { useDispatch } from 'react-redux';
import { ResponsiveNotify } from '@/utils/ResponsiveNotify/ResponsiveNotify';
import type { Todo } from '@/constants';
import { deleteTodo, editTask, toggleComplited } from '@/storage/operations/todoThunk';

export const useTodoItem = () => {
    const [inputValue, setInputValue] = useState<string>("");
    const wrapperRef = useRef<HTMLDivElement | null>(null);
    const [isEdit, setIsEdit] = useState<boolean>(false);
    const dispatch = useDispatch<AppDispatch>();

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

        dispatch(editTask({id: task.id, title: inputValue}))
        setIsEdit(!isEdit);
        setInputValue("");
        ResponsiveNotify('success', "Task added");
    };
    
    const handleDelete = useCallback(
        async (id: string) => {
            try {
                await dispatch(deleteTodo(id));
                ResponsiveNotify('success', "Task deleted");
            } catch (e) {
                ResponsiveNotify("failure", "We can't delete your task, please try again");
            }
        },
        [dispatch]
    );
    
    const toggleIsComplited = useCallback(
        async (todo: Todo) => {
            try {
                const toggledTodo: Todo = { ...todo, isCompleted: !todo.isCompleted };
                await dispatch(toggleComplited(toggledTodo));
                ResponsiveNotify(`${toggledTodo.isCompleted ? "success" : "info"}`, `Task ${toggledTodo.title} is ${toggledTodo.isCompleted ? 'completed' : 'active'}`);
            } catch (e) {
                ResponsiveNotify("failure", "Error to toggle your todo");
            }
        },
        [dispatch]
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