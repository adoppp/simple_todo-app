import type { Filter } from '@/constants';
import { todoSelector } from '@/storage/selectors/todoSelector';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { TodoItem } from '@sections/TodoList/TodoItem/TodoItem';
import { Typography } from '@mui/material';

interface useTodoListProps {
    filter: Filter,
};

export const useTodoList = ({ filter }: useTodoListProps) => { 
    const todos = useSelector(todoSelector);

    const tasksLeft = () => {
        const todosLeft = todos.filter(todo => !todo.isCompleted);

        return todosLeft.length > 0 ?
                <Typography variant="h6" component="span">
                    {`${todosLeft.length} task${todosLeft.length > 1 ? "s" : ""} left`}
                </Typography> : null
    };

    const filteredTodo = useMemo(() => {
        if (filter === 'Active') return todos.filter(todo => !todo.isCompleted);
        if (filter === 'Completed') return todos.filter(todo => todo.isCompleted);
        return todos;
    }, [todos, filter]);

    const todoListItem = filteredTodo.map((todo) => ( 
                        <TodoItem
                            key={todo.id}
                            todo={todo}
                        />
                    ))

    return { tasksLeft, todoListItem };
};