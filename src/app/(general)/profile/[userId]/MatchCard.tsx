'use client';

import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardTitle } from '@/components/ui/card';
import type { Challenge } from '@/types/Challenge';

const randInt = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const MATCH_STATUS = [
  <p className='text-emerald-500 text-sm font-bold'>Venceu</p>,
  <p className='text-red-500 text-sm font-bold'>
    Perdeu (classificação: {randInt(2, 10)})
  </p>,
  <p className='text-indigo-500 text-sm font-bold'>Andamento</p>,
];

type MatchCardProps = {
  challenge: Challenge;
};

export default function MatchCard({ challenge }: MatchCardProps) {
  return (
    <Card id='expanded-challenge-card' className='w-full'>
      <CardTitle className='flex items-center justify-between gap-1 p-2 mt-1'>
        {/* Card extra informations */}
        <div className='flex gap-1 items-center justify-between font-normal text-sm italic text-stone-800'>
          <div className='flex gap-1 items-center justify-center text-sm cursor-pointer group'>
            <Avatar className='h-8 w-8 aspect-square'>
              <AvatarImage src='https://github.com/shadcn.png' alt='@shadcn' />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Link href='/profile/user'>
              <p className='text-sm group-hover:underline group-hover:text-purple-500'>
                User2313213
              </p>
            </Link>
          </div>
          <p>&#8226;</p>
          <p>2 horas atrás</p>
        </div>

        {/* match status */}
        <div className='flex gap-1 text-sm items-center font-normal '>
          {/*Hydration Error */}
          <div>{MATCH_STATUS[randInt(0, 2)]}</div>
        </div>
      </CardTitle>

      <CardContent className='flex  items-end justify-center p-2'>
        <p className='flex text-2xl font-semibold flex-1 truncate'>
          {challenge.title}
        </p>
      </CardContent>

      <CardFooter className='flex justify-between flex-wrap items-center p-2 '>
        <div className='flex gap-1'>
          <Badge className='bg-indigo-500 hover:bg-indigo-600 cursor-pointer'>
            {challenge.type}
          </Badge>
          {challenge.categories.map((category) => (
            <Badge
              key={category}
              className='bg-purple-500 cursor-pointer hover:bg-purple-600'
            >
              {category}
            </Badge>
          ))}
        </div>
        <Button
          size='sm'
          variant='outline'
          className='bg-emerald-500 text-white hover:bg-emerald-600 hover:text-white font-bold p-2 group'
        >
          Ver desafio
          <ChevronRight className='group-hover:translate-x-1 transition-all' />
        </Button>
      </CardFooter>
    </Card>
  );
}
