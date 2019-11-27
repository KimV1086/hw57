import React from 'react';
import Card from "./Card";

const CardList = props => {
    return (
        <div className="cost-list">
            <div className="cost-list-top">
                {props.list.map((cost) => (
                    <Card
                        key={cost.id}
                        title={cost.title}
                        price={cost.price}
                        category={cost.category}
                        remove={() => props.remove(cost.id)}
                    />
                ))}
            </div>
            <div className="cost-list-bottom">
                <span>Total spent: <strong>{props.totalSpent} KGS</strong></span>
            </div>
        </div>
    );
};

export default CardList;
