import { create } from "zustand";

interface UserState {
  user: {
    _id: string;
    name: string;
    email: string;
  } | null;
  setUser: (user: { _id: string; name: string; email: string }) => void;
  clearUser: () => void;
}

let user_demo = {
  _id: "user_001",
  name: "John Doe",
  email: "john@example.com",
  workspaces: ["workspace_001", "workspace_002"],
};

const useUserStore = create<UserState>((set) => ({
  user: user_demo,
  setUser: (user) => set({ user }),
  clearUser: () => set({ user: null }),
}));

export default useUserStore;
