import ProductCard from "@components/productCard/ProductCard";

import bagBlock from "@components/bagBlock/bagBlock.scss";

const BagBlock = ({ productsBag }) => {
  const renderCards = (arr) => {
    return arr.map(({ ...props }) => (
      <ProductCard key={props.id} {...props}></ProductCard>
    ));
  };
  const cardElem = renderCards(productsBag);

  return <div className="bag-block">{cardElem}</div>;
};

export default BagBlock;
