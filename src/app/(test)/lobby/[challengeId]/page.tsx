import LobbyChat from '@/components/custom/Chat';
import ContentContainer from '@/components/custom/ContentContainer';
import LobbyActions from '@/components/lobby/LobbyActions';
import LobbyInfo from '@/components/lobby/LobbyInfo';
import LobbyPlayers from '@/components/lobby/LobbyPlayers';
import LobbyTitle from '@/components/lobby/LobbyTitle';
import { CHALLENGE_DATA } from '@/config/challenges';
import { PLAYERS_DATA } from '@/config/player';

type ChallengeLobbyProps = {
  params: Promise<{ challengeId: string }>;
};

export default async function ChallengeLobby({ params }: ChallengeLobbyProps) {
  const { challengeId } = await params;
  const foundChallenge = await CHALLENGE_DATA.find(
    (c) => c.title.toLowerCase() === challengeId.toLowerCase(),
  );

  if (!foundChallenge) return;

  return (
    <ContentContainer>
      <div className='flex flex-col gap-8'>
        {/* Header */}
        <header className='flex flex-col gap-3'>
          {/* Challenge Title */}
          <LobbyTitle challenge={foundChallenge} />

          <div className='flex gap-4'>
            {/* Challenge Actions and Image */}
            <div id='lobby-img-actions' className='flex flex-col gap-2'>
              {/* Challenge Image */}
              <img
                id='lobby-challenge-img'
                src={foundChallenge.image}
                alt={foundChallenge.title}
                className='h-40 w-40 shadow-sm rounded-md object-contain'
              />

              {/* Lobby Actions */}
              <LobbyActions challenge={foundChallenge} />
            </div>

            {/* Some info */}
            <LobbyInfo challenge={foundChallenge} />

            {/* Players */}
            <LobbyPlayers challenge={foundChallenge} />
          </div>
        </header>
        {/* chat */}
        <LobbyChat title='Chat do lobby' player={PLAYERS_DATA[0]} />
      </div>
    </ContentContainer>
  );
}
