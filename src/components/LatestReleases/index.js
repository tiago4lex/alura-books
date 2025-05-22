import { books } from "./dataLatestReleases";
import styled from "styled-components";
import { Title } from "../Title";

const LatestReleasesContainer = styled.section`
  background-color: #ebecee;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
`;
const NewBooksContainer = styled.div`
  margin-top: 30px;
  display: flex;
  width: 100%;
  justify-content: center;
  cursor: pointer;
`;

function LatestReleases() {
  return (
    <LatestReleasesContainer>
      <Title color="#eb9b00" fontSize="36px" textAlign="center">
        ÚLTIMOS LANÇAMENTOS
      </Title>
      <NewBooksContainer>
        {books.map((book) => (
          <img src={book.src} alt={book.name} />
        ))}
      </NewBooksContainer>
    </LatestReleasesContainer>
  );
}

export default LatestReleases;
