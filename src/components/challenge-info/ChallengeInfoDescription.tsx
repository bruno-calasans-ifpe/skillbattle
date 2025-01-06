import Title from '@/components/custom/Title';
import { Challenge } from '@/types/Challenge';

type ChallengeInfoDescriptionProps = {
  challenge: Challenge;
};

export default function ChallengeInfoDescription({
  challenge,
}: ChallengeInfoDescriptionProps) {
  return (
    <div className='flex flex-col gap-2'>
      <Title>Descrição</Title>
      <p className='text-md text-justify'>{challenge.desc}</p>
    </div>
  );
}
