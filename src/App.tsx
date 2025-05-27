import { Container } from "@mui/material";

import { AddItem } from "@/sections/AddItem/AddItem";
import { TodoList } from "@/sections/TodoList";
import { UiButton } from "./ui/UiButton";

export function App() {
  return (
    <Container component="article" sx={{ paddingTop: "60px", display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "center"}}>
      <AddItem />
      <TodoList />
      <UiButton label="+" styles={{ position: "fixed", bottom: "10px", right: "24px", borderRadius: "50%", display: "block", padding: "8px", minWidth: "60px", fontSize: "24px"}} />
    </Container>
  )
};
