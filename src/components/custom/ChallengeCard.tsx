import Image from 'next/image';
import Link from 'next/link';

import { Badge } from '@/components/ui/badge';
import type { Challenge } from '@/types/Challenge';

import { Card, CardContent, CardFooter, CardTitle } from '../ui/card';
import ChallengeCategoryBadge from './ChallengeCategoryBadge';
import ChallengeTypeBadge from './ChallengeTypeBadge';

type ChallengeCardProps = {
  challenge: Challenge;
};

export default function ChallengeCard({ challenge }: ChallengeCardProps) {
  return (
    <Link href={`/challenge/${challenge.title}`}>
      <Card id='challenge-card' className='flex-1'>
        <CardTitle className='flex items-end justify-end mt-2 mr-2 gap-1'>
          <ChallengeTypeBadge>{challenge.type}</ChallengeTypeBadge>
          {challenge.categories.map((category, index) => (
            <ChallengeCategoryBadge key={category + index}>
              {category}
            </ChallengeCategoryBadge>
          ))}
        </CardTitle>
        <CardContent className='flex aspect-square items-end justify-center p-2 b border-b-2 border-purple-300 mx-1 relative'>
          <Image src={challenge.image} alt={challenge.title} fill />
        </CardContent>
        <CardFooter className='flex justify-between flex-wrap items-center p-2 '>
          <p className='flex text-sm font-semibold flex-1 truncate'>
            {challenge.title}
          </p>
        </CardFooter>
      </Card>
    </Link>
  );
}
