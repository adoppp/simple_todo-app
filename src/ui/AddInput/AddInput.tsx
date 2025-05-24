import type { FC } from "react";
import { TextField } from "@mui/material"

interface AddInputProps {
    onChange: (value: string) => void;
};

export const AddInput: FC<AddInputProps> = ({ onChange }) => {
    return <TextField id="add" label="Add todo" variant="filled" color="secondary" sx={{paddingBottom: "16px"}} onChange={(e) => onChange(e.target.value)} />;
};