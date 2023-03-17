import styled from "styled-components";
import { colors, viewport } from "../../styles/Variables";
import menu from "../../assets/menu.png";
import cart from "../../assets/cart.png";

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
  & img {
    margin: 5px;
    width: 30px;
    height: 30px;
  }
`;
const Logo = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;
const Cart = styled.div`
  height: 40px;
  width: 40px;
  & img {
    margin: 5px;
    width: 30px;
    height: 30px;
  }
`;

function Header() {
  return (
    <HeaderWrapper>
      <InnerHeader>
        <Menu>
          <img src={menu} alt="menu icon" />
        </Menu>
        <Logo>CoBean</Logo>
        <Cart>
          <img src={cart} alt="cart icon" />
        </Cart>
      </InnerHeader>
    </HeaderWrapper>
  );
}

export default Header;
