import styled from "styled-components";
import { colors, viewport } from "../../styles/Variables";

const HeaderWrapper = styled.header`
  height: 40px;
  width: 100%;
  background-color: ${colors.light};
  z-index: 500;
  box-shadow: 0 5px 10px #1c1c1925;
`;
const InnerHeader = styled.nav`
  display: flex;
  justify-content: space-between;
  height: 100%;
  padding: 0 10px;
  margin: 0 auto;
  @media (min-width: 920px) {
    width: ${viewport.desktop}px;
  }
`;
const Menu = styled.div`
  height: 40px;
  width: 40px;
  background-color: ${colors.dark};
`;
const Logo = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;
const Cart = styled.div`
  height: 40px;
  width: 40px;
  background-color: ${colors.dark};
`;

function Header() {
  return (
    <HeaderWrapper>
      <InnerHeader>
        <Menu />
        <Logo>Coffe Bean</Logo>
        <Cart />
      </InnerHeader>
    </HeaderWrapper>
  );
}

export default Header;
