import { Challenge } from '@/types/Challenge';
import { ChallengeClassification } from '@/types/Result';

type ScoreChallengeResultMessageProps = {
  won?: boolean;
  classification: ChallengeClassification;
};

export default function ScoreChallengeResultMessage({
  classification,
  won,
}: ScoreChallengeResultMessageProps) {
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
              {
                classification.statistics.challenges?.filter(
                  (c) => c.type === 'won',
                ).length
              }{' '}
              ponto(s)
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
        Parabéns, você completou os desafios com {/* score */}
        <span className='font-semibold'>
          {
            classification.statistics.challenges?.filter((c) => c.type == 'won')
              .length
          }{' '}
          ponto(s){' '}
        </span>
        e ficou em{' '}
        <span className='font-semibold'>{classification.position}° lugar</span>!
      </p>
    </div>
  );
}
