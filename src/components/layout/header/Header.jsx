import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import NavigationBar from "@components/navigationBar/NavigationBar";

import header from "@components/layout/header/header.scss";
import BagClose from "@assets/bag/bag-close.svg";
import BagOpen from "@assets/bag/bag-open.svg";

const Header = () => {
  const [isOpenBag, setIsOpenBag] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/bag") {
      setIsOpenBag(true);
    } else {
      setIsOpenBag(false);
    }
  }, [location.pathname]);

  return (
    <header className="header">
      <div className="header__block">
        <h1 className="header__title">
          Baraholka<span>..</span>
        </h1>
        <NavigationBar />
        <div className="header__bag">
          <Link to="/bag">
            <img src={isOpenBag ? BagOpen : BagClose} alt="Корзина" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;