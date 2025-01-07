import Title from '@/components/custom/Title';
import { Challenge } from '@/types/Challenge';

import ChallengeMoreInfoButton from '../challenge-info/ChallengeMoreInfoButton';
import ChallengeStatusInfo from './ChallengeStatusInfo';

type LobbyTitleProps = {
  challenge: Challenge;
};

export default function LobbyTitle({ challenge }: LobbyTitleProps) {
  return (
    <div className='flex'>
      <Title className='flex items-center'>
        <div className='flex items-center justify-start gap-1'>
          <p className='text-md'>
            Lobby:{' '}
            <span className='italic font-semibold'>{challenge.title}</span>
          </p>
          <ChallengeMoreInfoButton />
        </div>
        <ChallengeStatusInfo challenge={challenge} />
      </Title>
    </div>
  );
}
