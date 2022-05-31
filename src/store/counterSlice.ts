import type { StoreSlice } from "./types";

interface ICounterSlice {
  count: number;
  inc: () => void;
  dec: () => void;
}

export const createCounterSlice: StoreSlice<ICounterSlice> = (set) => ({
  count: 1,
  inc: () => set((state) => ({ count: state.count + 1 })),
  dec: () => set((state) => ({ count: state.count - 1 })),
});
