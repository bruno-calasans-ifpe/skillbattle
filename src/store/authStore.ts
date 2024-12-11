import type User from "@/types/User";
import { create } from "zustand";

type AuthStoreState = {
  user: User | null;
};

type AuthStoreActions = {
  saveUser: (user: User) => void;
};

type AuthStore = AuthStoreState & AuthStoreActions;

export const authStoreInitialState: AuthStoreState = {
  user: null,
};

const useAuthStore = create<AuthStore>()((set) => ({
  user: null,
  saveUser(user) {
    set(() => ({ user: user }));
  },
}));

export default useAuthStore;
