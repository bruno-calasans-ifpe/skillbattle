import { ChevronLeft } from 'lucide-react';

import useCreateChallengeStore from '@/store/createChallengeStore';

import { Button } from '../ui/button';

type BackButtonProps = {
  tab?: string;
  disabled?: boolean;
};

export default function BackButton({ disabled }: BackButtonProps) {
  const { goBackTab } = useCreateChallengeStore();
  return (
    <Button
      id='tab-back-button'
      type='button'
      className='bg-indigo-500 hover:bg-indigo-600 font-bold p-2'
      disabled={disabled}
      onClick={goBackTab}
    >
      <ChevronLeft />
      Voltar
    </Button>
  );
}
