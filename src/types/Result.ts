import type { Challenge } from './Challenge';
import type { Player } from './Player';

export type ChallengeResults = {
  challenge: Challenge;
  classifications: ChallengeClassification[];
};

export type ChallengeClassification = {
  player: Player;
  position: number;
  statistics: ChallengeResultStatistics;
};

export type NormalResultStatistics = {
  totalScore: number;
  totalTime: number;
  elapsedTime: number;
};

export type SpeedResultStatistics = NormalResultStatistics & {};

export type ScoreResultStatistic = NormalResultStatistics & {
  challengeName: string;
  type: 'won' | 'lose';
};

export type ScoreResultStatistics = {
  challenges: ScoreResultStatistic[];
};

export type ChallengeResultStatistics = Partial<NormalResultStatistics> &
  Partial<SpeedResultStatistics> &
  Partial<ScoreResultStatistics>;
