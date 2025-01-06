'use client';

import { ChangeEvent, useState } from 'react';

import Title from '@/components/custom/Title';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import useCommentaryStore from '@/store/commentariesStore';

import ChallengeInfoCommentary from './ChallengeInfoCommentary';

export default function ChallengeInfoCommentaries() {
  const [commentaryContent, setCommentaryContent] = useState('');
  const { commentaries, createCommentary } = useCommentaryStore();

  const changeCommentaryInputHandler = (
    event: ChangeEvent<HTMLInputElement>,
  ) => {
    setCommentaryContent(event.target.value);
  };

  const createCommentaryHandler = () => {
    createCommentary(commentaryContent);
    setCommentaryContent('');
  };

  return (
    <div className='flex flex-col gap-3 mb-20'>
      <Title className='p-1'>
        <p className='text-md'>Comentários ({commentaries.length})</p>
      </Title>
      <div>
        <div className='flex flex-col gap-2 mb-4'>
          <Input
            id='commentary-content'
            value={commentaryContent}
            type='text'
            placeholder='Faça um comentário'
            className='h-16 text-start'
            onChange={changeCommentaryInputHandler}
          />

          {/* Commentary Actions */}
          {commentaryContent && (
            <div className='flex gap-1 justify-end'>
              {/* Cancel button */}
              <Button
                onClick={() => setCommentaryContent('')}
                size='sm'
                className='bg-red-500 hover:bg-red-600 h-7'
              >
                Cancelar
              </Button>

              {/* Send button */}
              <Button
                onClick={createCommentaryHandler}
                size='sm'
                className='bg-indigo-500 hover:bg-indigo-600 h-7'
              >
                Enviar
              </Button>
            </div>
          )}
        </div>

        {/* Commentaries */}
        {commentaries.length > 0 &&
          commentaries.map((commentary) => (
            <ChallengeInfoCommentary
              key={commentary.id}
              commentary={commentary}
            />
          ))}
      </div>
    </div>
  );
}
