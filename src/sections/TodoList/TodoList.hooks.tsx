import type { Filter, Todo } from '@/constants';
import { useGetTodosQuery } from '@store/services/todosApi';
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
    const { data = [], isLoading } = useGetTodosQuery({});
    const debouncedSearch = useDebounce(search, 300);

    const tasksLeft = useMemo(() => {
        return data.filter(todo => !todo.isCompleted).length;
    }, [data]);
    
    const filteredTodos = useMemo((): Todo[] => {
        let result = data;

        if (filter === 'Active') {
            result = result.filter(todo => !todo.isCompleted);
        } else if (filter === 'Completed') {
            result = result.filter(todo => todo.isCompleted);
        }

        const trimmedSearch = debouncedSearch.trim().toLowerCase();
        if (trimmedSearch) {
            result = result.filter(todo =>
                todo.title.toLowerCase().includes(trimmedSearch)
            );
        }  
        return result;
    }, [data, filter, debouncedSearch]);

    const filteredListItem = useMemo(() => {
        if (filteredTodos.length === 0) {
            if (debouncedSearch) {
                return (
                    <Typography variant="h5" sx={{ textAlign: 'center' }}>
                        There are no tasks with name{' '}
                        <span style={{ fontWeight: 700 }}>{`"${debouncedSearch}"`}</span>
                    </Typography>
                );
            }
    
            const emptyMessages = {
                Active: 'No active tasks',
                Completed: 'No completed tasks',
                All: 'No tasks available',
            };
    
            return (
                <Typography variant="h5" sx={{ textAlign: 'center' }}>
                    {emptyMessages[filter]}
                </Typography>
            );
        }
    
        return filteredTodos.map(todo => <TodoItem key={todo.id} todo={todo} />);
    }, [filteredTodos, debouncedSearch, filter]);

    return { tasksLeft, filteredListItem, debouncedSearch };
};