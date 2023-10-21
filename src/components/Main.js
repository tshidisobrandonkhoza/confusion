// *** *** (*,*) (***) ****
import { Component } from 'react';
import { Routes, Route } from 'react-router-dom';

//redux 
import { connect, useSelector } from 'react-redux';

//assets
import '../assets/css/MainComponent.css';

//import components
import Header from './Header';
import Footer from './Footer';

//
import Home from './Home';
import About from './About';
import Contact from './Contact';

//
import Menu from './MenuComponent';
import DishDetails from "./DishDetails";


class Main extends Component {
 
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);

    }



    render() {
        return (

            <div className='Main'>
                <Header />

                <Routes>
                    <Route path="/" element={
                        <Home
                            dishes={this.props.dishes.filter(dish => dish.featured === true)}
                            promotion={this.props.promotions.filter(promo => promo.featured === true)}
                            leader={this.props.leaders.filter(leader => leader.featured === true)}
                        />
                    } >
                    </Route>
                    <Route path="/about" element={
                        <About
                            leaders={this.props.leaders}
                        />
                    } >
                    </Route>
                    <Route path='/menu' exact Component={
                        () => <Menu dishes={this.props.dishes}></Menu>
                    }>
                    </Route>
                    <Route path="/menu/:dishId" element={
                        <DishDetails
                            dish={this.props.dishes}
                            comments={this.props.comments}
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

//connect component to reduce store

const mapStateToProps = state => {
    return {
        dishes: state.dishes.dish,
        comments: state.comments.comment,
        promotions: state.promotions.promotion,
        leaders: state.leaders.leader
    }
}

export default connect(mapStateToProps)(Main);
