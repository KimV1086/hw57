import React from 'react';

const ElementAdd = props => {
    return (
        <div className="cost-add-form">
            <input
                onChange={props.onInputTitle}
                value={props.currentTitle}
                type="text"
                placeholder="cost title"
            />
            <input
                onChange={props.onInputPrice}
                value={props.currentPrice}
                type="text"
                placeholder="cost price"
            />
            <select
                onChange={props.onSelectCategory}
                value={props.currentCategory}
            >
                <option value="">select category</option>
                {props.categories.map(category => (
                    <option key={category.id + ' '} value={category.name}>{category.name}</option>
                ))}
            </select>
            <button onClick={props.addCard}>Add</button>
        </div>
    );
};

export default ElementAdd;
