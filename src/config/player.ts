import { v4 as uuidv4 } from 'uuid';

import { Player } from '@/types/Player';

export const PLAYERS_DATA: Player[] = [
  {
    id: uuidv4(),
    username: 'deide_costa',
    email: 'deide_costa@email.com',
    type: 'user',
  },
  {
    id: uuidv4(),
    username: 'voh_lim_habar',
    email: 'voh_lim_habar@email.com',
    type: 'user',
  },
  {
    id: uuidv4(),
    username: 'kiku_lindo',
    email: 'kiku_lindo@email.com',
    type: 'user',
  },
  {
    id: uuidv4(),
    username: 'paula_vadão',
    email: 'paula_vadão@email.com',
    type: 'user',
  },
  {
    id: uuidv4(),
    username: 'thomas_turbando',
    email: 'thomas_turbando@email.com',
    type: 'user',
  },
];
