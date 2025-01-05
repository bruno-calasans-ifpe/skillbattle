import type { Challenge } from '@/types/Challenge';

import {
  DEFAULT_NORMAL_RULES,
  DEFAULT_SCORE_RULES,
  DEFAULT_SPEED_RULES,
} from './defaultRules';

export const CHALLENGE_DATA: Challenge[] = [
  {
    title: 'Desafio1',
    categories: ['Arte'],
    type: 'speed',
    image: '/imgs/challenge.svg',
    challenges: ['Desafio'],
    rules: DEFAULT_SPEED_RULES,
  },
  {
    title: 'Desafio2',
    categories: ['Música'],
    type: 'speed',
    image: '/imgs/challenge.svg',
    challenges: ['Desafio'],
    rules: DEFAULT_SPEED_RULES,
  },
  {
    title: 'Desafio3',
    categories: ['Comunicação'],
    type: 'normal',
    image: '/imgs/challenge.svg',
    challenges: ['Desafio'],
    rules: DEFAULT_NORMAL_RULES,
  },
  {
    title: 'Desafio4',
    categories: ['Dança'],
    type: 'normal',
    image: '/imgs/challenge.svg',
    challenges: ['Desafio'],
    rules: DEFAULT_NORMAL_RULES,
  },
  {
    title: 'Desafio5',
    categories: ['Video'],
    type: 'score',
    image: '/imgs/challenge.svg',
    challenges: ['Desafio Score 1', 'Desafio Score 2'],
    rules: DEFAULT_SCORE_RULES,
  },
  {
    title: 'Desafio6',
    categories: ['Design'],
    type: 'score',
    image: '/imgs/challenge.svg',
    challenges: ['Desafio Score 1', 'Desafio Score 2'],
    rules: DEFAULT_SCORE_RULES,
  },
  {
    title: 'Desafio7',
    categories: ['Video'],
    type: 'score',
    image: '/imgs/challenge.svg',
    challenges: ['Desafio Score 1', 'Desafio Score 2'],
    rules: DEFAULT_SCORE_RULES,
  },
];
