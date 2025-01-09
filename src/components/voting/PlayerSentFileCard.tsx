'use client';

import Link from 'next/link';

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Challenge } from '@/types/Challenge';
import { PlayerSentFile } from '@/types/PlayerSentFile';

import Title from '../custom/Title';
import { Button } from '../ui/button';
import PlayerSentFileExpandedCard from './PlayerSentFileExpandedCard';

type PlayerSentFileCardProps = {
  file: PlayerSentFile;
};

export default function PlayerSentFileCard({ file }: PlayerSentFileCardProps) {
  return (
    <Card id='player-sent-file-card' className='overflow-hidden'>
      <CardHeader className='p-2'>
        <CardTitle>
          <Title className='justify-center'>
            <p className='text-sm font-semibold text-center text-purple-500'>
              {file.title}
            </p>
          </Title>
        </CardTitle>
      </CardHeader>

      <CardContent className='p-1 h-36 flex item justify-center cursor-pointer'>
        <PlayerSentFileExpandedCard file={file} />
      </CardContent>

      <CardFooter className='flex flex-col p-2 gap-2'>
        <Link href={`/profile/${file.createdBy}`}>
          <p className='text-sm'>
            Enviado por:{' '}
            <span className='font-semibold italic'>{file.createdBy}</span>
          </p>
        </Link>
        <Link href={`/waiting-room/1`} className='w-full'>
          <Button
            size='sm'
            className='w-full bg-emerald-500 hover:bg-emerald-600 font-bold text-lg'
          >
            Votar
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
