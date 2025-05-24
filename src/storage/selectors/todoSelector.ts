import type { RootState } from "@storage/store";

export const todoSelector = (state: RootState) => state.todo.list;