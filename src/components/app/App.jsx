import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "@components/layout/header/Header";
import { MainPage, CategoriesPage, ProductsPage } from "@pages";

const App = () => {
  return (
    <Router>
      <Header />
      <main className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/products" element={<ProductsPage />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
