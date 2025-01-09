import { ChallengeResult } from '@/types/Result';
import Title from '../custom/Title';
import Classification from './Classification';

type ClassificationResultsProps = { results: ChallengeResult[] };

export default function ClassificationResults({
  results,
}: ClassificationResultsProps) {
  return (
    <div className='flex flex-col gap-3'>
      <Title>Jogadores Classificados</Title>
      <div className='flex flex-col gap-2 scrollbar-thumb-purple-300 scrollbar-track-purple-700 h-fit overflow-y-scroll scrollbar-thin scrollbar-h-1 pr-2 items-start justify-center'>
        {results.map((result) => (
          <Classification key={result.player.id} result={result} />
        ))}
      </div>
    </div>
  );
}
