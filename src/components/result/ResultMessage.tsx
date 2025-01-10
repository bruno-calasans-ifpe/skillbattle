import { Challenge } from '@/types/Challenge';
import { ChallengeClassification } from '@/types/Result';

import NormalChallengeResultMessage from './NormalChallengeResultMessage';
import ScoreChallengeResultMessage from './ScoreChallengeResultMessage';
import SpeedChallengeResultMessage from './SpeedChallengeResultMessage';

type ResultMessageProps = {
  challenge: Challenge;
  playerClassification: ChallengeClassification;
};

export default function ResultMessage({
  challenge,
  playerClassification,
}: ResultMessageProps) {
  
  const won = playerClassification.position === 1;

  return (
    <div className='flex flex-col gap-2 items-center justify-center my-7'>
      {challenge.type === 'speed' && (
        <SpeedChallengeResultMessage
          won={won}
          classification={playerClassification}
        />
      )}

      {challenge.type === 'normal' && (
        <NormalChallengeResultMessage
          won={won}
          classification={playerClassification}
        />
      )}

      {challenge.type === 'score' && (
        <ScoreChallengeResultMessage
          won={won}
          classification={playerClassification}
        />
      )}
    </div>
  );
}
