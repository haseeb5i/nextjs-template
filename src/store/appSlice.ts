import { StoreSlice } from "./types";

interface IAppSlice {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

export const createAppSlice: StoreSlice<IAppSlice> = (set) => ({
  sidebarOpen: false,
  setSidebarOpen: (open) => set(() => ({ sidebarOpen: open })),
});
