import { Skeleton } from "@mui/material";
import type { FC } from "react";

export const LoaderBox: FC = () => {
    return (
        <>
            <Skeleton variant="rounded" width={520} height={63} sx={{ mb: "12px" }} />
            <Skeleton variant="rounded" width={520} height={63} sx={{ mb: "12px" }} />
            <Skeleton variant="rounded" width={520} height={63} sx={{ mb: "12px" }} />
            <Skeleton variant="rounded" width={520} height={63} sx={{ mb: "12px" }} />
            <Skeleton variant="rounded" width={520} height={63} />
        </>
    );
};