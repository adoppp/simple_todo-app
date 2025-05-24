import type { FC, FormEvent } from "react";
import { Box, FormControl } from "@mui/material"

import { AddInput } from "@/ui/AddInput"
import { UiButton } from "@/ui/UiButton/UiButton"

interface AddItemProps {
    onChange: (value: string) => void;
    handleOnSubmit: (event: FormEvent<HTMLFormElement>) => void;
    inputValue: string
};

export const AddItem: FC<AddItemProps> = ({ onChange, handleOnSubmit, inputValue }) => {
    return (
        <Box component="section" sx={{ display: "flex", flexDirection: "column" }}>
            <FormControl component="form" onSubmit={handleOnSubmit}>
                <AddInput onChange={onChange} inputValue={inputValue} isRequered />
                <UiButton />
            </FormControl>
        </Box>
    )
}