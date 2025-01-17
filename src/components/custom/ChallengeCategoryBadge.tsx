import { X } from 'lucide-react';

import { Badge } from '@/components/ui/badge';

type ChallengeCategoryBadgeProps = {
  category: string;
  onRemove?: (category: string) => void;
};

export default function ChallengeCategoryBadge({
  onRemove,
  category,
}: ChallengeCategoryBadgeProps) {
  return (
    <Badge className='bg-purple-500 cursor-pointer hover:bg-purple-600 p-1 flex gap-2 justify-between'>
      {category}
      <X
        size={16}
        className='font-bold hover:text-red-500 text-lg transition-all'
        onClick={() => onRemove && onRemove(category)}
      />
    </Badge>
  );
}
