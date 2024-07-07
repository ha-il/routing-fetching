import { useState } from "react";
import { Character } from "../types";
import { CHARACTERS_ENDPOINT } from "../constants";
import useLoadingAndError from "./useLoadingAndError";

export default function useCharacterDetail(id: string | undefined) {
  const [character, setCharacter] = useState<Character | null>(null);
  const { loading, error } = useLoadingAndError(getChatcter);

  async function getChatcter() {
    const response = await fetch(`${CHARACTERS_ENDPOINT}/${id}`);
    const data: Character = await response.json();
    setCharacter(data);
  }

  return { character, loading, error };
}
