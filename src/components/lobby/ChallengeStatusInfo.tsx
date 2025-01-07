import { Badge } from '@/components/ui/badge';
import { Challenge } from '@/types/Challenge';

type ChallengeStatusInfoProps = {
  challenge: Challenge;
};

export default function ChallengeStatusInfo({
  challenge,
}: ChallengeStatusInfoProps) {
  const status = challenge.status;

  return (
    <div className='flex items-center'>
      {status === 'waiting' && (
        <Badge className='p-1 bg-indigo-500 hover:bg-indigo-500'>
          Esperando
        </Badge>
      )}

      {status === 'editing' && (
        <Badge className='p-1 bg-orange-500 hover:bg-orange-500'>
          Editando
        </Badge>
      )}

      {status === 'starting' && (
        <Badge className='p-1 bg-emerald-500 hover:bg-emerald-500'>
          Começando
        </Badge>
      )}

      {status === 'voting' && (
        <Badge className='p-1 bg-amber-500 hover:bg-amber-500'>Votando</Badge>
      )}
    </div>
  );
}
