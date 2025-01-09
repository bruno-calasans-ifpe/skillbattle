import { Player } from '@/types/Player';
import { ChallengeResult } from '@/types/Result';

type ResultMessageProps = {
  currentPlayer: Player;
  result: ChallengeResult;
};

export default function ResultMessage({
  currentPlayer,
  result,
}: ResultMessageProps) {
    
  const won =
    currentPlayer.id === result.player.id && result.classification === 1;

  return (
    <div>
      {/* title and subtitle */}
      <div className='flex flex-col gap-2 items-center justify-center'>
        {won && (
          <>
            <p className='text-6xl text-emerald-600 uppercase font-bold'>
              Você ganhou!
            </p>
            <p className='text-lg'>
              Parabéns, você fez{' '}
              <span className='font-semibold'>{result.totalScore} pontos</span>{' '}
              e ficou em{' '}
              <span className='font-semibold'>
                {result.classification}° lugar
              </span>
              !
            </p>
          </>
        )}

        {!won && (
          <>
            <p className='text-6xl text-red-600 uppercase font-bold'>
              Você perdeu!
            </p>
            <p className='text-lg'>
              Infelizmente não foi dessa vez, você fez{' '}
              <span className='font-semibold'>{result.totalScore} pontos</span>{' '}
              e ficou em{' '}
              <span className='font-semibold'>
                {result.classification}° lugar
              </span>
              !
            </p>
          </>
        )}
      </div>
    </div>
  );
}
