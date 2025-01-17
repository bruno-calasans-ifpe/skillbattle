import { Reorder } from 'framer-motion';
import { X } from 'lucide-react';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import useCreateChallengeStore from '@/store/createChallengeStore';

type ChallengeCreatorProps = {};

export default function ChallengeCreator({}: ChallengeCreatorProps) {
  const { challenge, addChallenge, removeChallenge, setChallenges } =
    useCreateChallengeStore();
  const [createdChallenge, setCreatedChallenge] = useState('');
  const { challenges } = challenge;

  let unique = challenge.type !== 'score';
  let canAddChallenge =
    (unique && challenge.challenges.length === 0) || !unique;

  const addChallengeHandler = () => {
    if (canAddChallenge) addChallenge(createdChallenge);
    setCreatedChallenge('');
  };

  return (
    <div className='flex flex-col gap-2'>
      {/* Challenges list */}
      {challenges.length > 0 && (
        <Reorder.Group values={challenges} onReorder={setChallenges}>
          <div
            className={cn(
              'flex flex-col gap-3 border-2 border-purple-500 p-2 rounded-md',
              challenges.length === 0 && 'hidden',
            )}
          >
            {challenges.map((challenge, index) => (
              <Reorder.Item value={challenge} key={challenge}>
                <p className='text-sm italic font-bold flex justify-between items-center text-purple-700 bg-purple-200 p-2 rounded-md hover:bg-purple-700 cursor-move transition-all hover:text-purple-100'>
                  Desafio {index + 1}: {challenge}{' '}
                  <span>
                    <X
                      className='hover:text-red-600 cursor-pointer text-red-500'
                      onClick={() => removeChallenge(challenge)}
                      size={20}
                    />
                  </span>
                </p>
              </Reorder.Item>
            ))}
          </div>
        </Reorder.Group>
      )}

      {/* Add challenge */}
      <div className='flex gap-1'>
        <Input
          id='create-challenge-input'
          type='search'
          placeholder='Os desafios para os jogadores'
          value={createdChallenge}
          onChange={(event) => setCreatedChallenge(event.target.value)}
          disabled={!canAddChallenge}
        />

        <Button
          id='create-challenge-button'
          type='button'
          onClick={addChallengeHandler}
          className='bg-purple-500 hover:bg-purple-600'
          disabled={!createdChallenge || !canAddChallenge}
        >
          Adicionar
        </Button>
      </div>
    </div>
  );
}
