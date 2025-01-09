import { PLAYERS_DATA } from '@/config/player';
import { Challenge } from '@/types/Challenge';

import PlayerInfoCard from '../lobby/PlayerInfoCard';

type WaitingRoomPlayersProps = {
  challenge: Challenge;
};

export default function WaitingRoomPlayers({
  challenge,
}: WaitingRoomPlayersProps) {
  const host = 'deide_costa';

  return (
    <div className='flex flex-col  gap-1'>
      {/* Ttile */}
      <div>
        <p className='flex text-lg items-center font-semibold'>
          Jogadores que terminaram ({PLAYERS_DATA.length}/100)
        </p>
      </div>

      {/* Players */}
      <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-2 scrollbar-thumb-purple-300 scrollbar-track-purple-700 h-fit overflow-y-scroll scrollbar-thin scrollbar-h-1 pr-2 items-start justify-center'>
        {PLAYERS_DATA.map((player, index) => (
          <PlayerInfoCard
            key={player.id + index}
            player={player}
            host={host === player.username}
          />
        ))}
      </div>
    </div>
  );
}
