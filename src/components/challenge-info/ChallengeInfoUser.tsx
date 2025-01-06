import { UserPlus } from 'lucide-react';
import Link from 'next/link';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Challenge } from '@/types/Challenge';

type ChallengeInfoUserProps = {
  challenge: Challenge;
};

export default function ChallengeInfoUser({
  challenge,
}: ChallengeInfoUserProps) {
  return (
    <div className='flex gap-2 items-center justify-between'>
      <Link
        href={`/profile/${challenge.createdBy}`}
        className='hover:underline hover:text-purple-500 flex gap-1 items-center'
      >
        <Avatar>
          <AvatarImage src='https://github.com/shadcn.png' alt='@shadcn' />
          <AvatarFallback>{challenge.createdBy[0]}</AvatarFallback>
        </Avatar>
        <p>{challenge.createdBy}</p>
      </Link>
      <Button size='sm' className='bg-purple-500 hover:bg-purple-600 h-7'>
        <UserPlus />
        Seguir
      </Button>
    </div>
  );
}
