import { Button } from '@/components/ui/button';

type ConfirmButtonProps = {};

export default function ConfirmButton({}: ConfirmButtonProps) {
  return (
    <Button
      id='tab-confirm-button'
      type='submit'
      className='bg-emerald-500 hover:bg-emerald-600 font-bold'
    >
      Confirmar
    </Button>
  );
}
