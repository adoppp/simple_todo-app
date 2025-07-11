import { type FC } from "react";
import { FormControl } from "@mui/material"

import { UiInput } from "@/ui/UiInput/UiInput"
import { UiButton } from "@/ui/UiButton/UiButton"
import { useAddItem } from "@components/AddPopUp/AddTask/AddTask.hooks";

interface AddItemProps {
    handleClick: () => void,
}

export const AddTask: FC<AddItemProps> = ({ handleClick }) => {
    const { text, handleChange, handleSubmit } = useAddItem({ handleClick });

    return (
        <>
            <FormControl component="form" onSubmit={handleSubmit} sx={{padding: "0 16px"}}>
                <UiInput id="add" label="Add todo" styles={{ paddingBottom: "16px" }} onChange={handleChange} inputValue={text} isRequered />
                <UiButton label="Add" type="submit" />
            </FormControl>
        </>
        
    )
};