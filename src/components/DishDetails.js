import React from "react";
//import assets
import '../assets/css/DishDetails.css'
import { Card, CardBody, CardTitle, CardText, CardImg} from "reactstrap";

const dishSelect = (dish) => {
    return (
        <Card className="col-5 md-5 " >
            <CardImg src={dish.image} className="menu--card-img"></CardImg>
            <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
            </CardBody>
        </Card>
    );
}

function CommentsResults({ theComments }) {
    const $comm = theComments.map((comm) => {
        const cdate = comm.date;
        // let newDate = new Intl.DateTimeFormat('en-US',{year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse({cdate})));
        return (
            <React.Fragment>
                <h5>{comm.author}</h5>
                <p>{comm.comment}</p>
                {/* international standard date format */}
                <p>Ratings: {comm.rating} / Date: {cdate}</p>
                <hr/>
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

    if (props.dish) {
        //  const theC = props.dish.comments;
        return (

            <div className="container">

                <div className="row">
                 {/* card style */}
                 {dishSelect(props.dish)}
                    <div className="container col-4 d-inline-block">
                   <h1>Comments</h1>
                   <hr/>
                    <CommentsResults theComments={props.dish.comments}></CommentsResults>
    
                    </div> 
                   
                </div>
            </div>

        );
    }

}


export default DishDetails