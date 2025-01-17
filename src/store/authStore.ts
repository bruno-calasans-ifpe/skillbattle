import type { Session } from 'next-auth';
import { create } from 'zustand';

import type { User } from '@/types/User';

type AuthStoreState = {
  session: Session | null;
  user: User | null;
};

type AuthStoreActions = {
  saveUser: (user: User) => void;
};

type AuthStore = AuthStoreState & AuthStoreActions;

export const authStoreInitialState: AuthStoreState = {
  session: null,
  user: null,
};

const useAuthStore = create<AuthStore>()((set) => ({
  session: null,
  user: null,
  saveUser(user) {
    set(() => ({ user: user }));
  },
}));

export default useAuthStore;
