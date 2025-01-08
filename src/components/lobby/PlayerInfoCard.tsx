import Link from 'next/link';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { Player } from '@/types/Player';
import { Crown } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

type PlayerInfoCardProps = {
  player: Player;
  host?: boolean;
};

export default function PlayerInfoCard({ player, host }: PlayerInfoCardProps) {
  return (
    <Link href={`/profile/${player.id}`}>
      <Card className='hover:bg-stone-100 cursor-pointer transition-all'>
        <CardContent className='flex items-center gap-1 p-2 overflow-hidden '>
          <Avatar>
            <AvatarImage src='https://github.com/shadcn.png' alt='@shadcn' />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <p className='font-semibold'>{player.username}</p>
          {host && (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Crown size={18} className='text-amber-500 fill-amber-500' />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Criador do desafio</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          )}
        </CardContent>
      </Card>
    </Link>
  );
}
