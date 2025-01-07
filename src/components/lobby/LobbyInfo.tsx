import { LockKeyhole, Swords, User } from 'lucide-react';
import Link from 'next/link';

import { Challenge } from '@/types/Challenge';

import InfoText from '../custom/InfoText';

type LobbyInfoProps = {
  challenge: Challenge;
};

export default function LobbyInfo({ challenge }: LobbyInfoProps) {
  return (
    <div className='flex flex-col gap-2 flex-1'>
      {/* <p className='flex items-center font-semibold'>Informações</p> */}
      <InfoText
        title={
          <div className='flex gap-1 items-center '>
            <LockKeyhole size={18} />
            <p>Privacidade</p>
          </div>
        }
      >
        Público
      </InfoText>
      <InfoText
        title={
          <div className='flex gap-1 items-center '>
            <Swords size={18} />
            <p>Tipo de Desafio</p>
          </div>
        }
      >
        {challenge.type}
      </InfoText>
      <InfoText
        title={
          <div className='flex gap-1 items-center '>
            <User size={18} />
            <p>Host</p>
          </div>
        }
      >
        <Link
          href={`/profile/${challenge.createdBy}`}
          className='hover:underline'
        >
          {challenge.createdBy}
        </Link>
      </InfoText>
    </div>
  );
}
