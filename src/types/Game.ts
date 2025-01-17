// import type { Challenge } from './Challenge';
import { User } from './User';

export type Game = {
  title: string;
  image: string;
  desc: string;
  categories: string[];
  challenges: Challenge[];
  createdBy: string;
  status: GameStatus;
  players: User[];
};

export type GameStatus =
  | 'waiting' // waiting for players or waiting players to finish
  | 'starting' // game is starting
  | 'playing' // players are playing
  | 'voting' // players are voting
  | 'editing' // host is editing the game
  | 'finished'; // game is finished

type Challenge = {
  name: string;
};
