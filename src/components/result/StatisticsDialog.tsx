import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Challenge } from '@/types/Challenge';
import { ChallengeClassification } from '@/types/Result';

import InfoText from '../custom/InfoText';
import Title from '../custom/Title';
import { Button } from '../ui/button';
import ScoreStatistics from './ScoreStatistics';

type StatisticsDialogProps = {
  challenge: Challenge;
  playerClassification: ChallengeClassification;
};

export default function StatisticsDialog({
  challenge,
  playerClassification,
}: StatisticsDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          size='sm'
          variant='outline'
          className='bg-indigo-500 text-white p-2 font-bold hover:bg-indigo-600 h-7 transition-all delay-75 hover:text-white'
        >
          Ver Estatísticas
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>
          <Title>Estatísticas</Title>
        </DialogTitle>

        {challenge.type !== 'score' && (
          <>
            <InfoText title='Desafio'>
              <p>{challenge.challenges[0]}</p>
            </InfoText>

            <InfoText title='Classificação'>
              <p>{playerClassification.position}&deg; lugar</p>
            </InfoText>

            <InfoText title='Tempo decorrido'>
              <p>{playerClassification.statistics.elapsedTime} minutos</p>
            </InfoText>

            <InfoText title='Tempo total'>
              <p>{playerClassification.statistics.totalTime} minutos</p>
            </InfoText>
          </>
        )}

        {challenge.type === 'score' && (
          <ScoreStatistics
            challenge={challenge}
            classification={playerClassification}
          />
        )}
      </DialogContent>
    </Dialog>
  );
}
