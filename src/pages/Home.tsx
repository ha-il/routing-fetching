import { Link } from "react-router-dom";
import useCharacters from "../hooks/useCharacters";
import Loading from "../components/common/Loading";
import Error from "../components/common/Error";
import styled from "styled-components";

export default function Home() {
  const { characters, loading, error } = useCharacters();

  if (loading) return <Loading />;
  if (error) return <Error message={error.message} />;

  return (
    <Container>
      <Title>Disney Characters</Title>
      <List>
        {characters.map((character) => {
          return (
            <ListItem key={character.id}>
              <Link to={`/${character.id}`}>
                <ImgContainer>
                  <img
                    src={character.imageUrl ? character.imageUrl : "404.webp"}
                    alt={character.name}
                  />
                </ImgContainer>
                <CharacterName>{character.name}</CharacterName>
              </Link>
            </ListItem>
          );
        })}
      </List>
    </Container>
  );
}

const Container = styled.div`
  padding: 2rem;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #fbc531;
  margin-bottom: 2rem;
`;

const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  padding: 0;
  margin: 0;
  list-style: none;
`;

const ListItem = styled.li`
  background: #273c75;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  transition: transform 0.2s;
  overflow: hidden;

  &:hover {
    transform: translateY(-10px);
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

const ImgContainer = styled.div`
  width: 100%;
  height: 12rem;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.2s;

    &:hover {
      transform: scale(1.1);
    }
  }
`;

const CharacterName = styled.h2`
  font-size: 1.5rem;
  color: #f5f5f5;
  margin: 1rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 48px;
`;
