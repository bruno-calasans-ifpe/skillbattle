import { Info } from 'lucide-react';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

export default function ChallengeMoreInfoButton() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Info
            className='text-indigo-600 cursor-pointer hover:text-indigo-800'
            size={20}
          />
        </TooltipTrigger>
        <TooltipContent>
          <p>Mais informações</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
