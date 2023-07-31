import { BsTelephone, BsChevronDown } from "react-icons/bs";
import { GoSearch } from "react-icons/go";
import { AiOutlineUser } from "react-icons/ai";
import {TbShoppingCartPlus} from 'react-icons/tb'
import List from "./NavLink/List";
import "./Header.scss";

const Header = () => {
  return (
    <header>
      <div className="shapka">
        <div className="container">
          <div className="block-shapka d-flex align-center justify-between">
            <div className="phone d-flex align-center">
              <BsTelephone />
              <span>+996709689232</span>
            </div>
            <div className="light-theme d-flex ">
              <span>Get 50% off on Selected items</span>
              <span className="light"></span>
              <span>Shop now</span>
            </div>
            <div className="block-language">
              <div className="language d-flex align-center">
                <span>Eng</span>
                <BsChevronDown />
              </div>
              <div className="location d-flex align-center">
                <span>Location</span>
                <BsChevronDown />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="block-header clear d-flex justify-between align-center">
              <div className="logo">LOGO</div>
              <nav>
                <List />
              </nav>
          <div className="search-block d-flex justify-between align-center">
            <div className="search-product">
              <input type="text" placeholder="Search product..." />
              <GoSearch className="search-icons" />
            </div>
            <div style={{
              gap: '20px'
            }} className="d-flex justify-between">
              <div className="user">
                <AiOutlineUser />
                <span>Account</span>
              </div>
              <div className="user">
                <TbShoppingCartPlus />
                <span>Cart</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
