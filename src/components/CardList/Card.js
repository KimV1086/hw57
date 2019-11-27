import React from 'react';

const Card = props => {
    return (
        <div className="Card">
            <span className="Card-title">{props.title}</span>
            <span>{props.category}</span>
            <div>
                <span>{props.price} KGS</span>
                <button onClick={props.remove}>x</button>
            </div>
        </div>
    );
};

export default Card;
