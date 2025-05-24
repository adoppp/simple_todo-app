import type { FC } from "react";
import { TextField } from "@mui/material"

interface AddInputProps {
    onChange: (value: string) => void;
    inputValue: string;
    isRequered?: boolean;
};

export const AddInput: FC<AddInputProps> = ({ onChange, inputValue, isRequered }) => {
    return <TextField id="add" label="Add todo" variant="filled" color="secondary" sx={{paddingBottom: "16px"}} value={inputValue} onChange={(e) => onChange(e.target.value)} required={isRequered} />;
};