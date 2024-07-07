import { Link } from "react-router-dom";
import useCharacters from "../hooks/useCharacters";
import Loading from "../components/common/Loading";
import Error from "../components/common/Error";

export default function Home() {
  const { characters, loading, error } = useCharacters();

  if (loading) return <Loading />;
  if (error) return <Error message={error.message} />;

  return (
    <ul>
      {characters.map((character) => {
        return (
          <li key={character.id}>
            <Link to={`/${character.id}`}>
              <h2>{character.name}</h2>
              <img src={character.imageUrl}></img>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
