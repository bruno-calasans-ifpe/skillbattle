'use client';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import useCreateChallengeStore, { TabName } from '@/store/createChallengeStore';

import PulseLoader from '../custom/PulseLoader';

type TabStatusIndicatorProps = {
  tab: TabName;
};

export default function TabStatusIndicator({ tab }: TabStatusIndicatorProps) {
  const { tabConfig } = useCreateChallengeStore();

  // pending
  if (!tabConfig.finished[tab])
    return (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <PulseLoader variant='error' size={2} />
          </TooltipTrigger>
          <TooltipContent>
            <p>Pendente</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );

  // ok
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <PulseLoader variant='success' size={2} />
        </TooltipTrigger>
        <TooltipContent>
          <p>Concluído</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
