import { deleteTodo, getTodos, toggleComplited } from '@/storage/operations/todoThunk';
import { todoSelector } from '@/storage/selectors/todoSelector';
import type { AppDispatch } from '@/storage/store';
import { useEffect, type FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { List, Box } from '@mui/material';
import type { Todo, Filter } from '@/constants';
import { TodoItem } from './TodoItem/TodoItem';

interface TodoListProps {
    filter: Filter,
};

export const TodoList: FC<TodoListProps> = ({ filter }) => {
    const todos = useSelector(todoSelector);
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(getTodos());
    }, [dispatch]);

    const handleDelete = async (id: string) => {
        await dispatch(deleteTodo(id));
    };

    const toggleIsComplited = async (todo: Todo) => {
        const toggledTodo: Todo = {
            ...todo,
            isCompleted: !todo.isCompleted
        }
        await dispatch(toggleComplited(toggledTodo))
    };

    const filteredTodo = todos.filter((todo) => {
        if (filter === "Active") return !todo.isCompleted;
        if (filter === "Completed") return todo.isCompleted;
        return true;
    })

    return (
    <Box sx={{ flexGrow: 1, width: "100%",  maxWidth: "520px" }}>              
        <List>
            {
                filteredTodo.map((todo) => {
                    return <TodoItem key={todo.id} todo={todo} handleDelete={handleDelete} toggleIsComplited={toggleIsComplited}/>
                })
            }
        </List>
    </Box>
    )
}
