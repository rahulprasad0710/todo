import React from "react";

const CompB = (props) => {
    const { setValue, count, name } = props;

    const handePlus = () => {
        setValue(count + 1);
    };
    const handeMinus = () => {
        setValue(count - 1);
    };

    return (
        <div className='compB'>
            <h1>{name}</h1>
            <h3 className='mb-2'>CompB</h3>
            <div>
                <button onClick={handePlus} className='btn btn-sm btn-info'>
                    +
                </button>
                <button onClick={handeMinus} className='btn btn-sm btn-info'>
                    -
                </button>
            </div>
        </div>
    );
};

export default CompB;
