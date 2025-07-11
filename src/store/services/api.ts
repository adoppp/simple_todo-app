import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = import.meta.env.VITE_API_URL;

export const api = createApi({
    reducerPath: "api",
    tagTypes: ["Todo"],
    baseQuery: fetchBaseQuery({ baseUrl }),
    refetchOnReconnect: true,
    refetchOnFocus: true,
    endpoints: () => ({})
});