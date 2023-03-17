import styled from "styled-components";
import About from "../../components/About/About";
import MarketPlace from "../../components/MarketPlace/MarketPlace";

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
`;

function Main() {
  return (
    <MainWrapper>
      <About />
      <MarketPlace />
    </MainWrapper>
  );
}

export default Main;
