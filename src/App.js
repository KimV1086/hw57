import React, {Component} from 'react';
import ElementAdd from "./components/ElementAdd/ElementAdd";
import CardList from "./components/CardList/CardList";
import CardChart from "./components/CardChart/CardChart";


const CATEGORIES = [
    {id: 1, name: 'Entertainment', color: 'brown'},
    {id: 2, name: 'Car', color: 'darkcyan'},
    {id: 3, name: 'Food', color: 'orange'}
];

class App extends Component {

    state = {
        CardTitle: '',
        CardPrice: '',
        CardCategory: '',
        CardList: [],
        sum: 0,
        chartSectors: []
    };
    inputCardTitle = event => {
        this.setState({CardTitle: event.target.value});
    };

    inputCardPrice = event => {
        const CardPriceStr = event.target.value;
        const CardPriceNum = +CardPriceStr;

        if (CardPriceNum) {
            this.setState({CardPrice: CardPriceNum});
        } else {
            this.setState({CardPrice: ''})
        }

    };

    selectCardCategory = event => {
        this.setState({CardCategory: event.target.value});
    };

    addCard = () => {
        if (this.state.CardTitle && this.state.CardPrice && this.state.CardCategory) {
            const date = new Date();
            const CardList = [...this.state.CardList];
            const oldSum = this.state.sum;
            const sum = oldSum + this.state.CardPrice;
            const newCard = {
                id: date.toISOString(),
                title: this.state.CardTitle,
                price: this.state.CardPrice,
                category: this.state.CardCategory
            };

            CardList.push(newCard);

            this.setState({
                CardList,
                CardTitle: '',
                CardPrice: '',
                CardCategory: '',
                sum
            });

            this.calcChartSectors(CardList, sum);
        } else {
            alert('All fields required!');
        }
    };

    removeCard = id => {
        const CardList = [...this.state.CardList];
        const oldSum = this.state.sum;
        const CardIndex = CardList.findIndex(Card => Card.id === id);
        const CardPrice = CardList[CardIndex].price;
        const sum = oldSum - CardPrice;

        CardList.splice(CardIndex, 1);

        this.setState({
            CardList,
            sum
        });

        this.calcChartSectors(CardList, sum);
    };

    calcChartSectors = (CardList, sum) => {
        const chartPercents = CardList.reduce((acc, Card) => {
            if (Card.category in acc) {
                acc[Card.category] += (Card.price * 100 / sum);
            } else {
                acc[Card.category] = (Card.price * 100 / sum);
            }

            return acc;
        }, {});

        const chartSectors = Object.keys(chartPercents).map(chart => {
            return {
                name: chart,
                value: chartPercents[chart],
                color: CATEGORIES.find(category => category.name === chart).color,
            }

        });

        this.setState({chartSectors});
    };

    render() {
        return (
            <div className="container">
                <ElementAdd
                    currentTitle={this.state.CardTitle}
                    currentPrice={this.state.CardPrice}
                    currentCategory={this.state.CardCategory}
                    onInputTitle={(event) => this.inputCardTitle(event)}
                    onInputPrice={(event) => this.inputCardPrice(event)}
                    onSelectCategory={(event) => this.selectCardCategory(event)}
                    categories={CATEGORIES}
                    addCard={this.addCard}
                />
                <CardList
                    list={this.state.CardList}
                    remove={this.removeCard}
                    totalSpent={this.state.sum}
                />
                <CardChart
                    categories={CATEGORIES}
                    charts={this.state.chartSectors}
                />
            </div>
        )
    }
}

export default App;
