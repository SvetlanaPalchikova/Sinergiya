import React from 'react';

const Welcome = (props) => {
    return (
        <div>
            <h1>Привет, {props.name}</h1>
        </div>
    );
};

export default Welcome;