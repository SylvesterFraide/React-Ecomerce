import React from "react";

const Product = ({productName, price, productImage}) => {
  
    return (
        <div className="product">
            
           <img src={productImage} /> 
           <div className="description">
               <p>{productName}</p>
               <p> Ksh.{price}</p>
           </div>
           <button className="addToCartbtn">Add To Cart</button>
        </div>
    )
};

export default Product;
 