import { PlayerMessage, SystemMessage } from '@/types/Message';

export const LOBBY_MESSAGES_DATA: (SystemMessage | PlayerMessage)[] = [
  {
    type: 'system',
    sender: 'system',
    content: 'Jogador user12321 entrou',
    variant: 'join',
  },
  {
    type: 'system',
    sender: 'system',
    content: 'Jogador user12321 saiu',
    variant: 'exit',
  },
  {
    type: 'player',
    sender: 'claudio_xerecudo',
    content: 'O de baixo é gay',
  },
  {
    type: 'player',
    sender: 'flavio_comedor',
    content: 'Como o de cima',
  },
  {
    type: 'player',
    sender: 'lixoso',
    content: 'Vocês são todos lixos',
  },
  {
    type: 'player',
    sender: 'curi_oso',
    content: 'Comi o cu de curioso',
  },
  {
    type: 'player',
    sender: 'kevin_mamando',
    content: 'Gosto de mamar',
  },
  {
    type: 'player',
    sender: 'jali_habei',
    content: 'Você foi enrabado',
  },
];
