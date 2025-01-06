import { Button } from '../ui/button';

type JoinButtonProps = {};

export default function JoinButton({}: JoinButtonProps) {
  return (
    <Button className='w-full bg-emerald-500 hover:bg-emerald-600 font-bold my-4'>
      Entrar
    </Button>
  );
}
