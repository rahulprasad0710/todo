import React from "react";
import BOOK_LIST from "../data/ProductList";
import ProductItem from "./ProductItem";

const ProductList = () => {
    console.log(BOOK_LIST, "BOOK_LIST");
    return (
        <div className='row'>
            {BOOK_LIST.map((item) => {
                return (
                    <ProductItem
                        showAddToWishlistBtn={false}
                        key={item.id}
                        productItem={item}
                    />
                );
            })}
        </div>
    );
};

export default ProductList;
