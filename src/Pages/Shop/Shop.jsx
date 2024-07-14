import React from "react";
import { PRODUCTS } from "../../Products";
import Product from "./Product";
import './Shop.css';

const Shop = () => {
   return (
      <div className="shop">
         <div className="shopTitle">
            <h1>SmartTech Shop</h1>
         </div>
         <div className="products">

            {PRODUCTS.map((product) => (
               <div key={product.id}>

                  <Product 
                  productName={product.productName}
                   price={product.price} 
                   productImage={product.productImage} />
               </div>
            ))}
         </div>
      </div>
   )
};
export default Shop;