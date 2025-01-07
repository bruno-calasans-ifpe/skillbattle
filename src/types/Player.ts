export type Player = {
  id: string;
  username: string;
  type: PlayerType;
  email: string;
};

export type PlayerType = 'admin' | 'user';
