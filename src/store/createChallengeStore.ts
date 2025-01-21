import { create } from 'zustand';
import {
  DEFAULT_NORMAL_RULES,
  DEFAULT_SCORE_RULES,
  DEFAULT_SPEED_RULES,
} from '@/config/defaultRules';
import { Challenge, ChallengeRules, ChallengeType } from '@/types/Challenge';

export type TabName = 'challenge' | 'basic' | 'rules' | 'resume';
export type TabConfig = {
  current: TabName;
  order: TabName[];
  finished: {
    basic: boolean;
    challenge: boolean;
    rules: boolean;
    resume: boolean;
  };
};

export type CreateChallengeState = {
  challenge: Omit<Challenge, 'id'>;
  tabConfig: TabConfig;
};

type CreateChallengeActions = {
  addChallenge: (challenge: string) => boolean;
  removeChallenge: (challenge: string) => boolean;
  setChallenges: (challenges: string[]) => void;
  updateChallenge: (input: Partial<Challenge>) => void;
  setChallengeRules: (input: ChallengeRules) => void;
  setChallengeType: (type: ChallengeType) => void;
  resetDefaultRules: (type: ChallengeType) => void;
  setCategories: (categories: string[]) => void;
  addCategory: (category: string) => void;
  removeCategory: (category: string) => void;
  updateTabConfig: (input: Partial<TabConfig>) => void;
  setTab: (tab: Exclude<TabName, 'resume'>, value: boolean) => void;
  gotToTab: (tab: TabName) => void;
  goNextTab: () => void;
  goBackTab: () => void;
  reset: () => void;
};

type CreateChallengeStore = CreateChallengeState & CreateChallengeActions;

export const createChallengeStoreInitialState: CreateChallengeState = {
  challenge: {
    title: '',
    categories: [],
    challenges: [],
    image: '',
    type: 'normal',
    rules: DEFAULT_NORMAL_RULES,
    desc: '',
    createdBy: '',
    status: 'waiting',
  },
  tabConfig: {
    current: 'basic',
    order: ['basic', 'challenge', 'rules', 'resume'],
    finished: {
      basic: false,
      challenge: false,
      rules: false,
      resume: false,
    },
  },
};

const useCreateChallengeStore = create<CreateChallengeStore>()((set, get) => ({
  ...createChallengeStoreInitialState,
  updateChallenge(input) {
    set(() => ({ challenge: { ...get().challenge, ...input } }));
  },
  setChallengeType(type) {
    const { challenge, reset, resetDefaultRules } = get();
    const isDifferentType = challenge.type !== type;
    if (isDifferentType) {
      reset();
      resetDefaultRules(type);
    }
  },
  setChallengeRules(rules) {
    get().updateChallenge({ rules });
  },
  resetDefaultRules(type) {
    const { updateChallenge } = get();
    if (type === 'normal')
      updateChallenge({ type, rules: DEFAULT_NORMAL_RULES });
    if (type === 'speed') updateChallenge({ type, rules: DEFAULT_SPEED_RULES });
    if (type === 'score') updateChallenge({ type, rules: DEFAULT_SCORE_RULES });
  },
  reset() {
    set(() => ({ ...createChallengeStoreInitialState }));
  },
  addChallenge(challenge) {
    const challenges = get().challenge.challenges;
    const foundChallenge = challenges.find(
      (c) => c.toLowerCase().trim() === challenge.toLowerCase().trim(),
    );

    if (foundChallenge) {
      return false;
    }
    set(() => ({
      challenge: {
        ...get().challenge,
        challenges: [...challenges, challenge],
      },
    }));
    return true;
  },
  removeChallenge(challenge) {
    const challenges = get().challenge.challenges;

    const updatedChallenges = challenges.filter(
      (c) => c.toLowerCase() !== challenge,
    );

    set(() => ({
      challenge: {
        ...get().challenge,
        challenges: updatedChallenges,
      },
    }));
    return true;
  },
  setChallenges(challenges) {
    set(() => ({
      challenge: {
        ...get().challenge,
        challenges,
      },
    }));
  },
  setCategories(categories) {
    get().updateChallenge({ categories });
  },
  addCategory(category) {
    const { challenge, updateChallenge } = get();
    updateChallenge({ categories: [...challenge.categories, category] });
  },
  removeCategory(category) {
    const { challenge, updateChallenge } = get();
    const categories = challenge.categories.filter((c) => c !== category);
    updateChallenge({ categories });
  },
  updateTabConfig(input) {
    set((state) => ({ tabConfig: { ...state.tabConfig, ...input } }));
  },
  setTab(tab, value) {
    const { tabConfig, updateTabConfig } = get();
    updateTabConfig({ finished: { ...tabConfig.finished, [tab]: value } });
  },
  gotToTab(tab) {
    const { tabConfig } = get();
    const canIGoToTab = tab === tabConfig.current || tabConfig.finished[tab];
    if (!canIGoToTab) return;
    get().updateTabConfig({ current: tab });
  },
  goBackTab() {
    const { tabConfig, updateTabConfig } = get();
    const { order, current } = tabConfig;
    const maxIndex = order.length - 1;
    const currentTabIndex = order.indexOf(current);
    let backTabIndex = currentTabIndex - 1;

    // first tab
    if (backTabIndex < 0) return;

    // last tab
    if (backTabIndex > maxIndex) backTabIndex = maxIndex;
    updateTabConfig({ current: order[backTabIndex] });
  },
  goNextTab() {
    const { tabConfig, updateTabConfig } = get();
    const { order, current } = tabConfig;

    const maxIndex = order.length - 1;
    const currentTabIndex = order.indexOf(current);
    let nextTabIndex = currentTabIndex + 1;
    const currentTab = order[currentTabIndex];
    const nextTab = order[nextTabIndex];
    const isCurrentTabFinished = tabConfig.finished[currentTab];

    if (!isCurrentTabFinished) return;
    // last tab
    if (nextTabIndex > maxIndex) nextTabIndex = maxIndex;
    updateTabConfig({ current: nextTab });
  },
}));

export default useCreateChallengeStore;
