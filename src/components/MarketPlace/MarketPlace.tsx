import styled from "styled-components";
import ProductCard from "../ProductCard/ProductCard";

const MarketWrapper = styled.div`
  width: calc(100% - 50px);
  padding: 20px;
  margin: 0 auto;
  height: 100px;
  border-radius: 7px;
  border: 1px black solid;
`;

type productObject = {
  title: string;
  about: string;
  price: number;
  id: string;
};

function MarketPlace() {
  const productsArray: productObject[] = [
    {
      title: "Espresso Roast",
      about: "Perfectly balanced blend of medium roasted coffee beans. ",
      price: 20,
      id: "c1",
    },
    {
      title: "Espresso Roast",
      about: "Perfectly balanced blend of medium roasted coffee beans. ",
      price: 20,
      id: "c2",
    },
    {
      title: "Espresso Roast",
      about: "Perfectly balanced blend of medium roasted coffee beans. ",
      price: 20,
      id: "c3",
    },
  ];
  return (
    <MarketWrapper>
      {productsArray.map((e) => (
        <ProductCard product={e} key={e.id} />
      ))}
    </MarketWrapper>
  );
}

export default MarketPlace;
