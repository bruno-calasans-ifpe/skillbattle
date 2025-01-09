'use client';

import { EllipsisVertical, Pencil, Trash2 } from 'lucide-react';
import { useEffect, useState } from 'react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import useCommentaryStore from '@/store/commentariesStore';
import type { Commentary } from '@/types/Commentary';

import { Button } from '../ui/button';

type CommentaryProps = {
  commentary: Commentary;
};

export default function Commentary({ commentary }: CommentaryProps) {
  const [editing, setEditing] = useState(false);
  const [newContent, setNewContent] = useState('');
  const { deleteCommentary, updateCommentary } = useCommentaryStore();

  const saveCommentaryHandler = () => {
    updateCommentary(commentary, newContent);
    setEditing(false);
  };

  useEffect(() => {
    if (editing) setNewContent(commentary.content);
  }, [editing]);

  return (
    <div id='commentary'>
      {/* Commentary */}
      <div className='flex'>
        {/* Commentary info */}
        <div className='flex gap-2 mb-5 flex-1 w-full'>
          {/* Commentary User */}
          <Avatar className=''>
            <AvatarImage src='https://github.com/shadcn.png' alt='@shadcn' />
            <AvatarFallback>{commentary.username}</AvatarFallback>
          </Avatar>
          {/* Commentary date */}
          <div className='flex flex-col flex-grow'>
            {/* Commentary info */}
            <div className='flex items-center justify-between gap-1 font-bold text-sm justify-self-start self-start'>
              <p>{commentary.username}</p>
              &#8226;
              <p>{commentary.createdAt.getMinutes()} minutos atrás</p>
            </div>

            {/* Commentary content */}
            {editing ? (
              <div className='flex flex-col gap-2'>
                <Input
                  type='text'
                  value={newContent}
                  onChange={(event) => setNewContent(event.target.value)}
                  className='h-12'
                />
                <div className='flex gap-1'>
                  <Button
                    onClick={() => setEditing(false)}
                    size='sm'
                    className='bg-red-500 hover:bg-red-600 h-7'
                  >
                    Cancelar
                  </Button>

                  {/* Save button */}
                  <Button
                    onClick={saveCommentaryHandler}
                    size='sm'
                    className='bg-indigo-500 hover:bg-indigo-600 h-7'
                  >
                    Salvar
                  </Button>
                </div>
              </div>
            ) : (
              <div className='text-sm italic'>{commentary.content}</div>
            )}
          </div>
        </div>

        {/* Commentary menu options */}
        <DropdownMenu>
          <DropdownMenuTrigger>
            <EllipsisVertical />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onClick={() => setEditing(true)}>
              <Pencil />
              Editar
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => deleteCommentary(commentary)}>
              <Trash2 />
              Excluir
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
