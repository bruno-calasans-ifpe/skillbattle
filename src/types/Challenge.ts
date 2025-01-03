export type Challenge = {
  name: string;
  categories: string[];
  type: ChallengeType;
  image: string;
};

export type ChallengeType = "normal" | "speed" | "score";
export type ChallengeStatus = "win" | "lose" | "waiting";
