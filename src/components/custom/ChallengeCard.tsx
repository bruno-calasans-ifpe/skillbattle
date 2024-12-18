import type { Challenge } from "@/types/Challenge";
import { Card, CardContent, CardFooter, CardTitle } from "../ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

type ChallengeCardProps = {
  challenge: Challenge;
};

export default function ChallengeCard({ challenge }: ChallengeCardProps) {
  return (
    <Card className="flex-1">
      <CardTitle className="flex items-end justify-end mt-2 mr-2 gap-1">
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
      </CardTitle>
      <CardContent className="flex aspect-square items-end justify-center p-2 b border-b-2 border-purple-300 mx-1">
        {/* <Image src={challenge.image} alt={challenge.name} fill /> */}
        <img src={challenge.image} alt="" />
      </CardContent>
      <CardFooter className="flex justify-between flex-wrap items-center p-2 ">
        <p className="flex text-sm font-semibold flex-1 truncate">
          {challenge.name}
        </p>
      </CardFooter>
    </Card>
  );
}
