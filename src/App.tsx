import useCharacters from "./hooks/useCharacters";

function App() {
  const characters = useCharacters();
  return (
    <>
      {characters.map((character) => {
        return (
          <li key={character.id}>
            <h2>{character.name}</h2>
            <img src={character.imageUrl}></img>
          </li>
        );
      })}
    </>
  );
}

export default App;
