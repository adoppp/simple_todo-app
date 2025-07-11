import { useState } from "react";

import type { Filter } from "@/constants/global";
import { useGetTodosQuery } from "@/store/services/todosApi";

export const useMainSection = () => {
    const [search, setSearch] = useState<string>("");
    const [filter, setFilter] = useState<Filter>("All");
    const { data = [], isLoading } = useGetTodosQuery();

    const handleSearch = (value: string) => {
        setSearch(value)            
    };

    return { search, filter, setFilter, data, isLoading, handleSearch };
};