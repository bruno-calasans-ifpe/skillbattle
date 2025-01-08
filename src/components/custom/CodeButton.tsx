import { Forward } from 'lucide-react';

import { Button } from '../ui/button';

type CodeButtonProps = {};

export default function CodeButton({}: CodeButtonProps) {
  return (
    <Button
      variant='ghost'
      size='sm'
      className='bg-emerald-600 hover:bg-emerald-700 group'
    >
      <Forward className='text-white ' />
      <p className='text-white font-bold'>Código</p>
    </Button>
  );
}