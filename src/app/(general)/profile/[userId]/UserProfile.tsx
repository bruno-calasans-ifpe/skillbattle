'use client';

import { Brush, UserRoundMinus, UserRoundPlus } from 'lucide-react';
import { useState } from 'react';

import Title from '@/components/custom/Title';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';

const USER_CATEGORY_FEATURES = [
  {
    category: 'Arte',
    ranking: 2,
    wins: 10,
    loses: 2,
    matches: 20,
  },
  {
    category: 'Arte',
    ranking: 2,
    wins: 10,
    loses: 2,
    matches: 20,
  },
  {
    category: 'Arte',
    ranking: 2,
    wins: 10,
    loses: 2,
    matches: 20,
  },
  {
    category: 'Arte',
    ranking: 2,
    wins: 10,
    loses: 2,
    matches: 20,
  },
];

type UsserProfileProps = {};

export default function UserProfile({}: UsserProfileProps) {
  const [isFollowing, setIsFollowing] = useState(false);

  return (
    <div className='flex flex-col gap-5 overflow-hidden '>
      {/* User Image and name */}
      <div className='flex flex-col gap-2 mb-4'>
        {/* <Title>Perfil</Title> */}

        <div className='flex gap-4 items-center'>
          {/* User image */}
          <Avatar className='lg:h-40 lg:w-40 md:h-32 md:w-32 aspect-square'>
            <AvatarImage src='https://github.com/shadcn.png' alt='@shadcn' />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          <div className='flex flex-col gap-3 flex-1'>
            {/* User name and ranking */}
            <div>
              <p className='text-4xl'>User3213123</p>
              <a
                href='/ranking'
                className='text-md text-indigo-500 hover:underline transition-all ml-1'
              >
                Rankig global: <span className='font-bold'>5</span>
              </a>
            </div>
            {/* followers and following */}
            <div className='flex gap-4 justify-between md:justify-start lg:justify-start'>
              <div className='flex flex-col items-center'>
                <p className='text-purple-500 font-bold'>52</p>
                <p className='font-bold'>Seguidores</p>
              </div>
              <div className='flex flex-col items-center'>
                <p className='text-purple-500 font-bold'>231</p>
                <p className='font-bold'>Seguindo</p>
              </div>
              <Button
                size='sm'
                onClick={() => setIsFollowing((current) => !current)}
                className={cn(
                  'bg-purple-500 hover:bg-purple-600',
                  isFollowing && 'bg-red-500 hover:bg-red-600',
                )}
              >
                {isFollowing ? <UserRoundMinus /> : <UserRoundPlus />}
                {isFollowing ? 'Unfollow' : 'Follow'}
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className='flex flex-col gap-2 mb-4'>
        <Title>Sobre mim</Title>
        <div className='text-sm'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          ipsum ullam praesentium. Delectus amet, similique eligendi aliquam
          illum iste odio fugit autem sequi ducimus iusto excepturi facere ipsa,
          in rem! Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Dolore vel delectus incidunt enim numquam pariatur error impedit
          mollitia, nisi quo quaerat voluptatum. Quo natus labore commodi
          exercitationem doloribus possimus voluptates.
        </div>
      </div>

      {/* Destaques */}
      <div className='flex flex-col gap-2 mb-4'>
        <Title>Destaques</Title>
        <Table>
          <TableHeader>
            <TableRow className='border-none'>
              <TableHead className='font-bold'>Categoria</TableHead>
              <TableHead className='font-bold'>Ranking</TableHead>
              <TableHead className='font-bold'>Vitórias</TableHead>
              <TableHead className='font-bold'>Derrotas</TableHead>
              <TableHead className='font-bold'>Partidas</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {USER_CATEGORY_FEATURES.map((features, index) => (
              <TableRow
                key={features.category + index}
                className='border-none cursor-pointer'
              >
                <TableCell>
                  <Badge className='bg-purple-500 hover:bg-purple-600'>
                    {features.category}
                  </Badge>
                </TableCell>
                <TableCell>{features.ranking}</TableCell>
                <TableCell>{features.wins}</TableCell>
                <TableCell>{features.loses}</TableCell>
                <TableCell>{features.matches}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      {/* Emblems */}
      <div className='mb-10'>
        <Title>Emblemas</Title>
        <div className='p-2'>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Badge className='p-1 cursor-pointer bg-red-500 hover:bg-red-600'>
                  <Brush size={20} />
                  Jovem Artista
                </Badge>
              </TooltipTrigger>
              <TooltipContent side='bottom'>
                <p className='text-sm font-bold'>Jovem Artista</p>
                <p>Ganhou por vencer 1 desafio de arte</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    </div>
  );
}
