import { Button } from '@/components/ui/button';
import useCustomToast from '@/hooks/use-custom-toast';
import { createChallenge } from '@/services/firebase/collections/challenges';
import useCreateChallengeStore from '@/store/createChallengeStore';

type CreateButtonProps = {
  tab?: string;
  disabled?: boolean;
};

export default function CreateButton({ disabled }: CreateButtonProps) {
  const { challenge } = useCreateChallengeStore();
  const { successToast, errorToast } = useCustomToast();

  const createChallengeHandler = () => {
    try {
      createChallenge(challenge);
      successToast('Desafio criado sucesso', 'Desafio foi criado');
    } catch (error) {
      errorToast('Error ao criar desafio', 'Tente novamente mais tarde');
      console.log(error);
    }
  };

  return (
    <Button
      id='create-button'
      type='submit'
      className='bg-emerald-500 hover:bg-emerald-600 font-bold'
      disabled={disabled}
      onClick={createChallengeHandler}
    >
      Criar
    </Button>
  );
}
