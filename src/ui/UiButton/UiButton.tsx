import { Button } from "@mui/material";
import { purple } from "@mui/material/colors";
import type { FC } from "react";
import type { OverridableStringUnion } from "@mui/types";
import type { ButtonPropsVariantOverrides } from "@mui/material/Button";

interface UiButtonProps {
    label: string,
    type?: "button" | "submit" | "reset",
    styles?: object,
    variant?: OverridableStringUnion<"contained" | "text" | "outlined", ButtonPropsVariantOverrides>,
}

export const UiButton: FC<UiButtonProps> = ({ label, type = "button", styles, variant = "contained"}) => {
    return <Button variant={variant} type={type} sx={{ backgroundColor: purple[700], ...styles }}>{label}</Button>
};