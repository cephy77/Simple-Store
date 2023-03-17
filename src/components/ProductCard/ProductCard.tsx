type productObject = {
  title: string;
  about: string;
  price: number;
  id: string;
};

function ProductCard(props: { product: productObject }) {
  const { title, about, price, id } = props.product;
  return (
    <div>
      {title} {price}
    </div>
  );
}

export default ProductCard;
