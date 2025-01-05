'use client';

import ChallengeTypeSelector from '@/components/create-challenge/ChallengeTypeSelector';
import CreateChallengeForm from '@/components/create-challenge/CreateChallengeForm';
import CreateNormalChallengeRules from '@/components/create-challenge/CreateNormalChallengeRules';
import CreateScoreChallengeForm from '@/components/create-challenge/CreateScoreChallengeForm';
import CreateScoreChallengeRules from '@/components/create-challenge/CreateScoreChallengeRules';
import CreateSpeedChallengeRules from '@/components/create-challenge/CreateSpeedChallengeRules';
import ContentContainer from '@/components/custom/ContentContainer';
import Title from '@/components/custom/Title';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import useCreateChallengeStore from '@/store/createChallengeStore';

export default function CreateChallengePage() {
  const { type } = useCreateChallengeStore();

  return (
    <ContentContainer classname='mb-10'>
      <Title>
        <p>Criar Desafio</p>
        <ChallengeTypeSelector />
      </Title>

      {/*  */}
      <Tabs defaultValue='basic'>
        <TabsList className='flex'>
          <TabsTrigger className='flex-1' value='basic'>
            Configurações Básicas
          </TabsTrigger>
          <TabsTrigger className='flex-1' value='rules'>
            Regras
          </TabsTrigger>
        </TabsList>
        <TabsContent value='basic'>
          {type !== 'score' && <CreateChallengeForm />}
          {type === 'score' && <CreateScoreChallengeForm />}
        </TabsContent>
        <TabsContent value='rules'>
          {type === 'normal' && <CreateNormalChallengeRules />}
          {type === 'speed' && <CreateSpeedChallengeRules />}
          {type === 'score' && <CreateScoreChallengeRules />}
        </TabsContent>
      </Tabs>
    </ContentContainer>
  );
}
