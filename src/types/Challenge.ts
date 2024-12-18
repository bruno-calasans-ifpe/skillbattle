export type Challenge = {
  name: string;
  categories: string[];
  type: CategoryType;
  image: string;
};

export type CategoryType = "normal" | "speed" | "score";
