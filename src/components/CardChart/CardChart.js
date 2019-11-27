import React from 'react';

const CardChart = props => {
    return (
        <div className="cost-chart">
            <div className="chart-line">
                {props.charts.map(chart => (
                    <div
                        key={chart.name}
                        style={{
                            float: 'left',
                            height: 'inherit',
                            background: chart.color,
                            width: chart.value + '%'
                        }}
                    />
                ))}
            </div>
            <ul>
                {props.categories.map(category => (
                    <li
                        key={category.id}
                        style={{color: category.color}}
                    ><strong>{category.name}</strong></li>
                ))}
            </ul>
        </div>
    );
};

export default CardChart;
