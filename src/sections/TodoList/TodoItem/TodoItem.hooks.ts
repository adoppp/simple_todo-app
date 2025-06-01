import type { AppDispatch } from '@/storage/store';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { ResponsiveNotify } from '@/utils/ResponsiveNotify/ResponsiveNotify';
import type { Todo } from '@/constants';
import { deleteTodo, toggleComplited } from '@/storage/operations/todoThunk';

export const useTodoItem = () => {
    const dispatch = useDispatch<AppDispatch>();
    
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
                ResponsiveNotify("success", `Task ${toggledTodo.title} is ${toggledTodo.isCompleted ? 'completed' : 'active'}`);
            } catch (e) {
                ResponsiveNotify("failure", "Error to toggle your todo");
            }
        },
        [dispatch]
    );
    
    return { toggleIsComplited, handleDelete };
};