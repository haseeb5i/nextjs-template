import create from "zustand";
import { devtools } from "zustand/middleware";
import { createCounterSlice } from "./counterSlice";
import { createAppSlice } from "./appSlice";
import type { GetState, SetState } from "zustand";

const createRootSlice = (set: SetState<any>, get: GetState<any>) => ({
  ...createAppSlice(set, get),
  ...createCounterSlice(set, get),
});

export const useStore = create(devtools(createRootSlice));
