import { Info } from 'lucide-react';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

type ChallengeMoreInfoButtonProps = {};

export default function ChallengeMoreInfoButton({}: ChallengeMoreInfoButtonProps) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Info
            className='text-indigo-600 cursor-pointer hover:text-indigo-800'
            size={24}
          />
        </TooltipTrigger>
        <TooltipContent>
          <p>Mais informações</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
