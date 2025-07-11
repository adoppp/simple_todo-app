import { api } from "@store/services/api";

import type { Todo } from "@/constants/global";

export const todosApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getTodos: builder.query<Todo[], void>({
            query: () => ("todos"),
            providesTags: (result) =>
                result
                    ?   [
                            ...result.map(({ id }: { id: string }) => ({ type: 'Todo' as const, id })),
                            { type: 'Todo', id: 'LIST' },
                        ]
                    : [{ type: 'Todo', id: 'LIST' }],
        }),
        addTodo: builder.mutation<Todo, string>({
            query: (title: string) => ({
                url: "todos",
                method: "POST",
                body: { title }
            }),
            invalidatesTags: [{ type: "Todo", id: "LIST" }],
        }),
        deleteTodo: builder.mutation<void, string>({
            query: (id: string) => ({
                url: `todos/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: [{ type: "Todo", id: "LIST" }],
        }),
        putTodo: builder.mutation<Todo, Todo>({
            query: (data) => ({
                url: `todos/${data.id}`,
                method: "PUT",
                body: { title: data.title, isCompleted: data.isCompleted }
            }),
            invalidatesTags: [{ type: "Todo", id: "LIST" }],
        }),
    }),
});

export const { useGetTodosQuery, useAddTodoMutation, useDeleteTodoMutation, usePutTodoMutation } = todosApi;