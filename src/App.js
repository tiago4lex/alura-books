import Header from "./components/Header";
import Search from "./components/Search";
import LatestReleases from "./components/LatestReleases";
import styled from "styled-components";

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(90deg, #002f52 35%, #326589 165%);
`;

function App() {
  return (
    <AppContainer>
      <Header />
      <Search />
      <LatestReleases />
    </AppContainer>
  );
}

export default App;
