import { useEffect, useState } from "react";
import { Character } from "../types";
import { CHARACTERS_ENDPOINT } from "../constants";
import { handleErrorAsync } from "../utils/handleErrorAsync";

export default function useCharacters() {
  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    async function getChatcters() {
      const response = await fetch(CHARACTERS_ENDPOINT);
      const data: Character[] = await response.json();
      setCharacters(data);
    }
    // async function getChatcter() {
    //   const fakeID = "168";

    //   const response = await fetch(`${CHARACTERS_ENDPOINT}/${fakeID}`);
    //   const data: Character = await response.json();

    //   console.log(data);
    // }
    handleErrorAsync(getChatcters);
  }, []);
  return characters;
}
