import { Heart, Share2, User } from 'lucide-react';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

type ChallengeInfoOtherActionsProps = {};

export default function ChallengeInfoOtherActions({}: ChallengeInfoOtherActionsProps) {
  return (
    <div className='flex justify-between'>
      {/* Players */}
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <div className='flex gap-1 items-center text-indigo-700 font-bold cursor-pointer hover:text-indigo-800'>
              <User size={20} />
              <p>10/30</p>
            </div>
          </TooltipTrigger>
          <TooltipContent side='bottom'>
            <p>Jogadores</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      {/* Favorites */}
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <div className='flex gap-1 items-center text-red-700 font-bold cursor-pointer hover:fill-bg-700 group transition-all'>
              <Heart
                size={20}
                className='group-hover:fill-red-700 transition-all'
              />
              <p>20</p>
            </div>
          </TooltipTrigger>
          <TooltipContent side='bottom'>
            <p>Favoritar</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      {/* Share */}
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <div className='flex gap-1 items-center text-stone-700 font-bold group cursor-pointer hover:text-indigo-800'>
              <Share2 size={20} />
              <p className='group-hover:underline'>Compartilhar</p>
            </div>
          </TooltipTrigger>
          <TooltipContent side='bottom'>
            <p>Compartilhe com seus amigos</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}
