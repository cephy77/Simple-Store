import styled from "styled-components";
import img from "../../assets/coffee.webp";
type productObject = {
  title: string;
  about: string;
  price: number;
  id: string;
};
const CardWrapper = styled.div`
  width: 200px;
  height: 250px;
`;
const Card = styled.div`
  width: 150px;
  height: 200px;
  margin: 0 auto;
  border-radius: 5px;
  border: 1px solid black;
  padding: 0;
  transition: padding 0.5s;
  & img {
    width: 100%;
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
  justify-content: space-around;
`;

function ProductCard(props: { product: productObject }) {
  const { title, about, price, id } = props.product;
  return (
    <CardWrapper>
      <Card>
        <img src={img} alt="coffee" />
        <Title>{title}</Title>
        <Actions>
          {price}$<button>Buy</button>
        </Actions>
      </Card>
    </CardWrapper>
  );
}

export default ProductCard;
