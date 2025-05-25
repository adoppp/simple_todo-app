import { Container } from "@mui/material";

import { AddItem } from "@/sections/AddItem/AddItem";
import { TodoList } from "@/sections/TodoList";

export function App() {
  return (
    <Container component="article" sx={{ paddingTop: "60px", display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "center",}}>
      <AddItem />
      <TodoList />
    </Container>
  )
};
