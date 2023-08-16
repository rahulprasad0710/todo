import React from "react";

const WishListBtn = (productId) => {
    const fnCallToBE = () => {
        console.log(productId);
    };
    return <div onClick={fnCallToBE}>WishListBtn</div>;
};

export default WishListBtn;
