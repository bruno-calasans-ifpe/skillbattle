import { ChallengeResult } from '@/types/Result';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';

type ClassificationProps = {
  result: ChallengeResult;
};

export default function Classification({ result }: ClassificationProps) {
  return (
    <Card className='hover:bg-stone-100 cursor-pointer transition-all w-full'>
      <CardContent className='flex items-center gap-1 p-2 overflow-hidden '>
        <div className='flex gap-1'>
          <p className='text-md font-semibold'>{result.classification}</p>{' '}
        </div>
        {/* Image */}
        <Avatar>
          <AvatarImage src='https://github.com/shadcn.png' alt='@shadcn' />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        {/* Username */}
        <div className='flex gap-1'>
          <p className='text-sm font-semibold'>{result.player.username}</p>{' '}
        </div>
      </CardContent>
    </Card>
  );
}
