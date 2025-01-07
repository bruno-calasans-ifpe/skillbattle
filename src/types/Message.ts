export type Message = {
  type: 'system' | 'player';
  sender: string;
  content: string;
};

export type SystemMessage = Message & {
  sender: 'system';
  variant: 'join' | 'exit';
};

export type PlayerMessage = Message & {};
