import { Challenge } from '@/types/Challenge';
import { ChallengeClassification } from '@/types/Result';

type SpeedChallengeResultMessageProps = {
  won?: boolean;
  classification: ChallengeClassification;
};

export default function SpeedChallengeResultMessage({
  won,
  classification,
}: SpeedChallengeResultMessageProps) {
  if (!won) {
    return (
      <div className='text-center'>
        <p className='text-6xl text-emerald-600 uppercase font-bold'>
          Você perdeu!
        </p>
        <p className='text-lg'>
          Infelizmente não foi dessa vez, você completou o desafio em{' '}
          <span className='font-semibold'>
            {classification.statistics.elapsedTime} minutos(s)
          </span>{' '}
          e ficou em{' '}
          <span className='font-semibold'>
            {classification.position}° lugar
          </span>
          !
        </p>
      </div>
    );
  }

  return (
    <div className='text-center'>
      <p className='text-6xl text-emerald-600 uppercase font-bold'>
        Você Ganhou!
      </p>
      <p className='text-lg'>
        Parabéns, você completou o desafio em{' '}
        <span className='font-semibold'>
          {classification.statistics.elapsedTime} minuto(s)
        </span>{' '}
        e ficou em{' '}
        <span className='font-semibold'>{classification.position}° lugar</span>!
      </p>
    </div>
  );
}
