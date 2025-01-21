import { create } from 'zustand';

import type { User } from '@/types/User';

type AuthStoreState = {
  user: User | null;
};

type AuthStoreActions = {
  setUser: (user: User | null) => void;
};

type AuthStore = AuthStoreState & AuthStoreActions;

export const authStoreInitialState: AuthStoreState = {
  user: null,
};

const useAuthStore = create<AuthStore>()((set) => ({
  user: null,
  setUser(user) {
    set(() => ({ user }));
  },
}));

export default useAuthStore;
