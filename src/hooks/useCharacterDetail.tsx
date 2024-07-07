import { useState } from "react";
import { Character } from "../types";
import { CHARACTERS_ENDPOINT } from "../constants";
import useLoadingAndError from "./useLoadingAndError";

export default function useCharacterDetail(id: string | undefined) {
  const [character, setCharacter] = useState<Character | null>(null);
  const { loading, error } = useLoadingAndError(getChatcter);

  async function getChatcter() {
    const response = await fetch(`${CHARACTERS_ENDPOINT}/${id}`);
    if (!response.ok) {
      throw new Error("데이터를 불러오는 데 실패했습니다.");
    }
    const data: Character = await response.json();
    setCharacter(data);
  }

  return { character, loading, error };
}
