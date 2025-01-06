import { Challenge } from '@/types/Challenge';

type ChallengeInfoRulesProps = {
  challenge: Challenge;
};

export default function ChallengeInfoRules({
  challenge,
}: ChallengeInfoRulesProps) {
  return (
    <div className='flex flex-col flex-1 my-4 gap-2'>
      {/* General Rules */}
      <div className='flex flex-col'>
        <p className='font-bold'>Número máximo de jogadores</p>
        <p className='font-bold text-stone-500'>
          {challenge.rules.maxPlayerNum}
        </p>
      </div>

      {/* Speed Challenge Rules */}
      {challenge.rules.classifications && (
        <div className='flex flex-col'>
          <p className='font-bold'>Classificações</p>
          <p className='font-bold  text-stone-500'>
            {challenge.rules.classifications}
          </p>
        </div>
      )}

      {/* Score challenge rules */}
      {challenge.rules.maxRounds && (
        <div className='flex flex-col'>
          <p className='font-bold'>Número Máximo de Rounds</p>
          <p className='font-bold  text-stone-500'>
            {challenge.rules.maxRounds}
          </p>
        </div>
      )}

      {challenge.rules.maxRoundTime && (
        <div className='flex flex-col'>
          <p className='font-bold'>Tempo máximo de cada round (minutos)</p>
          <p className='font-bold  text-stone-500'>
            {challenge.rules.maxRoundTime}
          </p>
        </div>
      )}

      {challenge.type === 'score' && (
        <div className='flex flex-col'>
          <p className='font-bold'>Número de desafios</p>
          <p className='font-bold  text-stone-500'>
            {challenge.challenges.length}
          </p>
        </div>
      )}

      {challenge.rules.selectionType && (
        <div className='flex flex-col'>
          <p className='font-bold'>Seleção dos desafios</p>
          <p className='font-bold  text-stone-500'>
            {challenge.rules.selectionType === 'order' ? 'Ordem' : 'Aleatório'}
          </p>
        </div>
      )}
    </div>
  );
}
