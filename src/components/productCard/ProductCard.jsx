import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

// import {
//   addProductOnBag,
//   removeProductOnBag,
// } from "@store/bagSlice/bagActions";
import { rebaseStatusOnBag } from "@store/productsSlice/productsActions";

import productCard from "@components/productCard/productCard.scss";

const ProductCard = ({ id, name, price, category, image, onBag }) => {
  // let dataBase = null
  const dispatch = useDispatch();
  const [statusProduct, setStatusProduct] = useState(onBag);

  useEffect(() => {
    setStatusProduct(onBag);
  }, [onBag]);

  const actionOnBag = () => {
    const newStatus = !statusProduct;
    setStatusProduct(newStatus);
    dispatch(rebaseStatusOnBag({ id, onBag: newStatus }));

    // if (newStatus) {
    //   dispatch(
    //     addProductOnBag({
    //       id,
    //       name,
    //       price,
    //       category,
    //       image,
    //       onBag: newStatus,
    //       dataBase
    //     })
    //   );
    // } else {
    //   dispatch(removeProductOnBag(id));
    // }
  };

  return (
    <div className="product-card">
      <div className="product-card__img">
        <img src={image} alt={name} />
      </div>
      <div className="product-card__info">
        <div className="product-card__name">{name}</div>
        <div className="product-card__info-block">
          <div className="product-card__price">{price}$</div>
          <div className="product-card__bag" onClick={actionOnBag}>
            {statusProduct ? "-" : "+"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;