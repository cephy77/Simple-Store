import styled from "styled-components";
import ProductCard from "../ProductCard/ProductCard";
import { products } from "./products";

const MarketWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  width: calc(100% - 50px);
  padding: 20px;
  margin: 0 auto;
  border-radius: 7px;
  /* border: 1px black solid; */
`;

function MarketPlace() {
  return (
    <MarketWrapper>
      {products.map((e) => (
        <ProductCard product={e} key={e.id} />
      ))}
    </MarketWrapper>
  );
}

export default MarketPlace;
