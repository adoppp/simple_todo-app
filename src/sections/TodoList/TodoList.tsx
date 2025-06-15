import { List, Box, Typography } from '@mui/material';
import type { Filter } from '@/constants';
import { boxStyles, listStyles } from '@sections/TodoList/TodoList.styles';
import { useTodoList } from './TodoList.hooks';
import type { FC } from 'react';

interface TodoListProps {
    filter: Filter,
    search: string,
};

export const TodoList: FC<TodoListProps> = ({ filter, search }) => {
    const { tasksLeft, filteredListItem } = useTodoList({ filter, search });

    return (
        <Box sx={boxStyles}>
            {
                tasksLeft ? (
                <Typography variant="h6" component="span">
                    {`${tasksLeft} task${tasksLeft > 1 ? "s" : ""} left`}
                </Typography>
                ) : null
            }
            <List sx={listStyles}>
                {filteredListItem}
            </List>
        </Box>
    );
};
