import { Card, CardContent } from '@/components/ui/card';
import { Challenge } from '@/types/Challenge';

import ChallengeCard from '../custom/ChallengeCard';

type RecentChallengesProps = {
  challenges: Challenge[];
};

export default function RecentChallenges({
  challenges,
}: RecentChallengesProps) {
  return (
    <div className='flex flex-col w-full gap-4'>
      <div className='grid lg:grid-cols-5 md:grid-cols-3 gap-2'>
        {challenges.map((challenge, index) => (
          <ChallengeCard key={challenge.title + index} challenge={challenge} />
        ))}
      </div>
    </div>
  );
}
