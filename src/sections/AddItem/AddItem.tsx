import type { FC, FormEvent } from "react";
import { Box, FormControl } from "@mui/material"

import { AddInput } from "@/ui/AddInput"
import { UiButton } from "@/ui/UiButton/UiButton"

interface AddItemProps {
    onChange: (value: string) => void;
    handleOnSubmit: (event: FormEvent<HTMLFormElement>) => void;
};

export const AddItem: FC<AddItemProps> = ({ onChange, handleOnSubmit }) => {
    return (
        <Box component="section" sx={{ display: "flex", flexDirection: "column" }}>
            <FormControl component="form" onSubmit={handleOnSubmit}>
                <AddInput onChange={onChange} />
                <UiButton />
            </FormControl>
        </Box>
    )
}