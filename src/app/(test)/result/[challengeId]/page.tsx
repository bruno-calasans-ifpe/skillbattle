import ContentContainer from '@/components/custom/ContentContainer';
import Classifications from '@/components/result/ClassificationResults';
import ResultMessage from '@/components/result/ResultMessage';
import ResultTitle from '@/components/result/ResultTitle';
import { CHALLENGE_DATA } from '@/config/challenges';
import { PLAYERS_DATA } from '@/config/player';
import { NORMAL_RESULTS_DATA } from '@/config/results';

type ResultPageProps = {
  params: Promise<{ challengeId: string }>;
};

export default async function ResultPage({ params }: ResultPageProps) {
  const { challengeId } = await params;

  const foundChallenge = CHALLENGE_DATA.find((c) => c.id === challengeId);
  if (!foundChallenge) return;

  const currentPlayer = PLAYERS_DATA[0];

  const foundResult = NORMAL_RESULTS_DATA.find(
    (r) => r.player.id === currentPlayer.id,
  );
  if (!foundResult) return;

  return (
    <ContentContainer>
      <ResultTitle challenge={foundChallenge} />
      <ResultMessage currentPlayer={currentPlayer} result={foundResult} />
      <Classifications results={NORMAL_RESULTS_DATA} />
    </ContentContainer>
  );
}
