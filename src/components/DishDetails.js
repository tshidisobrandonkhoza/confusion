import React, { useState } from "react";

import { Link, useParams } from "react-router-dom";
//import assets
import '../assets/css/DishDetails.css'
import {
    Button,
    Card, CardBody, CardTitle, CardText, CardImg,
    BreadcrumbItem,
    Breadcrumb,
    Modal,
    ModalHeader,
    ModalBody
} from "reactstrap";
import { Form, Field } from 'react-final-form';

const required = val => (val ? undefined : 'Required');
// const isNumber = val => (isNaN(val) ? 'Must be a number' : undefined);
const minLength = len => val => (val) && val.length >= len ? undefined : `Should be greater than ${len}`;
const maxLength = len => val => (val) && val.length <= len ? undefined : `Should be less than ${len}`;

const validEmail = val => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);
const composeValidators = (...validators) => value => validators.reduce((error, validator) => error || validator(value), undefined);



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
    const [ismodalopen, setModalopen] = useState(false);

    const { dishId } = useParams();

    const dSelect = props.dish.filter((plate) =>
        plate.id === parseInt(dishId)
    )[0];

    const cResults = props.comments.filter((plate) =>
        plate.dishId === parseInt(dishId)
    );


    const toggleModal = () => (setModalopen(!ismodalopen));

    const onSub = (values) => alert(JSON.stringify(values));
    // const isModalOpen = () => (<></>);
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
                    <div className="submitComment" onClick={toggleModal}> Submit Comment</div>

                    <Modal isOpen={ismodalopen} toggle={toggleModal}>
                        <ModalHeader toggle={toggleModal}>
                            Comment
                        </ModalHeader>
                        <ModalBody>

                            <Form onSubmit={onSub}  >
                                {props => (
                                    <form onSubmit={props.handleSubmit}>


                                        <div>
                                            <label htmlFor="rating">Rating</label>

                                            <Field
                                                name="rating"
                                                component="select"
                                            >

                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>

                                            </Field>
                                        </div>


                                        <div>
                                            <Field name="telnum" validate={composeValidators(minLength(2), maxLength(15))} >
                                                {
                                                    ({ input, meta }) => (
                                                        <div>
                                                            <label htmlFor="name">Your Name</label>
                                                            <input {...input} type="text" placeholder="Your Name" />
                                                            {meta.error && meta.touched && <span>{meta.error}</span>}
                                                        </div>)
                                                }
                                            </Field>
                                        </div>

                                        <div>
                                            <Field name="comment" component="textarea" validate={composeValidators(minLength(2), maxLength(25))} >
                                                {
                                                    ({ input, meta }) => (
                                                        <div>
                                                            <label htmlFor="comment">Comment</label>
                                                            {/* <input {...input} type="textarea"  /> */}
                                                            <textarea {...input} ></textarea>
                                                            {meta.error && meta.touched && <span>{meta.error}</span>}
                                                        </div>)
                                                }
                                            </Field>
                                        </div>

                                        <button type="submit"   >
                                            Submit
                                        </button>
                                    </form>
                                )}
                            </Form>
                        </ModalBody>
                    </Modal>
                </div>

            </div>
        </div>

    );

}


export default DishDetails