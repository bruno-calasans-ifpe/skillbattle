import ChallengeInfoCommentaries from '@/components/challenge-info/ChallengeInfoCommentaries';
import ChallengeInfoDescription from '@/components/challenge-info/ChallengeInfoDescription';
import ChallengeInfoOtherActions from '@/components/challenge-info/ChallengeInfoOtherActions';
import ChallengeInfoRules from '@/components/challenge-info/ChallengeInfoRules';
import ChallengeInfoTags from '@/components/challenge-info/ChallengeInfoTags';
import ChallengeInfoUser from '@/components/challenge-info/ChallengeInfoUser';
import ChallengeMoreInfoButton from '@/components/challenge-info/ChallengeMoreInfoButton';
import JoinButton from '@/components/challenge-info/JoinButton';
import ContentContainer from '@/components/custom/ContentContainer';
import Title from '@/components/custom/Title';
import { CHALLENGE_DATA } from '@/config/challenges';

type ChallengeIdPageProps = {
  params: Promise<{ challengeId: string }>;
};

export default async function ChallengeIdPage({
  params,
}: ChallengeIdPageProps) {
  const { challengeId } = await params;

  const foundChallenge = CHALLENGE_DATA.find((challenge) =>
    challenge.title.toLowerCase().includes(challengeId.toLowerCase()),
  );

  if (!foundChallenge) return;

  console.log(foundChallenge);

  return (
    <ContentContainer>
      <div className='flex gap-3'>
        {/* Image */}
        <div id='challenge-img border-2'>
          <img
            src={foundChallenge.image}
            alt={foundChallenge.title}
            className='h-full w-full border-2 shadow-sm rounded-md object-contain'
          />
        </div>

        {/* Challenge Info */}
        <div className='flex flex-col flex-1 gap-2'>
          <Title className='flex items-center'>
            <p>{foundChallenge.title}</p>
            <ChallengeMoreInfoButton />
          </Title>

          {/* Tags */}
          <ChallengeInfoTags challenge={foundChallenge} />

          {/* Rules */}
          <ChallengeInfoRules challenge={foundChallenge} />

          {/* User */}
          <ChallengeInfoUser challenge={foundChallenge} />

          {/* Join Button */}
          <JoinButton challenge={foundChallenge} />

          {/* Other Info */}
          <ChallengeInfoOtherActions />
        </div>
      </div>

      {/* Desc */}
      <ChallengeInfoDescription challenge={foundChallenge} />

      {/* Commentaries */}
      <ChallengeInfoCommentaries />
    </ContentContainer>
  );
}
