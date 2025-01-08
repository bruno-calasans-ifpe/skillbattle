import ChallengeMoreInfoButton from '@/components/challenge-info/ChallengeMoreInfoButton';
import ContentContainer from '@/components/custom/ContentContainer';
import Title from '@/components/custom/Title';
import PlayChallengeForm from '@/components/play-challenge/PlayChallengeForm';
import PlayChallengeInfo from '@/components/play-challenge/PlayChallengeInfo';
import PlayScoreChallengeInfo from '@/components/play-challenge/PlayScoreChallengeInfo';
import PlaySpeedChallengeInfo from '@/components/play-challenge/PlaySpeedChallengeInfo';
import { CHALLENGE_DATA } from '@/config/challenges';

type PlayChallengePageProps = {
  params: Promise<{ challengeId: string }>;
};

export default async function PlayChallengePage({
  params,
}: PlayChallengePageProps) {
  const { challengeId } = await params;

  const foundChallenge = CHALLENGE_DATA.find((c) => c.id === challengeId);

  if (!foundChallenge) return <p>Desafio não encontrado</p>;

  return (
    <ContentContainer>
      {/* Título */}
      <Title className='flex justify-start items-center'>
        <p>{foundChallenge.title}</p>
        <ChallengeMoreInfoButton />
      </Title>

      {/* Challenge Info */}
      <div className='flex gap-3'>
        {foundChallenge.type === 'normal' && (
          <PlayChallengeInfo challenge={foundChallenge} />
        )}

        {foundChallenge.type === 'speed' && (
          <PlaySpeedChallengeInfo challenge={foundChallenge} />
        )}

        {foundChallenge.type === 'score' && (
          <PlayScoreChallengeInfo challenge={foundChallenge} />
        )}

        <PlayChallengeForm challenge={foundChallenge} />
      </div>
    </ContentContainer>
  );
}
