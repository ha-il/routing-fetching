import { Character } from "../types";

export function isCharacter(obj: unknown): obj is Character {
  return (
    typeof obj === "object" &&
    obj !== null &&
    "name" in obj &&
    "imageUrl" in obj &&
    "sourceUrl" in obj &&
    "films" in obj
  );
}
