import { books } from "./dataLatestReleases";
import { Title } from "../Title";
import RecommendationCard from "../RecommendationCard";
import styled from "styled-components";
import bookImg from "../../images/livro2.png"

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
      <RecommendationCard
        title="Talvez você se interesse por..."
        subtitle="Angular 11"
        description="Construindo uma aplicação com a plataforma Google"
        img={bookImg}
      />
    </LatestReleasesContainer>
  );
}

export default LatestReleases;
