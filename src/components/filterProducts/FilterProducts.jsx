import { useState, useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { getProducts } from "@store/productsSlice/productsActions";
import {
  setActiveCategories,
  clearActiveCategories,
} from "@store/categoriesSlice/categoriesSlice";


import Button from "@components/UI/button/Button";
import { filterPrice } from "@helpers/filterProducts/FilterProducts";
import filterProducts from "@components/filterProducts/filterProducts.scss";

const FilterProducts = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { categories } = props;
  const activeCategories = useSelector(
    (state) => state.categories.activeCategories
  );
  const [isOpen, setIsOpen] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const [searchPrice, setSearchPrice] = useState('');

  // useEffect(() => () => {
  //   console.log('типо размонтирован')
  //   dispatch(clearActiveCategories())
  // }, [])

  // useEffect(() => {
  //   console.log("Active Categories:", activeCategories);
  // }, [activeCategories]);
  

  const renderCategories = (arr) =>
    arr.map((item) => {
      const isChecked = activeCategories.includes(item.name);

      const handleActiveCategories = (event, category) => {
        dispatch(setActiveCategories(category));
      };

      return (
        <li key={item.id} className="filter__categories-item">
          <label>
            {item.name}
            <input
              type="checkbox"
              checked={isChecked}
              onChange={(event) => handleActiveCategories(event, item.name)}
            />
          </label>
        </li>
      );
    });

  const renderPrice = (arr) =>
    arr.map((item) => {
      return (
        <option key={item.id} value={item.value}>
          {item.name}
        </option>
      );
    });

  const toggleCategories = () => {
    setIsOpen(!isOpen);
  };

  const applyFilter = () => {
    const categoryParams = activeCategories.map(category => `category=${category}`).join('&')
    let categoryPrice = searchPrice
    switch (categoryPrice) {
      case 'lowToHigh':
        categoryPrice = 'sortBy=price'
        break;
      case "highToLow":
        categoryPrice = 'sortBy=-price'
        break;
      default:
        categoryPrice = ''
    }
    console.log(categoryPrice)
    navigate(`?${categoryParams}`)
    dispatch(getProducts())
  };

  const category = renderCategories(categories);
  const price = renderPrice(filterPrice);

  return (
    <div className="filter">
      <Button onClick={() => applyFilter()}>Применить</Button>
      <div className="filter__categories">
        <div onClick={toggleCategories} className="filter__categories-block">
          Выберите категорию
        </div>
        <ul
          className={
            isOpen ? "filter__categories-list open" : "filter__categories-list"
          }
        >
          {category}
        </ul>
      </div>
      <select className="filter__price" onChange={(e) => setSearchPrice(e.target.value)}>{price}</select>
      <div className="filter__search">
        <input type="text" placeholder="Print item name" />
      </div>
    </div>
  );
};

export default FilterProducts;
