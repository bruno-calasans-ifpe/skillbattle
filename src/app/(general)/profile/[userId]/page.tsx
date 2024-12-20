import ContentContainer from "@/components/custom/ContentContainer";
import MatchHistory from "./MatchHistory";
import UserProfile from "./UserProfile";
import { CHALLENGE_DATA } from "@/config/challenges";

type UserProfilePageProps = {};

export default function UserProfilePage({}: UserProfilePageProps) {
  return (
    <ContentContainer classname="p-0">
      <UserProfile />
      <MatchHistory challenges={CHALLENGE_DATA} />
    </ContentContainer>
  );
}
