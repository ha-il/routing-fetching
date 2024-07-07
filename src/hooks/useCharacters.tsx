import { useState } from "react";
import { Character } from "../types";
import { CHARACTERS_ENDPOINT } from "../constants";
import useLoadingAndError from "./useLoadingAndError";

export default function useCharacters() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const { loading, error } = useLoadingAndError(getChatcters);

  async function getChatcters() {
    const response = await fetch(CHARACTERS_ENDPOINT);
    if (!response.ok) {
      throw new Error("데이터를 불러오는 데 실패했습니다.");
    }
    const data: Character[] = await response.json();
    setCharacters(data);
  }

  return { characters, loading, error };
}
