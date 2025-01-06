export type Challenge = {
  title: string;
  categories: string[];
  type: ChallengeType;
  image: string;
  rules: ChallengeRules;
  challenges: string[];
  desc: string;
  createdBy: string;
};

export type ChallengeType = 'normal' | 'speed' | 'score';
export type ChallengeStatus = 'win' | 'lose' | 'waiting';
export type ScoreSelectionType = 'order' | 'random';

export type NormalChallengeRules = {
  maxPlayerNum: number;
};

export type SpeedChallengeRules = NormalChallengeRules & {
  classifications: number;
};

export type ScoreChallengeRules = NormalChallengeRules & {
  selectionType: ScoreSelectionType;
  maxRounds: number;
  maxRoundTime: number;
  maxPlayerNum: number;
};

export type ChallengeRules = NormalChallengeRules &
  Partial<SpeedChallengeRules> &
  Partial<ScoreChallengeRules>;
