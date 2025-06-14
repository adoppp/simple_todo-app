import { List, Box } from '@mui/material';
import type { Filter } from '@/constants';
import { boxStyles, listStyles } from '@sections/TodoList/TodoList.styles';
import { useTodoList } from './TodoList.hooks';
import type { FC } from 'react';

interface TodoListProps {
    filter: Filter,
    search: string,
};

export const TodoList: FC<TodoListProps> = ({ filter, search }) => {
    const { tasksLeft, todoListItem } = useTodoList({ filter, search });

    return (
        <Box sx={boxStyles}>
            {tasksLeft()}
            <List sx={listStyles}>
                {todoListItem}
            </List>
        </Box>
    );
};
