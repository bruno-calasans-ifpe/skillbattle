'use client';

import { Check } from 'lucide-react';
import { useState } from 'react';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { CATEGORIES_DATA } from '@/config/categories';
import useCreateChallengeStore from '@/store/createChallengeStore';

import ChallengeCategoryBadge from '../custom/ChallengeCategoryBadge';

type CategorySelectorProps = {};

export default function CategorySelector({}: CategorySelectorProps) {
  const { challenge, addCategory, removeCategory } = useCreateChallengeStore();
  const [selectedCategory, setSelectedCategory] = useState('');

  let unique = challenge.type !== 'score';
  let canAddCategory = (unique && challenge.categories.length === 0) || !unique;

  const changeChallengeCategoryHandler = (category: string) => {
    if (canAddCategory) {
      addCategory(category);
      setSelectedCategory(category);
    }
  };

  const removeCategoryHandler = (category: string) => {
    removeCategory(category);
    setSelectedCategory('');
  };

  const categories = CATEGORIES_DATA.slice(1);

  return (
    <div className='flex flex-col gap-1'>
      {challenge.categories.length > 0 && (
        <div className='grid grid-cols-5 flex-1 p-1 gap-1'>
          {challenge.categories.map((category) => (
            <ChallengeCategoryBadge
              key={category}
              category={category}
              onRemove={removeCategoryHandler}
            />
          ))}
        </div>
      )}
      <Select
        disabled={!canAddCategory}
        value={selectedCategory}
        onValueChange={changeChallengeCategoryHandler}
      >
        <SelectTrigger className='w-full'>
          <SelectValue
            placeholder={
              unique
                ? 'Selecione 1 categoria'
                : 'Selecione 1 ou mais categorias'
            }
          />
        </SelectTrigger>
        <SelectContent>
          {categories.map((category) => (
            <SelectItem key={category} value={category}>
              <p className='flex gap-1 items-center'>
                <span>{category}</span>
                <span>
                  {challenge.categories.find((c) => c === category) && (
                    <Check size={16} />
                  )}
                </span>
              </p>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
