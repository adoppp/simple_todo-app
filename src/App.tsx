import { Container } from "@mui/material";
import { AddItem } from "@/sections/AddItem/AddItem";
import { TodoList } from "@/sections/TodoList";
import { UiButton } from "./ui/UiButton";
import { useState } from "react";
import { ModalContainer } from "./components/ModalContainer/ModalContainer";

export function App() {
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <Container component="article" sx={{ paddingTop: "60px", display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "center"}}>
      <TodoList />
      <UiButton
        label="+"
        styles={{ position: "fixed", bottom: "10px", right: "24px", borderRadius: "50%", display: "block", padding: "8px", minWidth: "60px", fontSize: "24px" }}
        handleClick={handleOpen} />
      <ModalContainer open={open} handleClick={handleClose} title="Add todo">
        <AddItem handleClick={handleClose} />
      </ModalContainer>
    </Container>
  )
};
