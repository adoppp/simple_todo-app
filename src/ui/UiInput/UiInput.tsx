import type { FC } from "react";
import type { OverridableStringUnion } from "@mui/types";
import { TextField, type SxProps, type TextFieldPropsColorOverrides, type TextFieldVariants } from "@mui/material"

interface UiInputProps {
    id: string,
    label: string,
    customVariant?: TextFieldVariants,
    color?: OverridableStringUnion<"secondary" | "error" | "primary" | "info" | "success" | "warning", TextFieldPropsColorOverrides>,
    styles?: SxProps,
    onChange: (value: string) => void,
    inputValue: string;
    isRequered?: boolean,
    inputRef?:  React.Ref<HTMLInputElement>,
};

export const UiInput: FC<UiInputProps> = ({id, label, customVariant = "filled", onChange, color = "secondary", styles, inputValue, isRequered, inputRef }) => {
    return <TextField id={id} label={label} variant={customVariant} color={color} sx={styles} value={inputValue} onChange={(e) => onChange(e.target.value)} required={isRequered} inputRef={inputRef} />;
};