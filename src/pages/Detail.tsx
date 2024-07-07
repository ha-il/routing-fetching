import { useParams } from "react-router-dom";
import useCharacterDetail from "../hooks/useCharacterDetail";
import Loading from "../components/common/Loading";
import Error from "../components/common/Error";
import styled from "styled-components";
import { isCharacter } from "../utils/isCharacter";

export default function Detail() {
  const { id } = useParams<{ id: string | undefined }>();
  const { character, loading, error } = useCharacterDetail(id);

  if (loading) return <Loading />;
  if (error) return <Error message={`${id}로는 조회가 불가능합니다! 😭`} />;

  return (
    <Container>
      {character && isCharacter(character) ? (
        <>
          <CharacterName>{character.name}</CharacterName>
          <Image
            src={character.imageUrl ? character.imageUrl : "404.webp"}
            alt={character.name}
          />

          <FilmList>
            {character.films.map((film, index) => {
              return <FilmItem key={index}>{film}</FilmItem>;
            })}
          </FilmList>
          <MoreInfo href={character.sourceUrl} target="_blank">
            👉 Learn more about {character.name}!
          </MoreInfo>
        </>
      ) : (
        <NoCharacterMessage>
          {id}로 조회된 캐릭터가 없습니다 😢
        </NoCharacterMessage>
      )}
    </Container>
  );
}

const Container = styled.div`
  padding: 2rem;
  text-align: center;
  background-color: #273c75;
  color: #f5f5f5;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  margin: 2rem;
`;

const CharacterName = styled.h1`
  font-size: 2.5rem;

  margin-bottom: 1.5rem;
  font-weight: 600;
`;

const Image = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: 1.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const MoreInfo = styled.a`
  display: inline-block;
  margin-top: 1rem;
  font-size: 1.2rem;
  text-decoration: none;
  transition: color 0.3s;
  color: white;
`;

const FilmList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 2rem 0 0 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center; // 중앙 정렬을 위해 추가
`;

const FilmItem = styled.li`
  background: #192a56;
  margin: 0.5rem;
  padding: 0.5rem 1rem; // 패딩을 좌우로 더 줘서 태그 스타일에 맞추기
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  display: inline-block;
`;

const NoCharacterMessage = styled.h1`
  font-size: 1.5rem;
  margin-top: 2rem;
`;
