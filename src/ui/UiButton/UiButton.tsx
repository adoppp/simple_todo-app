import { Button } from "@mui/material";
import { purple } from "@mui/material/colors";
import type { FC, ReactNode } from "react";
import type { OverridableStringUnion } from "@mui/types";
import type { ButtonPropsVariantOverrides } from "@mui/material/Button";

interface UiButtonProps {
    label?: string,
    children?: ReactNode,
    type?: "button" | "submit" | "reset",
    styles?: object,
    variant?: OverridableStringUnion<"contained" | "text" | "outlined", ButtonPropsVariantOverrides>,
    handleClick?: () => void;
}

export const UiButton: FC<UiButtonProps> = ({ label, children, type = "button", styles, variant = "contained", handleClick}) => {
    return <Button variant={variant} type={type} sx={{ backgroundColor: purple[700], ...styles }} onClick={handleClick} >{label || children}</Button>
};