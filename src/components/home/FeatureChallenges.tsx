import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Challenge } from '@/types/Challenge';

import ChallengeCard from '../custom/ChallengeCard';

type FeatureChallengesProps = {
  challenges: Challenge[];
};

export default function FeatureChallenges({
  challenges,
}: FeatureChallengesProps) {
  return (
    <div className='flex flex-col w-full gap-4'>
      <Carousel>
        <CarouselContent>
          {challenges.map((challenge, index) => (
            <CarouselItem
              key={challenge.title + index}
              className='lg:basis-1/5 md:basis-1/3'
            >
              <ChallengeCard challenge={challenge} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
