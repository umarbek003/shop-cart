import React from "react";
import {BsChevronDown} from 'react-icons/bs'
import { Link, } from "react-router-dom";


const NavLink = () => {
  return (
    <ul>
      <li className="d-flex align-center">Categories <BsChevronDown/> </li>
      <li><Link>Deals</Link></li>
      <li><Link>Wat's new</Link></li>
      <li><Link>Delivery</Link></li>
    </ul>
  );
};

export default NavLink;
