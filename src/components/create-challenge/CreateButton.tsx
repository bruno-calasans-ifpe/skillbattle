'use client';

import { Button } from '@/components/ui/button';
import useCustomToast from '@/hooks/use-custom-toast';
import { createChallenge } from '@/services/firebase/collections/challenges';
import useAuthStore from '@/store/authStore';
import useCreateChallengeStore from '@/store/createChallengeStore';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function CreateButton() {
  const { challenge } = useCreateChallengeStore();
  const { successToast, errorToast } = useCustomToast();
  const [loading, setLoading] = useState(false);
  const { user } = useAuthStore();
  const router = useRouter();

  const createChallengeHandler = async () => {
    if (!user) return;
    setLoading(true);
    try {
      challenge.createdBy = user.id;
      await createChallenge(challenge);
      successToast('Desafio criado sucesso', 'Desafio foi criado');
      router.push('/');
    } catch (error) {
      errorToast('Error ao criar desafio', 'Tente novamente mais tarde');
    }
    setLoading(false);
  };

  return (
    <Button
      id='create-button'
      type='submit'
      className='bg-emerald-500 hover:bg-emerald-600 font-bold'
      disabled={loading}
      onClick={createChallengeHandler}
    >
      {loading ? 'Criando...' : 'Criar desafio'}
    </Button>
  );
}
