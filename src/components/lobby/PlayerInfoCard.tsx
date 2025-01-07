import Link from 'next/link';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Player } from '@/types/Player';

type PlayerInfoCardProps = {
  player: Player;
};

export default function PlayerInfoCard({ player }: PlayerInfoCardProps) {
  return (
    <Link href={`/profile/${player.id}`}>
      <Card className='hover:bg-stone-100 cursor-pointer transition-all'>
        <CardContent className='flex items-center gap-1 p-2 overflow-hidden '>
          <Avatar>
            <AvatarImage src='https://github.com/shadcn.png' alt='@shadcn' />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <p className='font-semibold'>{player.username}</p>
        </CardContent>
      </Card>
    </Link>
  );
}
