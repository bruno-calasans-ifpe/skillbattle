import { CHALLENGE_DATA } from "@/config/challenges";
import FeatureChallenges from "@/components/home/FeatureChallenges";
import { CATEGORIES_DATA } from "@/config/categories";

type ExplorePageProps = {};

export default function ExplorePage({}: ExplorePageProps) {
  return (
    <section className="flex flex-col gap-10 flex-1 items-center lg:max-w-[900px] md:max-w-[600px] m-auto p-5 mt-5">
      {CATEGORIES_DATA.map((category) => {
        if (category.toLowerCase() === "tudo") return false;
        return (
          <FeatureChallenges
            key={category}
            showMoreUrl={`explore/${category}`}
            title={category}
            challenges={CHALLENGE_DATA}
          />
        );
      })}
    </section>
  );
}
