import Title from '@/components/custom/Title';
import ChallengeMoreInfoButton from '@/components/challenge-info/ChallengeMoreInfoButton';
import { Challenge } from '@/types/Challenge';
import GiveUpButton from '../custom/GiveUpButton';

type VotingTitleProps = {
  challenge: Challenge;
};

export default function VotingTitle({ challenge }: VotingTitleProps) {
  return (
    <header className='flex flex-col gap-3'>
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
      </Title>
      <div className='flex justify-between items-center'>
        <p className='font-bold'>
          Desafio:{' '}
          <span className='text-emerald-500'>{challenge.challenges[0]}</span>
        </p>
        <GiveUpButton />
      </div>
    </header>
  );
}
