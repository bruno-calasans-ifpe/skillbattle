import ContentContainer from '@/components/custom/ContentContainer';
import { CHALLENGE_DATA } from '@/config/challenges';

import MatchHistory from './MatchHistory';
import UserProfile from './UserProfile';

type UserProfilePageProps = {};

export default function UserProfilePage({}: UserProfilePageProps) {
  return (
    <ContentContainer classname='p-0'>
      <UserProfile />
      <MatchHistory challenges={CHALLENGE_DATA} />
    </ContentContainer>
  );
}
