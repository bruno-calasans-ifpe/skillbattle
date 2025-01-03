import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectScrollDownButton,
} from "@/components/ui/select";
import type { ChallengeType } from "@/types/Challenge";

const challengeTypeData = [
  {
    label: "Normal",
    value: "normal",
  },
  {
    label: "Pontuação",
    value: "score",
  },
  {
    label: "Speed",
    value: "speed",
  },
];

type ChallengeTypeSelectorProps = {
  onTypeChange: (type: ChallengeType) => void;
};

export default function ChallengeTypeSelector({
  onTypeChange,
}: ChallengeTypeSelectorProps) {
  return (
    <div className="flex gap-1 items-center">
      <p className="text-sm">Tipo:</p>
      <Select defaultValue="normal" onValueChange={onTypeChange}>
        <SelectTrigger className="w-fit h-6 p-2">
          <SelectValue placeholder="Tipo de Desafio" />
        </SelectTrigger>
        <SelectContent>
          {challengeTypeData.map(({ label, value }) => (
            <SelectItem key={label} value={value}>
              {label}
            </SelectItem>
          ))}
          <SelectScrollDownButton className="" />
        </SelectContent>
      </Select>
    </div>
  );
}
