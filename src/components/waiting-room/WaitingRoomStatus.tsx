import { Badge } from '../ui/badge';

type WaitingRoomStatusProps = {
  status: 'waiting voting' | 'waiting players';
};

export default function WaitingRoomStatus({ status }: WaitingRoomStatusProps) {
  return (
    <>
      {status === 'waiting players' && (
        <Badge className='p-1 bg-indigo-500 hover:bg-indigo-500'>
          Aguardando jogadores
        </Badge>
      )}
      {status === 'waiting voting' && (
        <Badge className='p-1 bg-amber-500 hover:bg-amber-500'>
          Aguardando votação
        </Badge>
      )}
    </>
  );
}
