'use client';

import BasicConfigForm from '@/components/create-challenge/BasicConfigForm';
import ChallengeCreator from '@/components/create-challenge/ChallengeCreatorForm';
import ChallengeTypeSelector from '@/components/create-challenge/ChallengeTypeSelector';
import CreateNormalChallengeRules from '@/components/create-challenge/CreateNormalChallengeRules';
import CreateScoreChallengeRules from '@/components/create-challenge/CreateScoreChallengeRules';
import CreateSpeedChallengeRules from '@/components/create-challenge/CreateSpeedChallengeRules';
import ResumeChallenge from '@/components/create-challenge/ResumeChallenge';
import TabStatusIndicator from '@/components/create-challenge/TabStatusIndicator';
import ContentContainer from '@/components/custom/ContentContainer';
import Title from '@/components/custom/Title';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import useCreateChallengeStore, { TabName } from '@/store/createChallengeStore';

type TabData = {
  label: string;
  value: TabName;
};

const TAB_DATA: TabData[] = [
  {
    label: 'Configurações Básicas',
    value: 'basic',
  },
  {
    label: 'Desafio',
    value: 'challenge',
  },
  {
    label: 'Regras',
    value: 'rules',
  },
  {
    label: 'Resumo',
    value: 'resume',
  },
];

export default function CreateChallengePage() {
  const { challenge, tabConfig, gotToTab } = useCreateChallengeStore();
  const { type } = challenge;

  return (
    <ContentContainer classname='mb-10'>
      <Title>
        <p>Criar Desafio</p>
        <ChallengeTypeSelector />
      </Title>

      <Tabs value={tabConfig.current} defaultValue={tabConfig.current}>
        {/* Tabs buttons */}
        <TabsList className='flex'>
          {TAB_DATA.map((tab, index) => (
            <TabsTrigger
              key={tab.value}
              className='flex-1 gap-1 justify-start'
              value={tab.value}
              onClick={() => gotToTab(tab.value)}
              asChild
            >
              <div className='flex gap- cursor-pointer'>
                <TabStatusIndicator position={index + 1} tab={tab.value} />
                {tab.label}
              </div>
            </TabsTrigger>
          ))}
        </TabsList>

        {/* Basic Configurations tab */}
        <TabsContent value='basic'>
          <BasicConfigForm />
        </TabsContent>

        {/* Challenge Tab */}
        <TabsContent value='challenge'>
          <ChallengeCreator />
        </TabsContent>

        {/* Rules tab */}
        <TabsContent value='rules'>
          {type === 'normal' && <CreateNormalChallengeRules />}
          {type === 'speed' && <CreateSpeedChallengeRules />}
          {type === 'score' && <CreateScoreChallengeRules />}
        </TabsContent>

        <TabsContent value='resume'>
          <ResumeChallenge />
        </TabsContent>
      </Tabs>
    </ContentContainer>
  );
}
