import type { Filter, Todo } from '@/constants';
import { todoSelector } from '@/storage/selectors/todoSelector';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { TodoItem } from '@sections/TodoList/TodoItem/TodoItem';
import { Typography } from '@mui/material';
import { useDebounce } from '@/utils/useDebounce';

interface useTodoListProps {
    filter: Filter,
    search: string,
};

export const useTodoList = ({ filter, search }: useTodoListProps) => { 
    const todos = useSelector(todoSelector);
    const debouncedSearch = useDebounce(search, 300);

    const tasksLeft = useMemo(() => {
        const todosLeft = todos.filter(todo => !todo.isCompleted);
        return todosLeft.length > 0 ? (
            <Typography variant="h6" component="span">
                {`${todosLeft.length} task${todosLeft.length > 1 ? "s" : ""} left`}
            </Typography>
        ) : null;
    }, [todos]);

    const filteredTodo: Todo[] = useMemo(() => {
        if (filter === 'Active') return todos.filter(todo => !todo.isCompleted);
        if (filter === 'Completed') return todos.filter(todo => todo.isCompleted);
        return todos;
    }, [todos, filter]);

    const searchTodo = useMemo(() => {
        if (debouncedSearch !== "") return filteredTodo.filter(todo => todo.title.toLowerCase().includes(debouncedSearch.toLowerCase()));

        return filteredTodo;
    }, [filteredTodo, debouncedSearch]);

    const todoListItem = useMemo(() => {
        if (debouncedSearch !== "" && searchTodo.length === 0) {
            return <Typography variant='h5' sx={{ textAlign: "center" }}>
                {`There are no tasks with name`}
                <span style={{ fontWeight: 700 }}>{`"${debouncedSearch}"`}</span>
            </Typography>
        }
        return searchTodo.map(todo => (
            <TodoItem key={todo.id} todo={todo} />
        ));
    }, [searchTodo, debouncedSearch]);

    return { tasksLeft, todoListItem };
};