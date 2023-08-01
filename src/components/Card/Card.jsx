import React, { useState } from "react";
import { BiHeart } from "react-icons/bi";
import "./Card.scss";

const Card = ({ product, onAddToCart }) => {

  const onAddPlus = () =>{
    onAddToCart(product)
  }

  return (
    <div className="cart">
      <div className="img">
        <img  src={product.image} alt="" />
        <div className="heart">
          <BiHeart />
        </div>
      </div>
      <div className="card-title">
        <div className="mt-10">
          <h4>{product.title}</h4>
          <p>{product.description}</p>
          <div className="rating-mini">
            <span className="active"></span>
            <span className="active"></span>
            <span className="active"></span>
            <span className="active"></span>
            <span className="active"></span>
          </div>
          <div className="button">
            <button onClick={onAddPlus} >Add to Cart</button>
          </div>
        </div>
        <span className="price">
          $ <b>{product.price}</b>.00
        </span>
      </div>
    </div>
  );
};

export default Card;
