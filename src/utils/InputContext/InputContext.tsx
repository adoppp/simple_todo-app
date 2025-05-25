import { createContext, useState, type ReactNode } from "react";

interface TextContextType {
    text: string;
    setText: (value: string) => void;
};

export const TextContext = createContext<TextContextType | undefined>(undefined);

export const TextProvider = ({ children }: { children: ReactNode }) => {
    const [text, setText] = useState("");

    return (
        <TextContext.Provider value={{ text, setText }}>
            {children}
        </TextContext.Provider>
    );
};