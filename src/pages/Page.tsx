import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import { viewport, colors } from "../styles/Variables";
import Header from "../components/Header/Header";
import Cart from "./Cart/Cart";
import Main from "./Main/Main";

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const ContentWrapper = styled.div`
  overflow: auto;
  width: 100%;
  height: calc(100vh - 50px);
  padding-top: 10px;
  background-color: ${colors.backgroundWhite};
`;
const Content = styled.main`
  margin: 0 auto;
  @media (min-width: 920px) {
    width: calc(${viewport.desktop}px - 40px);
  }
`;

function Page() {
  return (
    <PageWrapper>
      <Header />
      <ContentWrapper>
        <Content>
          <Routes>
            <Route index element={<Main />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Content>
      </ContentWrapper>
    </PageWrapper>
  );
}

export default Page;
