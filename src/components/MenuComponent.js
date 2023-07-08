import React, { Component } from "react";
import '../assets/css/MenuComponent.css';
import {
    Card,
    CardImg,
    CardImgOverlay,
    CardBody,
    CardTitle,
    CardText

} from "reactstrap";
class Menu extends Component {

    //define a constructo pass in props
    constructor(props) {
        //requirement - suppy props to super
        super(props);

        //set the states 
        this.state = {
            selectedDish: null
        };
    }
    //setup the state 
    onDishClicked(dish) {
        this.setState({
            selectedDish: dish
        });
    }
    //sleeping renderDish untill called after clicked
    renderDish(dish) {

        if (dish != null) {
            return(
            <Card  >
                <CardImg src={dish.image} className="menu--card-img"></CardImg>
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
            );
        } else {
            return (
                <h1>Null</h1>
            );
        }
    }

    render() {
        //Go thru states>>>dishes
        //pass in parameter by map(name,value,array)
        const menu = this.props.dishes.map((dish) => {
            // start default bootsrap style initializing

            return (
                <div key={dish.id} className="col-12 col-md-5 m-1">


                    <Card onClick={() => this.onDishClicked(dish)}>
                        <CardImg src={dish.image} className="menu--card-img"></CardImg>
                        {/* <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody> */}
                        <CardImgOverlay src={dish.image} >
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>


                </div>
            )
        });
        return (
            // start default bootsrap style initializing
            <div className="container" >
                <div className="row">

                    {/* end default bootsrap style initializing */}

                    {menu}

                </div>
                <div className="row">
                    {/* end default bootsrap style initializing */}

                    {this.renderDish(this.state.selectedDish)}
                </div>
            </div>
        );
    }
}

export default Menu;