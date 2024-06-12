import create from 'zustand';

type StoreState = {
  asideVisible: boolean;
  toggleAside: () => void;
};

export const useStore = create<StoreState>((set) => ({
  asideVisible: false,
  toggleAside: () =>
    set((state) => ({ asideVisible: !state.asideVisible })),
}));
