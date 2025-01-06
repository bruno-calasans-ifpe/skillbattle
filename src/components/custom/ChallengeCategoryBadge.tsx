import { Badge } from '@/components/ui/badge';

type ChallengeCategoryBadgeProps = {
  children: React.ReactNode;
};

export default function ChallengeCategoryBadge({
  children,
}: ChallengeCategoryBadgeProps) {
  return (
    <Badge className='bg-purple-500 cursor-pointer hover:bg-purple-600'>
      {children}
    </Badge>
  );
}
