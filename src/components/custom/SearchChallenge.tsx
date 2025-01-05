'use client';

import { Search } from 'lucide-react';
import { useSearchParams } from 'next/navigation';
import { useState } from 'react';

import { Badge } from '@/components/ui/badge';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Input } from '@/components/ui/input';
import { CATEGORIES_DATA } from '@/config/categories';
import { cn } from '@/lib/utils';

import { Button } from '../ui/button';

type SearchChallengeProps = {};

export default function SearchChallenge({}: SearchChallengeProps) {
  const params = useSearchParams();

  const [searchedChallenge, setSearchedChallenge] = useState(
    params.get('keyword') ?? '',
  );
  const [selectedCategory, setSelectedcategory] = useState(
    params.get('category') ?? CATEGORIES_DATA[0],
  );

  return (
    <div className='flex flex-col w-full items-center gap-4'>
      {/* Title */}
      <h1 className='text-5xl'>Escolha o desafio de hoje</h1>
      {/* Categories */}
      <Carousel
        className='w-full'
        opts={{
          align: 'center',
          dragFree: true,
          startIndex: CATEGORIES_DATA.indexOf(selectedCategory) - 1,
        }}
      >
        <CarouselContent>
          {CATEGORIES_DATA.map((category) => (
            <CarouselItem key={category} className='basis-1/1'>
              <Badge
                key={category}
                onClick={() => setSelectedcategory(category)}
                className={cn(
                  'cursor-pointer bg-purple-500 hover:bg-purple-600 hover:text-white p-2 transition-all ease-in delay-75',
                  category === selectedCategory &&
                    'bg-emerald-600 hover:bg-emerald-600',
                )}
              >
                {category}
              </Badge>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      {/* Search bar */}
      <form
        action={`/search?keyword=${searchedChallenge}&category=${selectedCategory}`}
        className='flex gap-1 w-full relative'
        method='post'
      >
        <Input
          type='search'
          placeholder='Pesquise por um desafio'
          value={searchedChallenge}
          onChange={(e) => setSearchedChallenge(e.target.value)}
          className='focus-visible:ring-emerald-500 focus-visible:ring-1 p-4'
          required
        />

        <Button
          variant='default'
          className='bg-emerald-500 hover:bg-emerald-600 absolute right-0 top-0'
        >
          <Search />
        </Button>
      </form>
    </div>
  );
}
