import { Challenge } from '@/types/Challenge';

import InfoText from '../custom/InfoText';

type ChallengeInfoRulesProps = {
  challenge: Challenge;
};

export default function ChallengeInfoRules({
  challenge,
}: ChallengeInfoRulesProps) {
  return (
    <div className='flex flex-col flex-1 my-4 gap-2'>
      {/* General Rules */}
      <InfoText title='Número máximo de jogadores'>
        {challenge.rules.maxPlayerNum}
      </InfoText>

      {/* Speed Challenge Rules */}
      {challenge.rules.classifications && (
        <InfoText title='Classificações'>
          {challenge.rules.classifications}
        </InfoText>
      )}

      {/* Score challenge rules */}
      {challenge.rules.maxRounds && (
        <InfoText title='Número Máximo de Rounds'>
          {challenge.rules.maxRounds}
        </InfoText>
      )}

      {challenge.rules.maxRoundTime && (
        <InfoText title='Tempo máximo de cada round (minutos)'>
          {challenge.rules.maxRoundTime}
        </InfoText>
      )}

      {challenge.type === 'score' && (
        <InfoText title='Número de desafios'>
          {challenge.challenges.length}
        </InfoText>
      )}

      {challenge.rules.selectionType && (
        <InfoText title='Seleção dos desafios'>
          {challenge.rules.selectionType === 'order' ? 'Ordem' : 'Aleatório'}
        </InfoText>
      )}
    </div>
  );
}
