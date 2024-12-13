import { Forward } from "lucide-react";
import { Button } from "../ui/button";

type CodeBtnProps = {};

export default function CodeBtn({}: CodeBtnProps) {
  return (
    <Button
      variant="ghost"
      size="sm"
      className="bg-emerald-600 hover:bg-emerald-700 group"
    >
      <Forward className="text-white " />
      <p className="text-white font-bold">Entrar com código</p>
    </Button>
  );
}
