import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getProducts } from "@store/productsSlice/productsActions";
import { getCategories } from "@store/categoriesSlice/categoriesAction";

import ProductsBlock from "@components/productsBlock/ProductsBlock";
import FilterProducts from "@components/filterProducts/FilterProducts";
import Loader from "@components/UI/loader/Loader";

import productspage from "@pages/productsPage/productsPage.scss";

const ProductsPage = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const categories = useSelector((state) => state.categories.categories);
  const isLoading = useSelector((state) => state.loader.isLoading);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

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
          <ProductsBlock products={products} />
        </section>
      )}
    </>
  );
};

export default ProductsPage;
