import {
  Select,
  SelectContent,
  SelectItem,
  SelectScrollDownButton,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import useCreateChallengeStore from '@/store/createChallengeStore';
import type { ChallengeType } from '@/types/Challenge';

const challengeTypeData = [
  {
    label: 'Normal',
    value: 'normal',
  },
  {
    label: 'Pontuação',
    value: 'score',
  },
  {
    label: 'Speed',
    value: 'speed',
  },
];

export default function ChallengeTypeSelector() {
  const { setChallengeType, resetDefaultRules } = useCreateChallengeStore();

  const changeTypeHandler = (type: ChallengeType) => {
    setChallengeType(type);
  };

  return (
    <div className='flex gap-1 items-center'>
      <p className='text-sm'>Tipo:</p>
      <Select defaultValue='normal' onValueChange={changeTypeHandler}>
        <SelectTrigger className='w-fit h-6 p-2'>
          <SelectValue placeholder='Tipo de Desafio' />
        </SelectTrigger>
        <SelectContent>
          {challengeTypeData.map(({ label, value }) => (
            <SelectItem key={label} value={value}>
              {label}
            </SelectItem>
          ))}
          <SelectScrollDownButton className='' />
        </SelectContent>
      </Select>
    </div>
  );
}
