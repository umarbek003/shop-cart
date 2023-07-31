import React from "react";
import { BiHeart } from "react-icons/bi";
import "./Card.scss";

const Cart = () => {
  return (
    <div className="cart">
      <div className="img">
        <img
          width={200}
          src="/public/assets/image-removebg-preview.png"
          alt=""
        />
        <div className="heart">
          <BiHeart />
        </div>
      </div>
      <div className="card-title">
        <div className="mt-10" >
          <h4>Wireless Earpuds, IPX8</h4>
          <p>Organic Cotton, fairtrade certified</p>
          <div class="rating-mini">
            <span class="active"></span>
            <span class="active"></span>
            <span class="active"></span>
            <span className="active" ></span>
            <span className="active"></span>
            <p>121</p>
          </div>
          <div className="button">
            <button>Add to Cart</button>
          </div>
        </div>
        <span className="price" >$ <b>89</b>.00</span>
      </div>
    </div>
  );
};

export default Cart;
