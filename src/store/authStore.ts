import { create } from 'zustand';

import type User from '@/types/User';

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
