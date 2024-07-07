import styled from "styled-components";

export default function Loading() {
  return <Text>Loading...</Text>;
}

const Text = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  font-weight: 700;
  font-size: 2rem;
`;
