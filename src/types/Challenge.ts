export type Challenge = {
  title: string;
  categories: string[];
  type: ChallengeType;
  image: string;
  rules: ChallengeRules;
  challenges: string[];
  desc: string;
  createdBy: string;
  status: ChallengeStatus;
};

export type ChallengeType = 'normal' | 'speed' | 'score';
export type ChallengeStatus =
  | 'waiting'
  | 'starting'
  | 'playing'
  | 'voting'
  | 'editing'
  | 'finished';
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
