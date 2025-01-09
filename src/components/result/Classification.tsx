import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Challenge } from '@/types/Challenge';
import { ChallengeClassification } from '@/types/Result';

type ClassificationProps = {
  challenge: Challenge;
  classification: ChallengeClassification;
  hightlight?: boolean;
};

export default function Classification({
  challenge,
  classification,
  hightlight,
}: ClassificationProps) {
  return (
    <Card
      className={cn(
        'hover:bg-stone-100 cursor-pointer transition-all w-full',
        hightlight && 'bg-amber-300 hover:bg-amber-400',
      )}
    >
      <CardContent className='flex items-center gap-1 p-2 overflow-hidden '>
        <div className='flex gap-1'>
          <p className='text-md font-semibold'>
            {classification.position}&deg;
          </p>
        </div>
        {/* Image */}
        <Avatar>
          <AvatarImage src='https://github.com/shadcn.png' alt='@shadcn' />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        {/* Username and score */}
        <div className='flex gap-1 justify-between items-center flex-1'>
          <p className='text-sm font-semibold'>
            {classification.player.username}
          </p>

          {/* Speed */}
          {challenge.type == 'speed' && (
            <p className='text-sm font-semibold'>
              Tempo: {classification.statistics.elapsedTime} min(s)
            </p>
          )}

          {/* Normal and Score */}
          {challenge.type === 'normal' && (
            <p className='text-sm font-semibold'>
              Pontos: {classification.statistics.totalScore}
            </p>
          )}

          {/* Score */}
          {challenge.type === 'score' && (
            <p className='text-sm font-semibold'>
              Pontos:{' '}
              {
                classification.statistics.challenges?.filter(
                  (c) => c.type === 'won',
                ).length
              }
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
