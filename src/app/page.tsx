'use client';

import ContentContainer from '@/components/custom/ContentContainer';
import SearchChallenge from '@/components/custom/SearchChallenge';
import Title from '@/components/custom/Title';
import FeatureChallenges from '@/components/home/FeatureChallenges';
import RecentChallenges from '@/components/home/RecentChallenges';
import { CHALLENGE_DATA } from '@/config/challenges';

export default function Home() {
  return (
    <ContentContainer>
      <SearchChallenge />
      <div className='flex flex-col gap-3 mb-5'>
        <Title>Desafios</Title>
        <FeatureChallenges
          showMoreUrl='/'
          title='Desafios em destaque'
          challenges={CHALLENGE_DATA}
        />
      </div>

      <div className='flex flex-col gap-3 mb-5'>
        <Title>Desafios Recentes</Title>
        <RecentChallenges challenges={CHALLENGE_DATA} />
      </div>
    </ContentContainer>
  );
}
