import styled from "styled-components";
import img from "../../assets/coffee.webp";
import { colors } from "../../styles/Variables";
type productObject = {
  title: string;
  about: string;
  price: number;
  id: string;
};
const CardWrapper = styled.div`
  margin: 0 auto;
  width: 200px;
  height: 270px;
`;
const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 170px;
  height: 240px;
  background-color: ${colors.white};
  margin: 0 auto;
  border-radius: 5px;
  /* border: 1px solid ${colors.dark}; */
  padding: 0;
  transition: all 0.5s;
  & img {
    width: 100%;
  }
  &:hover {
    box-shadow: 0px 1px 10px ${colors.black};
  }
`;
const Title = styled.a`
  display: inline-block;
  width: 100%;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  margin: 0 0 5px 0;
`;
const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  height: 40px;
  & div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
    border-radius: 0 0 0 5px;
    color: ${colors.light};
    background-color: ${colors.dark};
  }
`;
const BuyButton = styled.button`
  font-family: inherit;
  border: 0;
  color: ${colors.dark};
  background-color: ${colors.light};
  border-radius: 0 0 5px 0;
  width: 50%;
  transition: all 0.5s;
  &:hover {
    color: ${colors.light};
    background-color: ${colors.dark};
  }
`;

function ProductCard(props: { product: productObject }) {
  const { title, about, price, id } = props.product;
  return (
    <CardWrapper>
      <Card>
        <img src={img} alt="coffee" />
        <Title>{title}</Title>
        <Actions>
          <div>{price}$</div>
          <BuyButton>Buy</BuyButton>
        </Actions>
      </Card>
    </CardWrapper>
  );
}

export default ProductCard;
