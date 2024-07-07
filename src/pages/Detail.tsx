import { useParams } from "react-router-dom";
import useCharacterDetail from "../hooks/useCharacterDetail";
import Loading from "../components/common/Loading";
import Error from "../components/common/Error";

export default function Detail() {
  const { id } = useParams<{ id: string | undefined }>();
  const { character, loading, error } = useCharacterDetail(id);

  if (loading) return <Loading />;
  if (error) return <Error message={error.message} />;

  return (
    <>
      {character ? (
        <>
          <div>{character.name}</div>
          <img src={character.imageUrl} alt="" />
          <a href={character.sourceUrl} target="_blank">
            👉 {character.name} 더 알아보기!
          </a>
          <ul>
            {character.films.map((film) => {
              return <li>{film}</li>;
            })}
          </ul>
        </>
      ) : (
        <h1>{id}로 조회된 캐릭터가 없습니다 😢</h1>
      )}
    </>
  );
}
