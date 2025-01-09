'use client';

import { Info } from 'lucide-react';
import { useState } from 'react';

import { Challenge } from '@/types/Challenge';
import { ChallengeClassification, ScoreResultStatistic } from '@/types/Result';

import InfoText from '../custom/InfoText';

type ScoreStatisticsProps = {
  challenge: Challenge;
  classification: ChallengeClassification;
};

export default function ScoreStatistics({
  challenge,
  classification,
}: ScoreStatisticsProps) {
  const [selectedChallenge, setSelectedChallenge] =
    useState<ScoreResultStatistic | null>(null);

  const wonChallenges =
    classification.statistics.challenges?.filter((c) => c.type == 'won') || [];

  const loseChallenges =
    (challenge.type === 'score' &&
      classification.statistics.challenges?.filter((c) => c.type == 'lose')) ||
    [];

  return (
    <div className='flex flex-col gap-3'>
      {/*  */}
      {selectedChallenge && (
        <div className='flex flex-col gap-2'>
          <InfoText title='Classificação'>
            <p>{classification.position}&deg; lugar</p>
          </InfoText>

          <InfoText title='Desafio'>
            <p>{selectedChallenge.challengeName}</p>
          </InfoText>

          <InfoText title='Tempo decorrido'>
            <p>{selectedChallenge.elapsedTime} minutos</p>
          </InfoText>

          <InfoText title='Tempo total'>
            <p>{selectedChallenge.totalTime} minutos</p>
          </InfoText>
        </div>
      )}
      {/* Won challenges */}
      <div className='flex flex-col gap-0'>
        <p className='font-semibold text-lg'>
          Desafios Vencidos ({wonChallenges.length})
        </p>
        {/* chellenges list */}
        <div className='flex flex-col gap-2 scrollbar-thumb-purple-300 scrollbar-track-purple-700 h-40 overflow-y-scroll scrollbar-thin scrollbar-h-1 pr-2 items-start justify-center p-1'>
          {wonChallenges.map((c, index) => (
            <div
              key={c.challengeName + index}
              onClick={() => setSelectedChallenge(c)}
              className='flex justify-between items-center p-2 rounded-md bg-stone-200 w-full font-bold hover:bg-stone-300 cursor-pointer'
            >
              <p>{c.challengeName}</p>
              <Info size={18} className='text-indigo-500' />
            </div>
          ))}
        </div>
      </div>

      {/* Lose challenges */}
      <div className='flex flex-col gap-0'>
        <p className='font-semibold text-lg'>
          Desafios Perdidos ({loseChallenges.length})
        </p>
        {/* chellenges list */}
        <div className='flex flex-col gap-2 scrollbar-thumb-purple-300 scrollbar-track-purple-700 h-40 overflow-y-scroll scrollbar-thin scrollbar-h-1 pr-2 items-start justify-start p-1'>
          {loseChallenges.map((c, index) => (
            <div
              key={c.challengeName + index}
              onClick={() => setSelectedChallenge(c)}
              className='flex justify-between items-center p-2 rounded-md bg-stone-200 w-full font-bold hover:bg-stone-300 cursor-pointer'
            >
              <p>{c.challengeName}</p>
              <Info size={18} className='text-indigo-500' />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
