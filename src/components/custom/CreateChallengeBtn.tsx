import { Button } from "../ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";

type CreateChallengeBtnProps = {};

export default function CreateChallengeBtn({}: CreateChallengeBtnProps) {
  return (
    <Link href="/create-challenge">
      <Button
        variant="ghost"
        size="sm"
        className="bg-emerald-500 hover:bg-emerald-600 group"
      >
        <Plus className="text-white " />
        <p className="text-white font-bold">Criar</p>
      </Button>
    </Link>
  );
}
