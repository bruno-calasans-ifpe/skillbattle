"use client";

import Title from "@/components/custom/Title";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Challenge } from "@/types/Challenge";
import MatchCard from "./MatchCard";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useState } from "react";
import ItemsPagination from "./ItemsPagination";

type MatchHistoryProps = {
  challenges: Challenge[];
};

export default function MatchHistory({ challenges }: MatchHistoryProps) {
  const itemsPerPage = 5;
  const [renderedChallenges, setRenderedChallenges] = useState<Challenge[]>([]);

  return (
    <div className="mb-10">
      <Title>Desafios</Title>
      <Tabs defaultValue="done" className="w-full">
        <TabsList className="w-full justify-between">
          <TabsTrigger value="done" className="flex-1">
            Realizados({challenges.length})
          </TabsTrigger>
          <TabsTrigger value="created" className="flex-1">
            Criados(2)
          </TabsTrigger>
        </TabsList>
        <TabsContent value="done" className="flex flex-col gap-2">
          {renderedChallenges.map((challenge, index) => (
            <MatchCard key={index} challenge={challenge} />
          ))}
          <ItemsPagination
            onPageChange={setRenderedChallenges}
            items={challenges}
            itemsPerPage={itemsPerPage}
          />
        </TabsContent>
        <TabsContent value="created">Change your password here.</TabsContent>
      </Tabs>
    </div>
  );
}
