import { getTodos } from '@/storage/operations/todoThunk';
import { todoSelector } from '@/storage/selectors/todoSelector';
import type { AppDispatch } from '@/storage/store';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const TodoList = () => {
    const dispatch = useDispatch<AppDispatch>();
    const todos = useSelector(todoSelector);

    useEffect(() => {
        dispatch(getTodos());
    }, [todos])

    return (
    <Box sx={{ flexGrow: 1, maxWidth: 752, }}>              
        <Typography sx={{ mb: 2 }} variant="h3" component="h1">
        Todo's
        </Typography>
            <List>
                {
                    todos.map(todo => (
                    <ListItem key={todo.id}>
                        <ListItemText primary={todo.title} />
                    </ListItem>
                ))}
            <ListItem>
                <ListItemText primary="Single-line item 1" />
            </ListItem>
            <ListItem>
                <ListItemText primary="Single-line item 2" />
            </ListItem>
        </List>
    </Box>
    )
}