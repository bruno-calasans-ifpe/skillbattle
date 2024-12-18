import { Challenge } from "@/types/Challenge";
import ChallengeCard from "./ChallengeCard";

type ListChallengesProps = {
  title: string;
  challenges: Challenge[];
};

export default function ListChallenges({
  title,
  challenges,
}: ListChallengesProps) {
  return (
    <div className="flex flex-col w-full gap-4">
      <h1 className="text-3xl border-b-2 border-purple-600">{title}</h1>
      <div className="grid lg:grid-cols-5 md:grid-cols-3 gap-2">
        {challenges.map((challenge, index) => (
          <ChallengeCard key={index} challenge={challenge} />
        ))}
      </div>
    </div>
  );
}
