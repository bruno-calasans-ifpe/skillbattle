import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ChallengeCard from "../custom/ChallengeCard";
import { Challenge } from "@/types/Challenge";
import { Button } from "../ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

type FeatureChallengesProps = {
  title: React.ReactNode;
  challenges: Challenge[];
  showMoreUrl: string;
};

export default function FeatureChallenges({
  title,
  challenges,
  showMoreUrl,
}: FeatureChallengesProps) {
  return (
    <div className="flex flex-col w-full gap-4">
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
