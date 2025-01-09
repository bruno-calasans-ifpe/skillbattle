import Commentaries from '@/components/custom/Commentaries';
import ContentContainer from '@/components/custom/ContentContainer';
import Classifications from '@/components/result/ClassificationResults';
import ResultMessage from '@/components/result/ResultMessage';
import ResultTitle from '@/components/result/ResultTitle';
import { CHALLENGE_DATA } from '@/config/challenges';
import { PLAYERS_DATA } from '@/config/player';
import {
  NORMAL_RESULTS_DATA,
  SCORE_RESULTS_DATA,
  SPEED_RESULTS_DATA,
} from '@/config/results';

type ResultPageProps = {
  params: Promise<{ challengeId: string }>;
};

export default async function ResultPage({ params }: ResultPageProps) {
  const { challengeId } = await params;

  const foundChallenge = CHALLENGE_DATA.find((c) => c.id === challengeId);
  if (!foundChallenge) return;

  const currentPlayer = PLAYERS_DATA[1];

  const getPlayerClassification = () => {
    if (foundChallenge.type === 'speed')
      return SPEED_RESULTS_DATA.classifications.find(
        (r) => r.player.id === currentPlayer.id,
      );

    if (foundChallenge.type === 'score')
      return SCORE_RESULTS_DATA.classifications.find(
        (r) => r.player.id === currentPlayer.id,
      );

    return NORMAL_RESULTS_DATA.classifications.find(
      (r) => r.player.id === currentPlayer.id,
    );
  };

  const playerClassification = getPlayerClassification();
  if (!playerClassification) return;

  return (
    <ContentContainer>
      <ResultTitle challenge={foundChallenge} />

      <ResultMessage
        challenge={foundChallenge}
        playerClassification={playerClassification}
      />

      {foundChallenge.type === 'normal' && (
        <Classifications
          results={NORMAL_RESULTS_DATA}
          playerClassification={playerClassification}
        />
      )}

      {foundChallenge.type === 'speed' && (
        <Classifications
          results={SPEED_RESULTS_DATA}
          playerClassification={playerClassification}
        />
      )}

      {foundChallenge.type === 'score' && (
        <Classifications
          results={SCORE_RESULTS_DATA}
          playerClassification={playerClassification}
        />
      )}

      <Commentaries />
    </ContentContainer>
  );
}
