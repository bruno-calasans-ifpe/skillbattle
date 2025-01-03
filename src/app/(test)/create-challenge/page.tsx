"use client";

import ChallengeTypeSelector from "@/components/create-challenge/ChallengeTypeSelector";
import CreateChallengeForm from "@/components/create-challenge/CreateChallengeForm";
import ContentContainer from "@/components/custom/ContentContainer";
import Title from "@/components/custom/Title";

type CreateChallengePageProps = {};

export default function CreateChallengePage({}: CreateChallengePageProps) {
  return (
    <ContentContainer>
      <Title>
        <p>Criar Desafio</p>
        <ChallengeTypeSelector onTypeChange={console.log} />
      </Title>
      <CreateChallengeForm />
    </ContentContainer>
  );
}
