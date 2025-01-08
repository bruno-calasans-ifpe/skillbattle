import { PLAYERS_DATA } from '@/config/player';
import { Challenge } from '@/types/Challenge';

import PlayerInfoCard from './PlayerInfoCard';

type LobbyPlayersProps = { challenge: Challenge };

export default function LobbyPlayers({ challenge }: LobbyPlayersProps) {
  return (
    <div className='flex flex-col  gap-1'>
      {/* Ttile */}
      <div>
        <p className='flex items-center font-semibold'>
          Jogadores ({PLAYERS_DATA.length}/100)
        </p>
      </div>

      {/* Players */}
      <div className='grid grid-cols-2 gap-2 scrollbar-thumb-purple-300 scrollbar-track-purple-700 h-52 overflow-y-scroll scrollbar-thin scrollbar-h-1 pr-2'>
        {PLAYERS_DATA.map((player, index) => (
          <PlayerInfoCard
            key={player.id + index}
            player={player}
            host={challenge.createdBy === player.username}
          />
        ))}
      </div>
    </div>
  );
}
