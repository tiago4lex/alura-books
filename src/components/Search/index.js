import Input from "../Input";
import styled from "styled-components";
import { useState } from "react";
import { books } from "./searchData";

const SearchContainer = styled.section`
  background-image: linear-gradient(90deg, #002f52 35%, #326589 165%);
  color: #fff;
  text-align: center;
  padding: 85px 0;
  height: 470px;
  width: 100%;
`;

const Title = styled.h2`
  color: #fff;
  font-size: 36px;
  text-align: center;
  width: 100%;
`;

const Subtitle = styled.h3`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 40px;
`;

const Result = styled.div`
  diplay: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  cursor: pointer;

  p {
    width: 200px;
  }

  img {
    width: 100px;
  }

  &:hover {
    border: 1px solid #fff;
  }
`;

function Search() {
  const [searchedBooks, setSearchedBooks] = useState([]);

  return (
    <SearchContainer>
      <Title>Busque por livros</Title>
      <Subtitle>Encontre o livro que você procura</Subtitle>
      <Input
        placeholder="Digite o nome do livro"
        onChange={(event) => {
          const search = event.target.value.toLowerCase();
          const filteredBooks = books.filter((book) =>
            book.name.toLowerCase().includes(search)
          );
          setSearchedBooks(filteredBooks);
        }}
      />
      {searchedBooks.map((book) => (
        <Result key={book.id}>
          <img src={book.src} alt={book.name} />
          <p>{book.name}</p>
        </Result>
      ))}
    </SearchContainer>
  );
}

export default Search;
