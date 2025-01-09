import type { ChallengeResults } from '@/types/Result';

import { CHALLENGE_DATA } from './challenges';
import { PLAYERS_DATA } from './player';

export const SPEED_RESULTS_DATA: ChallengeResults = {
  challenge: CHALLENGE_DATA[0],
  classifications: [
    {
      player: PLAYERS_DATA[0],
      position: 1,
      statistics: {
        totalTime: 20,
        elapsedTime: 1,
      },
    },
    {
      player: PLAYERS_DATA[1],
      position: 2,
      statistics: {
        totalTime: 20,
        elapsedTime: 2,
      },
    },
    {
      player: PLAYERS_DATA[2],
      position: 3,
      statistics: {
        totalTime: 20,
        elapsedTime: 3,
      },
    },
    {
      player: PLAYERS_DATA[3],
      position: 4,
      statistics: {
        totalTime: 20,
        elapsedTime: 4,
      },
    },
    {
      player: PLAYERS_DATA[4],
      position: 5,
      statistics: {
        totalTime: 20,
        elapsedTime: 5,
      },
    },
  ],
};

export const NORMAL_RESULTS_DATA: ChallengeResults = {
  challenge: CHALLENGE_DATA[3],
  classifications: [
    {
      player: PLAYERS_DATA[0],
      position: 1,
      statistics: {
        totalTime: 20,
        elapsedTime: 1,
        totalScore: 20,
      },
    },
    {
      player: PLAYERS_DATA[1],
      position: 2,
      statistics: {
        totalTime: 20,
        elapsedTime: 2,
        totalScore: 18,
      },
    },
    {
      player: PLAYERS_DATA[2],
      position: 3,
      statistics: {
        totalTime: 20,
        elapsedTime: 3,
        totalScore: 16,
      },
    },
    {
      player: PLAYERS_DATA[3],
      position: 4,
      statistics: {
        totalTime: 20,
        elapsedTime: 4,
        totalScore: 10,
      },
    },
    {
      player: PLAYERS_DATA[4],
      position: 5,
      statistics: {
        totalTime: 20,
        elapsedTime: 5,
        totalScore: 5,
      },
    },
  ],
};

export const SCORE_RESULTS_DATA: ChallengeResults = {
  challenge: CHALLENGE_DATA[5],
  classifications: [
    {
      player: PLAYERS_DATA[0],
      position: 1,
      statistics: {
        challenges: [
          {
            challengeName: CHALLENGE_DATA[5].challenges[0],
            totalTime: 20,
            elapsedTime: 10,
            totalScore: 4,
            type: 'won',
          },
          {
            challengeName: CHALLENGE_DATA[5].challenges[0],
            totalTime: 20,
            elapsedTime: 10,
            totalScore: 4,
            type: 'won',
          },
          {
            challengeName: CHALLENGE_DATA[5].challenges[0],
            totalTime: 20,
            elapsedTime: 10,
            totalScore: 4,
            type: 'won',
          },
          {
            challengeName: CHALLENGE_DATA[5].challenges[0],
            totalTime: 20,
            elapsedTime: 10,
            totalScore: 4,
            type: 'won',
          },
          {
            challengeName: CHALLENGE_DATA[5].challenges[1],
            totalTime: 20,
            elapsedTime: 10,
            totalScore: 0,
            type: 'lose',
          },
        ],
      },
    },
    {
      player: PLAYERS_DATA[1],
      position: 2,
      statistics: {
        challenges: [
          {
            challengeName: CHALLENGE_DATA[5].challenges[0],
            totalTime: 20,
            elapsedTime: 10,
            totalScore: 4,
            type: 'won',
          },
          {
            challengeName: CHALLENGE_DATA[5].challenges[0],
            totalTime: 20,
            elapsedTime: 10,
            totalScore: 4,
            type: 'won',
          },
          {
            challengeName: CHALLENGE_DATA[5].challenges[0],
            totalTime: 20,
            elapsedTime: 10,
            totalScore: 1,
            type: 'lose',
          },
          {
            challengeName: CHALLENGE_DATA[5].challenges[1],
            totalTime: 20,
            elapsedTime: 10,
            totalScore: 4,
            type: 'won',
          },
        ],
      },
    },
    {
      player: PLAYERS_DATA[2],
      position: 3,
      statistics: {
        challenges: [
          {
            challengeName: CHALLENGE_DATA[5].challenges[0],
            totalTime: 20,
            elapsedTime: 10,
            totalScore: 4,
            type: 'won',
          },
          {
            challengeName: CHALLENGE_DATA[5].challenges[0],
            totalTime: 20,
            elapsedTime: 10,
            totalScore: 4,
            type: 'won',
          },
          {
            challengeName: CHALLENGE_DATA[5].challenges[0],
            totalTime: 20,
            elapsedTime: 10,
            totalScore: 2,
            type: 'lose',
          },
          {
            challengeName: CHALLENGE_DATA[5].challenges[1],
            totalTime: 20,
            elapsedTime: 10,
            totalScore: 1,
            type: 'lose',
          },
        ],
      },
    },
    {
      player: PLAYERS_DATA[3],
      position: 4,
      statistics: {
        challenges: [
          {
            challengeName: CHALLENGE_DATA[5].challenges[0],
            totalTime: 20,
            elapsedTime: 10,
            totalScore: 4,
            type: 'won',
          },
          {
            challengeName: CHALLENGE_DATA[5].challenges[0],
            totalTime: 20,
            elapsedTime: 10,
            totalScore: 1,
            type: 'lose',
          },
          {
            challengeName: CHALLENGE_DATA[5].challenges[1],
            totalTime: 20,
            elapsedTime: 10,
            totalScore: 0,
            type: 'lose',
          },
        ],
      },
    },
    {
      player: PLAYERS_DATA[4],
      position: 5,
      statistics: {
        challenges: [
          {
            challengeName: CHALLENGE_DATA[5].challenges[0],
            totalTime: 20,
            elapsedTime: 10,
            totalScore: 0,
            type: 'lose',
          },
          {
            challengeName: CHALLENGE_DATA[5].challenges[1],
            totalTime: 20,
            elapsedTime: 10,
            totalScore: 0,
            type: 'lose',
          },
        ],
      },
    },
  ],
};
