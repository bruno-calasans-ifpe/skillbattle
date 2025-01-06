import ChallengeCategoryBadge from '@/components/custom/ChallengeCategoryBadge';
import ChallengeTypeBadge from '@/components/custom/ChallengeTypeBadge';
import { Challenge } from '@/types/Challenge';

type ChallengeInfoTagsProps = {
  challenge: Challenge;
};

export default function ChallengeInfoTags({
  challenge,
}: ChallengeInfoTagsProps) {
  return (
    <div id='tags' className='flex gap-1'>
      <ChallengeTypeBadge>{challenge.type}</ChallengeTypeBadge>
      {challenge.categories.map((category) => (
        <ChallengeCategoryBadge key={category}>
          {category}
        </ChallengeCategoryBadge>
      ))}
    </div>
  );
}
