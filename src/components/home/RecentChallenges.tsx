import { Card, CardContent } from "@/components/ui/card";

type RecentChallengesProps = {};

export default function RecentChallenges({}: RecentChallengesProps) {
  return (
    <div className="flex flex-col w-full gap-4">
      <h1 className="text-3xl border-b-2 border-purple-600">
        Desafios recentes
      </h1>
      <div className="grid lg:grid-cols-5 md:grid-cols-3 gap-2">
        {Array.from({ length: 20 }).map((_, index) => (
          <Card className="flex-1" key={index}>
            <CardContent className="flex aspect-square items-end justify-center p-2 b">
              <p className="flex  text-xl font-semibold border-t-2 flex-1">
                Desafio
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
