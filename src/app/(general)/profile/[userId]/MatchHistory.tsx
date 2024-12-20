"use client";

import Title from "@/components/custom/Title";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Challenge } from "@/types/Challenge";
import MatchCard from "./MatchCard";
import { useState } from "react";
import ItemsPagination from "./ItemsPagination";

type MatchHistoryProps = {
  challenges: Challenge[];
};

export default function MatchHistory({ challenges }: MatchHistoryProps) {
  const itemsPerPage = 5;
  const [doneChallenges, setDoneChallenges] = useState<Challenge[]>([]);
  const [createdChallenges, setCreatedChallenges] = useState<Challenge[]>([]);

  return (
    <div className="mb-10">
      <Title>Desafios</Title>
      <Tabs defaultValue="done" className="w-full">
        <TabsList className="w-full justify-between">
          <TabsTrigger value="done" className="flex-1">
            Realizados({challenges.length})
          </TabsTrigger>
          <TabsTrigger value="created" className="flex-1">
            Criados({challenges.length})
          </TabsTrigger>
        </TabsList>
        <TabsContent value="done" className="flex flex-col gap-2">
          {doneChallenges.map((challenge, index) => (
            <MatchCard key={index} challenge={challenge} />
          ))}
          <ItemsPagination
            onPageChange={setDoneChallenges}
            items={challenges}
            itemsPerPage={itemsPerPage}
          />
        </TabsContent>
        <TabsContent value="created" className="flex flex-col gap-2">
          {createdChallenges.slice(0, 5).map((challenge, index) => (
            <MatchCard key={index} challenge={challenge} />
          ))}
          <ItemsPagination
            onPageChange={setCreatedChallenges}
            items={challenges}
            itemsPerPage={itemsPerPage}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
}
