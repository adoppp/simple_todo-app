import { useState, type FormEvent } from "react";
import { Container } from "@mui/material";

import { AddItem } from "./sections/AddItem/AddItem";
import { TodoList } from "@/sections/TodoList";

export function App() {
  const [input, setInput] = useState<string>("");

  const debouncedHandleChange = (value: string) => {
    setInput(value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (input === "") return;

    setInput("");
  };

  return (
    <Container component="article" sx={{ paddingTop: "60px", display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
      <AddItem onChange={debouncedHandleChange} handleOnSubmit={handleSubmit} inputValue={input}  />
      <TodoList />
    </Container>
  )
};
