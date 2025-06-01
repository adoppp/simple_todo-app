import { type FC } from "react";
import { FormControl } from "@mui/material"

import { UiInput } from "@/ui/UiInput"
import { UiButton } from "@/ui/UiButton/UiButton"
import { useAddItem } from "./AddItem.hooks";

interface AddItemProps {
    handleClick: () => void,
}

export const AddItem: FC<AddItemProps> = ({ handleClick }) => {
    const { text, handleChange, handleSubmit } = useAddItem({ handleClick });

    return (
        <>
            <FormControl component="form" onSubmit={handleSubmit}>
                <UiInput id="add" label="Add todo" styles={{ paddingBottom: "16px" }} onChange={handleChange} inputValue={text} isRequered />
                <UiButton label="Add" type="submit" />
            </FormControl>
        </>
        
    )
};