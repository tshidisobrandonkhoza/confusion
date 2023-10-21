import React from "react";
import { Link, useParams } from "react-router-dom";
//import assets
import '../assets/css/DishDetails.css'
import {
    Card, CardBody, CardTitle, CardText, CardImg,
    BreadcrumbItem,
    Breadcrumb
} from "reactstrap";

const dishSelect = (dSelect) => {

    return (
        <Card className="col-5 md-5 " >
            <CardImg src={dSelect.image} className="menu--card-img"></CardImg>
            <CardBody>
                <CardTitle>{dSelect.name}</CardTitle>
                <CardText>{dSelect.description}</CardText>
            </CardBody>
        </Card>
    );
}

function CommentsResults({ theComments }) {
    const $comm = theComments.map((comm) => {

        const cdate = comm.date;
        //         // let newDate = new Intl.DateTimeFormat('en-US',{year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse({cdate})));
        return (
            <React.Fragment>
                <h5>{comm.author}</h5>
                <p>{comm.comment}</p>
                {/* international standard date format */}
                <p>Ratings: {comm.rating} / Date: {cdate}</p>
                <hr />
            </React.Fragment>
        );
    })

    return (
        <>
            {$comm}
        </>
    );
}

const DishDetails = (props) => {
    const { dishId } = useParams();

    const dSelect = props.dish.filter((plate) =>
        plate.id === parseInt(dishId)
    )[0];

    const cResults = props.comments.filter((plate) =>
        plate.dishId === parseInt(dishId)
    );
    return (

        <div className="container">
            <h1>Hello</h1>
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem>
                        <Link to='/menu'>Menu</Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem active >Menu
                    </BreadcrumbItem>
                </Breadcrumb>
                {/* <div>
{dSelect}
</div> */}
                {
                    dishSelect(dSelect)


                }
                <div className="container col-4 d-inline-block">
                    <h1>Comments</h1>
                    <hr />
                    <CommentsResults theComments={cResults}  ></CommentsResults>

                </div>

            </div>
        </div>

    );

}


export default DishDetails