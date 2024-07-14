import React, {createContext, useState} from "react";

export const ShopContext = createContext(null);

export const ShopContextProvider = ({productName, price, productImage}) => {
    const [cartItems, setcartItems] = useState({});
    return(
        <div>
            ShopContext
        </div>
    )
};
