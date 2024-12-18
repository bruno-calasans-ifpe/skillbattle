import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ChallengeCard from "../custom/ChallengeCard";
import { Challenge } from "@/types/Challenge";

type FeatureChallengesProps = {
  challenges: Challenge[];
};

export default function FeatureChallenges({
  challenges,
}: FeatureChallengesProps) {
  return (
    <div className="flex flex-col w-full gap-4">
      <h1 className="text-3xl border-b-2 border-purple-600">
        Desafios em destaque
      </h1>
      <Carousel>
        <CarouselContent>
          {challenges.map((challenge, index) => (
            <CarouselItem
              key={challenge.name + index}
              className="lg:basis-1/5 md:basis-1/3"
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
