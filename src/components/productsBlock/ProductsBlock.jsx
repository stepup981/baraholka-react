import ProductCard from "@components/productCard/ProductCard";

import productsBlock from "@components/productsBlock/productsBlock.scss";

const ProductsBlock = (props) => {
  const { products } = props;

  const renderProducts = (arr) => {
    return arr.map(({ ...props }) => (
      <ProductCard key={props.id} {...props}></ProductCard>
    ));
  };

  const cards = renderProducts(products);

  return (
    <>
      <div className="products-block">{cards}</div>
    </>
  );
};

export default ProductsBlock;
