import { type FormEvent } from "react";
import { Container } from "@mui/material";

import { AddItem } from "./sections/AddItem/AddItem";
import { TodoList } from "@/sections/TodoList";
import { useText } from "./utils/InputContext";

export function App() {
  const { text, setText } = useText();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (text === "") return;

    setText("");
  };

  return (
    <Container component="article" sx={{ paddingTop: "60px", display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
      <AddItem handleOnSubmit={handleSubmit} />
      <TodoList />
    </Container>
  )
};
