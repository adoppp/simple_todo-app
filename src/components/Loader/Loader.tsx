import { Backdrop, CircularProgress } from "@mui/material";
import type { FC } from "react";

export const Loader: FC = () => {
    return (
        <Backdrop sx={{ color: '#fff', zIndex: "1000" }} component="div" open>
            <CircularProgress color="inherit" />
        </Backdrop>
    );
}