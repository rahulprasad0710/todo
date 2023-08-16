import React from "react";

const Navbar = (props) => {
    const { nameProps } = props;
    console.log(nameProps);
    return <div>Navbar Name :{nameProps}</div>;
};

export default Navbar;
