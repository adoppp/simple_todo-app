import type { Filter } from '@/constants';
import { todoSelector } from '@/storage/selectors/todoSelector';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { TodoItem } from '@sections/TodoList/TodoItem/TodoItem';

interface useTodoListProps {
    filter: Filter,
};

export const useTodoList = ({ filter }: useTodoListProps) => { 
    const todos = useSelector(todoSelector);

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

    return { todoListItem };
};