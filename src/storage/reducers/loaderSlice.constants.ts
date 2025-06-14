import type { loaderState } from "./loaderSlice";

export const setPending = (key: keyof loaderState) => (state: loaderState) => {
    state[key] = true;
};