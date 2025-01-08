import ContentContainer from '@/components/custom/ContentContainer';
import Title from '@/components/custom/Title';
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
      <Title>{foundChallenge.title}</Title>

      {/* Challenge Info */}
      <div></div>
    </ContentContainer>
  );
}
