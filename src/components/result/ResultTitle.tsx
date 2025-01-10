import ChallengeMoreInfoButton from '@/components/challenge-info/ChallengeMoreInfoButton';
import Title from '@/components/custom/Title';
import { Challenge } from '@/types/Challenge';
import ExitButton from './ExitButton';

type ResultTitleProps = {
  challenge: Challenge;
};

export default function ResultTitle({ challenge }: ResultTitleProps) {
  return (
    <header className='flex flex-col gap-3'>
      <Title className='flex items-center justify-between pb-1'>
        <div className='flex items-center gap-1'>
          <p>
            Resultado:{' '}
            <span className='text-md font-semibold italic'>
              {challenge.title}
            </span>
          </p>
          <ChallengeMoreInfoButton />
        </div>
        <ExitButton challenge={challenge} />
      </Title>
    </header>
  );
}
