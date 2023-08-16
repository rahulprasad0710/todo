import React from "react";

const CompA = (props) => {
    const { count } = props;
    return (
        <div className='compA'>
            <h3 className='mb-2'>CompA</h3>
            <h4>Count: {count}</h4>
        </div>
    );
};

export default CompA;
