import type { Filter } from "@/constants";
import type { SelectChangeEvent } from "@mui/material";

export const useSelectFilter  = () => { 
    const handleFilterChange = (setFilter: (filter: Filter) => void, e: SelectChangeEvent) => {
        setFilter(e.target.value as Filter);
    };

    return { handleFilterChange };
};