import React from "react";

const ProductItem = (props) => {
    const { productItem, showAddToWishlistBtn } = props;
    const { id, name, images, sales_price } = productItem;

    return (
        <div key={id} className='col-4 m-3'>
            <div>
                <h3>{name}</h3>
                <img className='img-fluid' src={images[0].url} alt={name} />
                <h4>{sales_price}</h4>
                {showAddToWishlistBtn && (
                    <button className='btn btn-success'>Add To Wishlist</button>
                )}
            </div>
        </div>
    );
};

export default ProductItem;
