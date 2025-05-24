import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';

export const TodoList = () => {
    return (
    <Box sx={{ flexGrow: 1, maxWidth: 752,  }}>              
        <Typography sx={{ mt: 4, mb: 2 }} variant="h3" component="h1">
        Todo's
        </Typography>
        <List>
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