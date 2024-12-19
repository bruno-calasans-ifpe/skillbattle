import { CHALLENGE_DATA } from "@/config/challenges";
import FeatureChallenges from "@/components/home/FeatureChallenges";
import { CATEGORIES_DATA } from "@/config/categories";
import Title from "@/components/custom/Title";
import ContentContainer from "@/components/custom/ContentContainer";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type ExplorePageProps = {};

export default function ExplorePage({}: ExplorePageProps) {
  return (
    <ContentContainer>
      {CATEGORIES_DATA.map((category, index) => {
        if (category.toLowerCase() === "tudo") return false;
        return (
          <div key={category + index} className="flex flex-col gap-3 mb-5">
            <Title>
              <h1>{category}</h1>
              <Link href={`/explore/${category}`}>
                <Button
                  size="sm"
                  className=" bg-emerald-500 hover:bg-emerald-600 h-6 font-bold flex items-center justify-center gap-0 p-2 group"
                >
                  Ver mais
                  <ChevronRight className="group-hover:translate-x-2 transition-all delay-75" />
                </Button>
              </Link>
            </Title>
            <FeatureChallenges
              key={category}
              showMoreUrl={`explore/${category}`}
              title={category}
              challenges={CHALLENGE_DATA}
            />
          </div>
        );
      })}
    </ContentContainer>
  );
}
