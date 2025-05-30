import type { Filter } from "@/constants/globalConstants";
import { FormControl, InputLabel, MenuItem, Select, type SelectChangeEvent } from "@mui/material";
import { type FC } from "react";

interface SelectFilterProps {
    currentFilter: Filter,
    setFilter: (filter: Filter) => void,
};

export const SelectFilter: FC<SelectFilterProps> = ({ currentFilter, setFilter }) => {
    const handleFilterChange = (e: SelectChangeEvent) => {
        setFilter(e.target.value as Filter);
    };

    return ( 
    <FormControl fullWidth>
        <InputLabel id="todo-select-label" color="secondary" >All</InputLabel>
        <Select
        labelId="todo-select-label"
        id="todo-simple-select"
        color="secondary"
        value={currentFilter}
        label="Age"
        onChange={handleFilterChange}
        >
            <MenuItem value="All">All</MenuItem>
            <MenuItem value="Active">Active</MenuItem>
            <MenuItem value="Completed">Completed</MenuItem>
        </Select>
        </FormControl>
    )
}