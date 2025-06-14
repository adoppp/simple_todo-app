import type { RootState } from "@storage/store";

export const loaderSelector = (state: RootState) => state.loader.loading;

export const loaderGetSelector = (state: RootState) => state.loader.loadingGet;