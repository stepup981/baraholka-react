import { Link, useLocation } from "react-router-dom";
import navigation from "@components/navigationBar/navigationBar.scss";

const pages = [
  { name: "Домой", path: "/" },
  { name: "Категории", path: "/categories" },
  { name: "Продукты", path: "/products" },
];

const Navigation = () => {
  const loc = useLocation();

  const pagesLinks = pages.map((page, index) => (
    <li key={index}>
      <Link
        className={loc.pathname === page.path ? "active" : ""}
        to={page.path}
      >
        {page.name}
      </Link>
    </li>
  ));

  return (
    <nav className="navigation">
      <ul>{pagesLinks}</ul>
    </nav>
  );
};

export default Navigation;
