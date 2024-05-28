import NavigationBar from "@components/navigationBar/NavigationBar";

import header from "@components/layout/header/header.scss";
import bag from "@assets/header/bag.svg";

const Header = () => {
  return (
    <header className="header">
      <div className="header__block">
        <h1 className="header__title">
          Baraholka<span>..</span>
        </h1>
        <NavigationBar />
        <div className="header__bag">
          <img src={bag} alt="Корзина" />
        </div>
      </div>
    </header>
  );
};

export default Header;
