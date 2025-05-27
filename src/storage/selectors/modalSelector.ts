import type { RootState } from "@/storage/store";

export const modalSelector = (state: RootState) => state.modal.isOpen;