"use client";

import SearchChallenge from "@/components/home/SearchChallenge";
import FeatureChallenges from "@/components/home/FeatureChallenges";
import RecentChallenges from "@/components/home/RecentChallenges";

export default function Home() {
  return (
    <section className="flex flex-col gap-10 flex-1 items-center lg:max-w-[900px] md:max-w-[600px] m-auto p-5 mt-5">
      <SearchChallenge />
      <FeatureChallenges />
      <RecentChallenges />
    </section>
  );
}
