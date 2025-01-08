import ChallengeMoreInfoButton from '@/components/challenge-info/ChallengeMoreInfoButton';
import Title from '@/components/custom/Title';
import WaitingRoomStatus from '@/components/waiting-room/WaitingRoomStatus';
import type { Challenge } from '@/types/Challenge';

type WaitingRoomTitleProps = {
  challenge: Challenge;
};

export default function WaitingRoomTitle({ challenge }: WaitingRoomTitleProps) {
  return (
    <Title className='flex items-center justify-between'>
      <div className='flex items-center gap-1'>
        <p>
          Sala de Espera:{' '}
          <span className='text-md font-semibold italic'>
            {challenge.title}
          </span>
        </p>
        <ChallengeMoreInfoButton />
      </div>
      <WaitingRoomStatus status='waiting voting' />
    </Title>
  );
}
