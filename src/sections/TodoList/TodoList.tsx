import { deleteTodo, getTodos, toggleComplited } from '@/storage/operations/todoThunk';
import { todoSelector } from '@/storage/selectors/todoSelector';
import DeleteIcon from '@mui/icons-material/Delete';
import type { AppDispatch } from '@/storage/store';
import { useEffect, type FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IconButton, ListItemText, ListItem, List, Box, Typography, Checkbox } from '@mui/material';
import type { Todo } from '@/constants/globalConstants';
import { deepPurple, green, grey, purple } from '@mui/material/colors';

export const TodoList: FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const todos = useSelector(todoSelector);

    useEffect(() => {
        dispatch(getTodos());
    }, [dispatch]);

    const handleDelete = async (id: string) => {
        await dispatch(deleteTodo(id));
    };

    const toggleIsComplited = (todo: Todo) => {
        const toggledTodo: Todo = {
            ...todo,
            isComplited: !todo.isComplited
        }
        dispatch(toggleComplited(toggledTodo))
    };

    const todoItems = todos.map(todo => (
        <ListItem key={todo.id} 
        sx={{border: 3, borderColor: purple[700], borderRadius: 2, backgroundColor: "#2a1d49", marginBottom: "12px"}}>
            <ListItemText sx={{color: grey[50], textDecoration: `${todo.isComplited ? "line-through" : ""}`, textDecorationColor: deepPurple[200] }} primary={todo.title} />
            <Checkbox sx={{
                color: grey[50], transition: "color 0.3s ease",
                "&.Mui-checked": {
                    color:  green[300]
                },
                ":hover": {
                color: grey[600]
                },
                '&.Mui-checked:hover': {
                    color: green[700], 
                },
            }
            } checked={todo.isComplited} onClick={() => toggleIsComplited(todo)} />
            <IconButton onClick={() => handleDelete(todo.id)} >
                <DeleteIcon sx={{
                    color: purple[400],
                    transition: "color 0.3s ease",
                    ":hover": {
                    color: purple[700]
                }}}/>
            </IconButton>
        </ListItem>
    ));

    return (
    <Box sx={{ flexGrow: 1, width: "100%",  maxWidth: "520px" }}>              
        <Typography sx={{ mb: 2, textAlign: "center",  fontWeight: 700 }} variant="h3" component="h1">
        Todo's
        </Typography>
        <List>
            {todoItems}
        </List>
    </Box>
    )
}