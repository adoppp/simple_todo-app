import { deleteTodo, getTodos, toggleComplited } from '@/storage/operations/todoThunk';
import { todoSelector } from '@/storage/selectors/todoSelector';
import type { AppDispatch } from '@/storage/store';
import { useCallback, useEffect, type FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { List, Box } from '@mui/material';
import type { Todo, Filter } from '@/constants';
import { TodoItem } from './TodoItem/TodoItem';
import { ResponsiveNotify } from '@/utils/ResponsiveNotify/ResponsiveNotify';

interface TodoListProps {
    filter: Filter,
};

export const TodoList: FC<TodoListProps> = ({ filter }) => {
const todos = useSelector(todoSelector);
const dispatch = useDispatch<AppDispatch>();

useEffect(() => {
    dispatch(getTodos());
}, [dispatch]);

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

const filteredTodo = todos.filter((todo) => {
    switch (filter) {
        case 'Active':
            return !todo.isCompleted;
        case 'Completed':
            return todo.isCompleted;
        default:
            return true;
    }
});

    return (
    <Box sx={{ flexGrow: 1, width: "100%",  maxWidth: "520px" }}>              
        <List>
            {
                filteredTodo.map((todo) => ( 
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        handleDelete={handleDelete}
                        toggleIsComplited={toggleIsComplited}
                    />
                ))
            }
        </List>
    </Box>
    )
}
