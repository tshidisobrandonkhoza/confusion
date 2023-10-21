import { Link } from "react-router-dom";
//import assets
import '../assets/css/MenuComponent.css';
import {
    Card, CardImg, CardImgOverlay, CardTitle,
    BreadcrumbItem,
    Breadcrumb
} from "reactstrap";

function RenderMenu({ dish  }) {
    return (

        <Card >
            <Link to={`/menu/${dish.id}`}>
                <CardImg src={dish.image} className="menu--card-img"></CardImg>
                <CardImgOverlay src={dish.image} >
                    <CardTitle>{dish.name}</CardTitle>
                </CardImgOverlay>
            </Link>

        </Card>

    );
}
const Menu = (props) => {
    const menu = props.dishes.map((dish) => {
        // start default bootsrap style initializing
        return (
            <div  className="col-12 col-md-5 m-1">
                <RenderMenu key={dish.id}  dish={dish}></RenderMenu>
            </div>
        )
    });

    return (
        <div className="container" >
            <div className="row">
        
                <Breadcrumb>
                    <BreadcrumbItem>
                        <Link to='/'>Home</Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem  active>Menu 
                    </BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>Menu</h3>
                </div>
            </div>
            <div className="row">
                {menu}
            </div>
        </div>
    );
}

export default Menu;