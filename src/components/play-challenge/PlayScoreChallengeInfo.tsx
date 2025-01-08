import ChallengeCategoryBadge from '@/components/custom/ChallengeCategoryBadge';
import ChallengeTypeBadge from '@/components/custom/ChallengeTypeBadge';
import InfoText from '@/components/custom/InfoText';
import { Challenge } from '@/types/Challenge';

type PlayScoreChallengeInfoProps = {
  challenge: Challenge;
};

export default function PlayScoreChallengeInfo({
  challenge,
}: PlayScoreChallengeInfoProps) {
  return (
    <div className='flex flex-col gap-3 w-60'>
      <InfoText title='Desafio'>
        <p className='text-emerald-500'>{challenge.challenges[0]}</p>
      </InfoText>
      <InfoText title='Round'>
        <p className='text-red-500'>1 de {challenge.rules.maxRounds} rounds</p>
      </InfoText>
      <InfoText title='Tempo Decorrido (round)'>1 minuto(s)</InfoText>
      <InfoText title='Tempo Total (round)'>
        {challenge.rules.maxRoundTime} minuto(s)
      </InfoText>
      <InfoText title='Tipo de Desafio'>
        <ChallengeTypeBadge>{challenge.type}</ChallengeTypeBadge>
      </InfoText>
      <InfoText title='Categoria(s)'>
        {challenge.categories.map((category, index) => (
          <ChallengeCategoryBadge key={category + index}>
            {category}
          </ChallengeCategoryBadge>
        ))}
      </InfoText>
    </div>
  );
}
