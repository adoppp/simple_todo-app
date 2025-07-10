import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = import.meta.env.VITE_API_URL;

export const todosApi = createApi({
    reducerPath: "todoApi",
    tagTypes: ["Todo"],
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getTodos: builder.query({
            query: () => ("todos"),
            providesTags: (result) =>
                result
                    ?   [
                            ...result.map(({ id }: { id: string }) => ({ type: 'Todo' as const, id })),
                            { type: 'Todo', id: 'LIST' },
                        ]
                    : [{ type: 'Todo', id: 'LIST' }],
        }),
        addTodo: builder.mutation({
            query: (title: string) => ({
                url: "todos",
                method: "POST",
                title
            }),
            invalidatesTags: [{ type: "Todo", id: "LIST" }],
        }),
        deleteTodo: builder.mutation({
            query: (id: string) => ({
                url: `todos/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: [{ type: "Todo", id: "LIST" }],
        }),
        putTodo: builder.mutation({
            query: (data: { id: string, title: string, isCompleted: boolean }) => ({
                url: `todos/${data.id}`,
                method: "PUT",
                body: { title: data.title, isCompleted: data.isCompleted }
            }),
            invalidatesTags: [{ type: "Todo", id: "LIST" }],
        }),
    }),
});

export const { useGetTodosQuery, useAddTodoMutation, useDeleteTodoMutation, usePutTodoMutation } = todosApi;