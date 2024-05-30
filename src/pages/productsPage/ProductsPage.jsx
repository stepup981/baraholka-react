import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getProducts } from "@store/productsSlice/productsActions";
import { getCategories } from "@store/categoriesSlice/categoriesAction";
import { clearActiveCategories, setActiveCategories } from "../../store/categoriesSlice/categoriesSlice";

import { filteredProducts } from "@store/productsSlice/productsSelector";

import ProductsBlock from "@components/productsBlock/ProductsBlock";
import FilterProducts from "@components/filterProducts/FilterProducts";
import Loader from "@components/UI/loader/Loader";

import productspage from "@pages/productsPage/productsPage.scss";

const ProductsPage = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.categories);
  const isLoading = useSelector((state) => state.loader.isLoading);
  const productsFiltered = useSelector(filteredProducts)

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  // useEffect(() => {
  //   return () => {
  //     console.log('типо размонтирован')
  //     dispatch(clearActiveCategories())
  //   }
  // }, [])

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <section className="products">
          <FilterProducts categories={categories} />
          <ProductsBlock products={productsFiltered} />
        </section>
      )}
    </>
  );
};

export default ProductsPage;
