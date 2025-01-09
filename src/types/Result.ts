import type { Player } from './Player';

export type ChallengeResult = {
  player: Player;
  totalScore: number;
  classification: number;
  statistics: ChallengeResultStatistics;
};

export type SpeedChallengeResult = {
  player: Player;
  elapsedTime: number;
  classification: number;
};

export type NormalResultStatistics = {
  totalTime: number;
  elapsedTime: number;
};

export type SpeedResultStatistics = NormalResultStatistics & {};

export type ScoreResultStatistic = {
  challenge: string;
} & NormalResultStatistics;

export type ScoreResultStatistics = {
  wonChallenges: ScoreResultStatistic[];
  lostChallenges: ScoreResultStatistic[];
};

export type ChallengeResultStatistics = Partial<NormalResultStatistics> &
  Partial<SpeedResultStatistics> &
  Partial<ScoreResultStatistics>;
