import {
  NormalChallengeRules,
  ScoreChallengeRules,
  SpeedChallengeRules,
} from '@/types/Challenge';

export const DEFAULT_NORMAL_RULES: NormalChallengeRules = {
  maxPlayerNum: 2,
};

export const DEFAULT_SPEED_RULES: SpeedChallengeRules = {
  maxPlayerNum: 2,
  classifications: 2,
};

export const DEFAULT_SCORE_RULES: ScoreChallengeRules = {
  maxPlayerNum: 2,
  maxRounds: 2,
  maxRoundTime: 1,
  selectionType: 'order',
};
