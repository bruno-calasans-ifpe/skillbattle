import Chat from '@/components/custom/Chat';
import ContentContainer from '@/components/custom/ContentContainer';
import WaitingRoomInfo from '@/components/waiting-room/WaitingRoomInfo';
import WaitingRoomPlayers from '@/components/waiting-room/WaitingRoomPlayers';
import WaitingRoomTitle from '@/components/waiting-room/WaitingRoomTitle';
import { CHALLENGE_DATA } from '@/config/challenges';
import { PLAYERS_DATA } from '@/config/player';

type WaitingRoomPageProps = {
  params: Promise<{ challengeId: string }>;
};

export default async function WaitingRoomPage({
  params,
}: WaitingRoomPageProps) {
  const { challengeId } = await params;
  const foundChallenge = CHALLENGE_DATA.find((c) => c.id === challengeId);

  if (!foundChallenge) return;

  return (
    <ContentContainer classname='gap-8'>
      <header className='flex flex-col gap-3'>
        <WaitingRoomTitle challenge={foundChallenge} />
        <WaitingRoomInfo challenge={foundChallenge} />
        <WaitingRoomPlayers challenge={foundChallenge} />
      </header>
      <Chat title='Chat da Sala de Espera' player={PLAYERS_DATA[0]} />
    </ContentContainer>
  );
}
