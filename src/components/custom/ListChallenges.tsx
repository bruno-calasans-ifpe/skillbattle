import { cn } from '@/lib/utils';
import { Challenge } from '@/types/Challenge';

import ChallengeCard from './ChallengeCard';

type ListChallengesProps = {
  title: React.ReactNode;
  challenges: Challenge[];
  orientation?: 'horizontal' | 'vertical';
};

export default function ListChallenges({
  title,
  challenges,
  orientation = 'vertical',
}: ListChallengesProps) {
  return (
    // Container
    <div id='list-challenges' className='flex flex-col w-full gap-4'>
      {/* Title */}
      <h1 className='text-3xl border-b-2 border-purple-600'>{title}</h1>
      {/* Content */}
      <div
        className={cn(
          orientation == 'vertical'
            ? 'grid lg:grid-cols-5 md:grid-cols-3 gap-2'
            : 'flex flex-col',
        )}
      >
        {challenges.map((challenge, index) => (
          <ChallengeCard key={index} challenge={challenge} />
        ))}
      </div>
    </div>
  );
}
