import { Badge } from '@/components/ui/badge';

type ChallengeTypeBadgeProps = {
  children: React.ReactNode;
};

export default function ChallengeTypeBadge({
  children,
}: ChallengeTypeBadgeProps) {
  return (
    <Badge className='bg-indigo-500 hover:bg-indigo-600 cursor-pointer'>
      {children}
    </Badge>
  );
}
