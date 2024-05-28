import CategoryCard from "@components/categoryCard/CategoryCard";

import categoriesBlock from "@components/categoriesBlock/categoriesBlock.scss";

const CategoriesBlock = (props) => {
  const { categories } = props;
  
  const renderCategories = (arr) => {
    return arr.map(({ ...props }) => {
      return <CategoryCard key={props.id} {...props}></CategoryCard>;
    });
  };

  const categoriesEl = renderCategories(categories);

  return <div className="categories-block">{categoriesEl}</div>;
};

export default CategoriesBlock;
