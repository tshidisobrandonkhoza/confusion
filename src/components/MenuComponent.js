import React from "react";
//import assets
import '../assets/css/MenuComponent.css';
import { Card, CardImg, CardImgOverlay, CardBody, CardTitle, CardText } from "reactstrap";


function RenderMenu({ dish, onClick }) {
    return (

        <Card onClick={() => onClick(dish.id)}>
            <CardImg src={dish.image} className="menu--card-img"></CardImg>
            <CardImgOverlay src={dish.image} >
                <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>
        </Card>

    );
}
const Menu = (props) => {
    const menu = props.dishes.map((dish) => {
        // start default bootsrap style initializing
        return (
            <div key={dish.id} className="col-12 col-md-5 m-1">
                <RenderMenu onClick={props.onClick} dish={dish}></RenderMenu>
            </div>
        )
    });

    return (
        <div className="container" >
            <div className="row">
                {menu}
            </div>
        </div>
    );
}

export default Menu;