import type { Challenge } from "@/types/Challenge";
import { Card, CardContent, CardFooter, CardTitle } from "../ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "../ui/button";
import { CircleUserRound, ChevronRight } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";

type ExpandedChallengeCardProps = {
  challenge: Challenge;
};

export default function ExpandedChallengeCard({
  challenge,
}: ExpandedChallengeCardProps) {
  return (
    <Card id="expanded-challenge-card" className="w-full">
      <CardTitle className="flex items-center justify-between gap-1 p-2 mt-1">
        {/* Card extra informations */}
        <div className="flex gap-1 items-center justify-between font-normal text-sm italic text-stone-800">
          <div className="flex gap-1 items-center justify-center text-sm cursor-pointer group">
            <Avatar className="h-8 w-8 aspect-square">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <p className="text-sm group-hover:underline group-hover:text-purple-500">
              User2313213
            </p>
          </div>
          <p>&#8226;</p>
          <p>2 horas atrás</p>
        </div>

        {/* player numbers */}
        <div className="flex gap-1 text-sm items-center font-normal ">
          <p className="text-lg ">
            <span>10</span>/<span>20</span>
          </p>
          <CircleUserRound size={20} />
        </div>
      </CardTitle>

      <CardContent className="flex  items-end justify-center p-2">
        <p className="flex text-2xl font-semibold flex-1 truncate">
          {challenge.name}
        </p>
        {/* <div>
          <Image src={challenge.image} width={30} height={30} alt={""} />
        </div> */}
      </CardContent>

      <CardFooter className="flex justify-between flex-wrap items-center p-2 ">
        <div className="flex gap-1">
          <Badge className="bg-indigo-500 hover:bg-indigo-600 cursor-pointer">
            {challenge.type}
          </Badge>
          {challenge.categories.map((category) => (
            <Badge
              key={category}
              className="bg-purple-500 cursor-pointer hover:bg-purple-600"
            >
              {category}
            </Badge>
          ))}
        </div>
        <Button
          size="sm"
          variant="outline"
          className="bg-emerald-500 text-white hover:bg-emerald-600 hover:text-white font-bold p-2 group"
        >
          Ver desafio
          <ChevronRight className="group-hover:translate-x-1 transition-all" />
        </Button>
      </CardFooter>
    </Card>
  );
}
