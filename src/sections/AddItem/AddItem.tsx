import type { FC, FormEvent } from "react";
import { Box, FormControl } from "@mui/material"

import { AddInput } from "@/ui/AddInput"
import { UiButton } from "@/ui/UiButton/UiButton"
import { useText } from "@/utils/InputContext";

interface AddItemProps {
    handleOnSubmit: (event: FormEvent<HTMLFormElement>) => void;
};

export const AddItem: FC<AddItemProps> = ({ handleOnSubmit }) => {
    const { text, setText } = useText(); 

    const handleChange = (value: string) => {
        setText(value);
    };
    
    return (
        <Box component="section" sx={{ display: "flex", flexDirection: "column" }}>
            <FormControl component="form" onSubmit={handleOnSubmit}>
                <AddInput onChange={handleChange} inputValue={text} isRequered />
                <UiButton />
            </FormControl>
        </Box>
    )
}