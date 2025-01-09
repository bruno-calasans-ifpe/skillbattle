import { ChallengeResult, SpeedChallengeResult } from '@/types/Result';
import { PLAYERS_DATA } from './player';
import { CHALLENGE_DATA } from './challenges';

export const NORMAL_RESULTS_DATA: ChallengeResult[] = [
  {
    player: PLAYERS_DATA[0],
    totalScore: 10,
    classification: 1,
    statistics: {
      totalTime: 50,
      elapsedTime: 10,
    },
  },
  {
    player: PLAYERS_DATA[1],
    totalScore: 9,
    classification: 2,
    statistics: {
      totalTime: 50,
      elapsedTime: 10,
    },
  },
  {
    player: PLAYERS_DATA[2],
    totalScore: 8,
    classification: 3,
    statistics: {
      totalTime: 50,
      elapsedTime: 10,
    },
  },
  {
    player: PLAYERS_DATA[3],
    totalScore: 5,
    classification: 4,
    statistics: {
      totalTime: 50,
      elapsedTime: 10,
    },
  },
  {
    player: PLAYERS_DATA[4],
    totalScore: 1,
    classification: 5,
    statistics: {
      totalTime: 50,
      elapsedTime: 10,
    },
  },
];
