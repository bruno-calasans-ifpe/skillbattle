export type Challenge = {
  id: string;
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
  maxTime: number;
};

export type SpeedChallengeRules = NormalChallengeRules & {
  classifications: number;
};

export type ScoreChallengeRules = {
  maxRounds: number;
  maxRoundTime: number;
  maxPlayerNum: number;
  selectionType: ScoreSelectionType;
};

export type ChallengeRules = {
  maxPlayerNum: number;
} & Partial<NormalChallengeRules> &
  Partial<SpeedChallengeRules> &
  Partial<ScoreChallengeRules>;
