"use client";

import ChallengeTypeSelector from "@/components/create-challenge/ChallengeTypeSelector";
import CreateChallengeForm from "@/components/create-challenge/CreateChallengeForm";
import CreateNormalChallengeRules from "@/components/create-challenge/CreateNormalChallengeRules";
import CreateScoreChallengeRules from "@/components/create-challenge/CreateScoreChallengeRules";
import CreateSpeedChallengeRules from "@/components/create-challenge/CreateSpeedChallengeRules";
import ContentContainer from "@/components/custom/ContentContainer";
import Title from "@/components/custom/Title";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChallengeType } from "@/types/Challenge";
import { useState } from "react";

export default function CreateChallengePage() {
  const [selectedChallengeType, setSelectedChallengeType] =
    useState<ChallengeType>("normal");

  return (
    <ContentContainer>
      <Title>
        <p>Criar Desafio</p>
        <ChallengeTypeSelector onTypeChange={setSelectedChallengeType} />
      </Title>

      {/*  */}
      <Tabs defaultValue="basic">
        <TabsList className="flex">
          <TabsTrigger className="flex-1" value="basic">
            Configurações Básicas
          </TabsTrigger>
          <TabsTrigger className="flex-1" value="rules">
            Regras
          </TabsTrigger>
        </TabsList>
        <TabsContent value="basic">
          <CreateChallengeForm />
        </TabsContent>
        <TabsContent value="rules">
          {selectedChallengeType === "normal" && <CreateNormalChallengeRules />}
          {selectedChallengeType === "speed" && <CreateSpeedChallengeRules />}
          {selectedChallengeType === "score" && <CreateScoreChallengeRules />}
        </TabsContent>
      </Tabs>
    </ContentContainer>
  );
}
