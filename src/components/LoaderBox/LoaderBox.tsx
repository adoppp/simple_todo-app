import { Skeleton } from "@mui/material";
import type { FC } from "react";
import { itemStyle } from "@/components/LoaderBox/LoaderBox.styles.ts";

export const LoaderBox: FC = () => {
    return (
        <>
            <Skeleton variant="rounded" sx={itemStyle} />
            <Skeleton variant="rounded" sx={itemStyle} />
            <Skeleton variant="rounded" sx={itemStyle} />
            <Skeleton variant="rounded" sx={itemStyle} />
            <Skeleton variant="rounded" sx={itemStyle} />
        </>
    );
};