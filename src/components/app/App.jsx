import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "@components/layout/header/Header";
import { MainPage, CategoriesPage, ProductsPage, Bag } from "@pages";

const App = () => {
  return (
    <Router>
      <Header />
      <main className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/bag" element={<Bag />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
