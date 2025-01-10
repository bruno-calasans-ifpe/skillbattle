import { ChallengeClassification } from '@/types/Result';

type NormalChallengeResultMessageProps = {
  won?: boolean;
  classification: ChallengeClassification;
};

export default function NormalChallengeResultMessage({
  won,
  classification,
}: NormalChallengeResultMessageProps) {
  if (!won) {
    return (
      <div className='text-center'>
        <>
          <p className='text-6xl text-red-600 uppercase font-bold'>
            Você perdeu!
          </p>
          <p className='text-lg'>
            Infelizmente não foi dessa vez, você completou o desafio com{' '}
            <span className='font-semibold'>
              {classification.statistics.totalScore} ponto(s)
            </span>{' '}
            e ficou em{' '}
            <span className='font-semibold'>
              {classification.position}° lugar
            </span>
            !
          </p>
        </>
      </div>
    );
  }

  return (
    <div className='text-center'>
      <p className='text-6xl text-emerald-600 uppercase font-bold'>
        Você ganhou!
      </p>
      <p className='text-lg'>
        Parabéns, você fez o desafio com
        {/* score */}
        <span className='font-semibold'>
          {classification.statistics.totalScore} ponto(s)
        </span>
        e ficou em{' '}
        <span className='font-semibold'>{classification.position}° lugar</span>!
      </p>
    </div>
  );
}
