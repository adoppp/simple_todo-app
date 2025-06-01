import type { Filter } from "@/constants/globalConstants";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { type FC } from "react";
import { menuItemStyles, menuPaperStyles } from "@/ui/SelectFilter/SelectFilter.styles";
import { useSelectFilter } from "./SelectFilter.hooks";

interface SelectFilterProps {
    currentFilter: Filter;
    setFilter: (filter: Filter) => void;
}

const selectMenuTypes: Filter[] = ['All', 'Active', 'Completed'];

export const SelectFilter: FC<SelectFilterProps> = ({ currentFilter, setFilter }) => {
    const { handleFilterChange } = useSelectFilter();

    return (
        <FormControl fullWidth>
        <InputLabel id="todo-select-label" color="secondary">
            Filter
        </InputLabel>
        <Select
            labelId="todo-select-label"
            id="todo-simple-select"
            color="secondary"
            value={currentFilter}
            label="Filter"
            onChange={(e) => handleFilterChange(setFilter, e)}
            MenuProps={{
                PaperProps: {
                sx: menuPaperStyles,
                },
            }}
        >
            {selectMenuTypes.map((item) => (
                <MenuItem key={item} value={item} sx={menuItemStyles}>
                {item}
                </MenuItem>
            ))}
        </Select>
        </FormControl>
    );
};
