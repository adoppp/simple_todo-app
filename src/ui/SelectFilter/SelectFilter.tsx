import type { Filter } from "@/constants/globalConstants";
import { FormControl, InputLabel, MenuItem, Select, type SelectChangeEvent } from "@mui/material";
import { type FC } from "react";

interface SelectFilterProps {
    currentFilter: Filter,
    filterChange: (e: SelectChangeEvent) => void,
};

export const SelectFilter: FC<SelectFilterProps> = ({ currentFilter, filterChange}) => {
    return ( 
    <FormControl fullWidth>
        <InputLabel id="todo-select-label" color="secondary" >All</InputLabel>
        <Select
        labelId="todo-select-label"
        id="todo-simple-select"
        color="secondary"
        value={currentFilter}
        label="Age"
        onChange={filterChange}
        >
            <MenuItem value="All">All</MenuItem>
            <MenuItem value="Active">Active</MenuItem>
            <MenuItem value="Completed">Completed</MenuItem>
        </Select>
        </FormControl>
    )
}