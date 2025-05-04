import { useState } from "react";
import Input from "../Input";
import styled from "styled-components";
import { useState } from "react";

const SearchContainer = styled.section`
  background-image: linear-gradient(90deg, #002f52 35%, #326589 165%);
  color: #fff;
  text-align: center;
  padding: 85px 0;
  height: 270px;
  width: 100%;
`;

const Title = styled.h1`
  color: #fff;
  font-size: 36px;
  text-align: center;
  width: 100%;
`;

const Subtitle = styled.h2`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 40px;
`;

function Search() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <SearchContainer>
      <Title>Já sabe por onde começar?</Title>
      <Subtitle>Encontre seu livro em nossa estante</Subtitle>
      <Input
        placeholder="Escreva sua próxima leitura"
        onBlur={(event) => setSearchTerm(event.target.value)}
      />
    </SearchContainer>
  );
}

export default Search;
