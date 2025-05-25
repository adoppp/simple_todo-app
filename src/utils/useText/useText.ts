import { TextContext } from "@/utils/InputContext";
import { useContext } from "react";

export const useText = () => {
    const context = useContext(TextContext);
    if (!context) {
        throw new Error("useText must be used within a TextProvider");
    }
    return context;
};