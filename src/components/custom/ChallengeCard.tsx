import Image from 'next/image';

import { Badge } from '@/components/ui/badge';
import type { Challenge } from '@/types/Challenge';

import { Card, CardContent, CardFooter, CardTitle } from '../ui/card';

type ChallengeCardProps = {
  challenge: Challenge;
};

export default function ChallengeCard({ challenge }: ChallengeCardProps) {
  return (
    <Card id='challenge-card' className='flex-1'>
      <CardTitle className='flex items-end justify-end mt-2 mr-2 gap-1'>
        <Badge className='bg-indigo-500 hover:bg-indigo-600 cursor-pointer'>
          {challenge.type}
        </Badge>
        {challenge.categories.map((category, index) => (
          <Badge
            key={category + index}
            className='bg-purple-500 cursor-pointer hover:bg-purple-600'
          >
            {category}
          </Badge>
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
  );
}
