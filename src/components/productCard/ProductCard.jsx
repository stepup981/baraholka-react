import productCard from "@components/productCard/productCard.scss";

const ProductCard = ({ id, name, price, category, image }) => {
  return (
    <div className="product-card">
      <div className="product-card__img">
        <img src={image} alt={name} />
      </div>
      <div className="product-card__info">
        <div className="product-card__name">{name}</div>
        <div className="product-card__info-block">
          <div className="product-card__price">{price}$</div>
          <div className="product-card__bag">+</div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
