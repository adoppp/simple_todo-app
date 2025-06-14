import { List, Box } from '@mui/material';
import type { Filter } from '@/constants';
import { boxStyles } from '@sections/TodoList/TodoList.styles';
import { useTodoList } from './TodoList.hooks';
import type { FC } from 'react';

interface TodoListProps {
    filter: Filter,
};

export const TodoList: FC<TodoListProps> = ({ filter }) => {
    const { tasksLeft, todoListItem } = useTodoList({ filter });

    return (
        <Box sx={boxStyles}>
            {tasksLeft()}
            <List>
                {todoListItem}
            </List>
        </Box>
    );
};
