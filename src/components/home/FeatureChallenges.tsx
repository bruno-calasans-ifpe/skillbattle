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
  title: string;
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
      <div className="flex justify-between gap-1 text-3xl border-b-2 border-purple-600">
        <h1>{title}</h1>
        <Link href={showMoreUrl}>
          <Button
            size="sm"
            className=" bg-emerald-500 hover:bg-emerald-600 h-6 font-bold flex items-center justify-center gap-0 p-2 group"
          >
            Ver mais
            <ChevronRight className="group-hover:translate-x-2 transition-all delay-75" />
          </Button>
        </Link>
      </div>
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
