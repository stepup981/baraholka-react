import { useDispatch } from "react-redux";
import { setActiveCategories } from "@store/categoriesSlice/categoriesSlice";

import { Link } from "react-router-dom";

import categoryCard from "@components/categoryCard/categoryCard.scss";

const CategoryCard = ({ id, name, image }) => {
  const dispatch = useDispatch();

  const handleActiveCategories = (nameCategory) => {
    dispatch(setActiveCategories(nameCategory));
  };

  return (
    <Link
      to={`/products?category=${name}`}
      onClick={() => handleActiveCategories(name)}
    >
      <div className="category-card">
        <div className="category-card__img">
          <img src={image} alt={name} />
        </div>
        <div className="category-card__title">{name}</div>
      </div>
    </Link>
  );
};

export default CategoryCard;
