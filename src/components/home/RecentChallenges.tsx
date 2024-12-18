import { Card, CardContent } from "@/components/ui/card";
import { Challenge } from "@/types/Challenge";
import ChallengeCard from "../custom/ChallengeCard";

type RecentChallengesProps = {
  challenges: Challenge[];
};

export default function RecentChallenges({
  challenges,
}: RecentChallengesProps) {
  return (
    <div className="flex flex-col w-full gap-4">
      <h1 className="text-3xl border-b-2 border-purple-600">
        Desafios recentes
      </h1>
      <div className="grid lg:grid-cols-5 md:grid-cols-3 gap-2">
        {challenges.map((challenge, index) => (
          <ChallengeCard key={challenge.name + index} challenge={challenge} />
        ))}
      </div>
    </div>
  );
}
