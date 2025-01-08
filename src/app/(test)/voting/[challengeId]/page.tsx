import ContentContainer from '@/components/custom/ContentContainer';
import VotingSentFiles from '@/components/voting/VotingSentFiles';
import VotingTitle from '@/components/voting/VotingTitle';
import { CHALLENGE_DATA } from '@/config/challenges';

type VotingPageProps = {
  params: Promise<{ challengeId: string }>;
};

export default async function VotingPage({ params }: VotingPageProps) {
  const { challengeId } = await params;
  const foundChallenge = CHALLENGE_DATA.find((c) => c.id === challengeId);
  if (!foundChallenge) return;

  return (
    <ContentContainer>
      <VotingTitle challenge={foundChallenge} />
      <VotingSentFiles />
    </ContentContainer>
  );
}
