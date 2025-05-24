import { useMemo, useState, type FormEvent } from "react";
import { Container } from "@mui/material";
import debounce from "lodash.debounce";

import { AddItem } from "./sections/AddItem/AddItem";
import { TodoList } from "@/sections/TodoList";

export function App() {
  const [input, setInput] = useState<string>("");

  const debouncedHandleChange = useMemo(() =>
    debounce((value: string) => {
      console.log(value)
      setInput(value);
    }, 300), []
  );

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (input === "") return;
    
    setInput("");
  }

  return (
    <Container component="article" sx={{ paddingTop: "60px", display: "flex", flexDirection: "column" }}>
      <AddItem onChange={debouncedHandleChange} handleOnSubmit={handleSubmit}  />
      <TodoList />
    </Container>
  )
};
