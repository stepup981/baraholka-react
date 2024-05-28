import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCategories } from "@store/categoriesSlice/categoriesAction";

import Loader from "@components/UI/loader/Loader";
import CategoriesBlock from "@components/categoriesBlock/CategoriesBlock";

import categoriesPage from "@pages/categoriesPage/categoriesPage.scss";

const CategoriesPage = () => {
  const categories = useSelector((state) => state.categories.categories);
  const isLoading = useSelector((state) => state.loader.isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <section className="categories">
          <CategoriesBlock categories={categories} />
        </section>
      )}
    </>
  );
};

export default CategoriesPage;
