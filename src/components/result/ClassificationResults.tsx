import { ChallengeClassification, ChallengeResults } from '@/types/Result';

import Title from '../custom/Title';
import Classification from './Classification';
import StatisticsDialog from './StatisticsDialog';

type ClassificationResultsProps = {
  results: ChallengeResults;
  playerClassification: ChallengeClassification;
};

export default function ClassificationResults({
  results,
  playerClassification,
}: ClassificationResultsProps) {
  return (
    <div className='flex flex-col gap-2'>
      {/* Title */}
      <Title>
        <p>Classificação</p>
        <StatisticsDialog
          challenge={results.challenge}
          playerClassification={playerClassification}
        />
      </Title>

      {/* Classifications */}
      <div className='flex flex-col gap-2 scrollbar-thumb-purple-300 scrollbar-track-purple-700 h-fit overflow-y-scroll scrollbar-thin scrollbar-h-1 pr-2 items-start justify-center'>
        {results.classifications.map((classification) => (
          <Classification
            key={classification.player.id}
            classification={classification}
            challenge={results.challenge}
            hightlight={
              playerClassification.player.id === classification.player.id
            }
          />
        ))}
      </div>
    </div>
  );
}
