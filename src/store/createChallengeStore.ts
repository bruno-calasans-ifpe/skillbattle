import { create } from 'zustand';

import {
  DEFAULT_NORMAL_RULES,
  DEFAULT_SCORE_RULES,
  DEFAULT_SPEED_RULES,
} from '@/config/defaultRules';
import { Challenge, ChallengeRules, ChallengeType } from '@/types/Challenge';

type CreateChallengeState = {
  title: string;
  challenges: string[];
  categories: string[];
  type: ChallengeType;
  image: string;
  rules: ChallengeRules;
};

type CreateChallengeActions = {
  addChallenge: (challenge: string) => boolean;
  removeChallenge: (challenge: string) => boolean;
  setChallenges: (challenges: string[]) => void;
  updateChallenge: (input: Partial<Challenge>) => void;
  setChallengeRules: (input: ChallengeRules) => void;
  setChallengeType: (type: ChallengeType) => void;
  resetDefaultRules: (type: ChallengeType) => void;
  clear: () => void;
};

type CreateChallengeStore = CreateChallengeState & CreateChallengeActions;

export const createChallengeStoreInitialState: CreateChallengeState &
  Challenge = {
  id: '',
  title: '',
  categories: [],
  challenges: [],
  image: '',
  type: 'normal',
  rules: DEFAULT_NORMAL_RULES,
  desc: '',
  createdBy: 'user3131',
  status: 'waiting',
};

const useCreateChallengeStore = create<CreateChallengeStore>()((set, get) => ({
  ...createChallengeStoreInitialState,
  setChallengeType(type) {
    set((state) => ({ ...state, type }), true);
  },
  updateChallenge(input) {
    set(() => ({ ...input }));
  },
  setChallengeRules(newRules) {
    set((state) => ({ ...state, rules: newRules }), true);
  },
  resetDefaultRules(type) {
    if (type === 'normal')
      set((state) => ({ ...state, rules: DEFAULT_NORMAL_RULES }), true);
    if (type === 'speed')
      set((state) => ({ ...state, rules: DEFAULT_SPEED_RULES }), true);
    if (type === 'score')
      set((state) => ({ ...state, rules: DEFAULT_SCORE_RULES }), true);
  },
  clear() {
    set(() => ({ ...createChallengeStoreInitialState }));
  },
  addChallenge(challenge) {
    const challenges = get().challenges;
    const foundChallenge = challenges.find(
      (c) => c.toLowerCase().trim() === challenge.toLowerCase().trim(),
    );

    if (foundChallenge) {
      return false;
    }
    set(() => ({ challenges: [...challenges, challenge] }));
    return true;
  },
  removeChallenge(challenge) {
    const challenges = get().challenges;
    const updatedChallenges = challenges.filter(
      (c) => c.toLowerCase() !== challenge,
    );
    set(() => ({ challenges: updatedChallenges }));
    return true;
  },
  setChallenges(challenges) {
    set(() => ({ challenges: challenges }));
  },
}));

export default useCreateChallengeStore;
