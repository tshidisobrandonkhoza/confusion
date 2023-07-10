import { Component } from 'react';
//assets
import '../assets/css/MainComponent.css'

//import components
import Header from './Header';
import Home from './Home';
import Menu from './MenuComponent'
import { DISHES } from '../shared/dishes';
import DishDetails from "./DishDetails";
import { Switch, Route, Redirect } from 'react-router-dom';


class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
            selectedDish: null
        };
    }
    //setup the state 
    onDishClicked(dishId) {
        this.setState({
            selectedDish: dishId
        });
    }
    render() {
        return (
            <div className='Main'>
                <Header />
                <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishClicked(dishId)} />
                <DishDetails dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} ></DishDetails>
            </div>
        );
    }
}
export default Main;
