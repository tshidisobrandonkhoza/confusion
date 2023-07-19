// *** *** (*,*) (***) ****
import { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
//assets
import '../assets/css/MainComponent.css'

//import components
import Header from './Header';
import Footer from './Footer';

//
import Home from './Home';
import Contact from './Contact'
import About from './About'

//
import Menu from './MenuComponent'
import DishDetails from "./DishDetails";

//dishes
import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { LEADERS } from '../shared/leaders';
import { PROMOTIONS } from '../shared/promotions';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
            comments: COMMENTS,
            promotions: PROMOTIONS,
            leaders: LEADERS
        };
    }

    render() {

        // const DishWithId = () => {
        //     return ( 
        //   <Footer /> 




        //     )
        // }


        return (

            <div className='Main'>
                <Header />
                <Routes>
                    <Route path="/home" element={
                        <Home
                            dishes={this.state.dishes.filter(dish => dish.featured === true)}
                            promotion={this.state.promotions.filter(promo => promo.featured === true)}
                            leader={this.state.leaders.filter(leader => leader.featured === true)}
                        />
                    } >
                    </Route>
                    <Route path="/about" element={
                        <About  leaders={this.state.leaders} />
                    } >
                    </Route>
                    <Route path='/menu' exact Component={
                        () => <Menu dishes={this.state.dishes}></Menu>
                    }>
                    </Route>
                    <Route path="/menu/:dishId" element={
                        <DishDetails
                            dish={this.state.dishes}
                            comments={this.state.comments}
                        />

                    } />


                    <Route path="/contact" element={
                        <Contact />
                    } >
                    </Route>
                </Routes>
                {/* <Outlet /> */}

                {/* <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishClicked(dishId)} /> */}
                {/* <DishDetails dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} ></DishDetails> */}
                <Footer />
            </div>
        );
    }
}
export default Main;
