import React, { useState } from "react";

const TwoWay = () => {
    const [title, setTitle] = useState("");

    const handleShyam = () => {
        setTitle("Shaym");
    };

    return (
        <div>
            <input
                onChange={(e) => {
                    setTitle(e.target.value);
                }}
                value={title}
                type='text'
                className='form-control'
            />
            <h1>Value:{title}</h1>
            <button onClick={handleShyam} className='btn btn-info'>
                Rename
            </button>
        </div>
    );
};

export default TwoWay;
