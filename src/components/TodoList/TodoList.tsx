import type { FC } from 'react';
import { List, Box, Typography } from '@mui/material';

import type { Filter } from '@/constants/global';
import { boxStyles, listStyles } from '@/components/TodoList/TodoList.styles';
import { useTodoList } from '@components/TodoList/TodoList.hooks';

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
