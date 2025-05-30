import type { Filter } from "@/constants/globalConstants";
import { FormControl, InputLabel, MenuItem, Select, type SelectChangeEvent } from "@mui/material";
import { indigo, purple } from "@mui/material/colors";
import { type FC } from "react";

interface SelectFilterProps {
    currentFilter: Filter;
    setFilter: (filter: Filter) => void;
}

const menuItemStyles = {
    '&.Mui-selected': {
        backgroundColor: purple[200],
    },
    '&.Mui-selected:hover': {
        backgroundColor: purple[400],
    },
    '&:hover': {
        backgroundColor: purple[300],
    },
};

const menuPaperStyles = {
    backgroundColor: indigo[200],
    border: '2px solid',
    borderColor: purple[500],
};

const selectMenuTypes: Filter[] = ['All', 'Active', 'Completed'];

export const SelectFilter: FC<SelectFilterProps> = ({ currentFilter, setFilter }) => {
    const handleFilterChange = (e: SelectChangeEvent) => {
        setFilter(e.target.value as Filter);
    };

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
            onChange={handleFilterChange}
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
