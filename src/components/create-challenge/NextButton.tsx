import { ChevronRight } from 'lucide-react';

import useCreateChallengeStore from '@/store/createChallengeStore';

import { Button } from '../ui/button';

type NextButtonProps = {
  disabled?: boolean;
};

export default function NextButton({ disabled }: NextButtonProps) {
  const { goNextTab } = useCreateChallengeStore();

  return (
    <Button
      id='tab-next-button'
      type='submit'
      className='bg-purple-500 hover:bg-purple-600 font-bold transition-all p-2'
      disabled={disabled}
      onClick={goNextTab}
    >
      Próximo
      <ChevronRight size={18} />
    </Button>
  );
}
