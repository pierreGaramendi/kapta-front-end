import { create } from "zustand";

interface UserState {
  isReady: boolean;
  setReady: (isReady: boolean) => void;
}

export const useIndexDBReady = create<UserState>((set) => ({
  isReady: false,
  setReady: (isReady) => set({ isReady }),
}));
