import InfoText from '@/components/custom/InfoText';
import { Challenge } from '@/types/Challenge';
import ChallengeCategoryBadge from '@/components/custom/ChallengeCategoryBadge';
import ChallengeTypeBadge from '@/components/custom/ChallengeTypeBadge';

type PlaySpeedChallengeInfoProps = {
  challenge: Challenge;
};

export default function PlaySpeedChallengeInfo({
  challenge,
}: PlaySpeedChallengeInfoProps) {
  return (
    <div className='flex flex-col gap-3 w-52'>
      <InfoText title='Desafio'>
        <p className='text-emerald-500'>{challenge.challenges[0]}</p>
      </InfoText>
      <InfoText title='Posições restantes'>
        <p className='text-red-500'>
          1 de {challenge.rules.classifications!} posições
        </p>
      </InfoText>
      <InfoText title='Tempo Decorrido'>1 minuto(s)</InfoText>
      <InfoText title='Tempo Total'>5 minuto(s)</InfoText>
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
