import React from 'react';
import {
    Breadcrumb, BreadcrumbItem, Card, CardBody,
    CardHeader, CardImg, CardSubtitle,
} from 'reactstrap';
import { Link } from 'react-router-dom';

import '../assets/css/DishDetails.css'

export function RenderLeader({ leaders }) {

    return (
        <div className='col-sm-12 col-md-6 col-lg-3     inline-block  '>
            <Card className='col-12'  >
                <CardImg src={leaders.image} className="col-2 menu--card-img"></CardImg>
                <CardBody className="">
                    <CardHeader>{leaders.name}</CardHeader>
                    <CardSubtitle>{leaders.designation}</CardSubtitle>
                </CardBody>
            </Card>
        </div>
    )
}

function About(props) {

    const leaders = props.leaders.map((leader) => {
        return (
            <RenderLeader key={leader.id} leaders={leader} />
        );
    });


    return (
        <div className="container">
            {/* Navigation */}
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>About Us</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>About Us</h3>
                    <hr />
                </div>
            </div>
            {/* Content */}
            <div className="row row-content">
                <div className="col-12 col-md-6">
                    <h2 className='mt-2 mb-4'>Our History</h2>
                    <p>Started in 2010, Ristorante con Fusion quickly established itself as a culinary icon par excellence in Hong Kong. With its unique brand of world fusion cuisine that can be found nowhere else, it enjoys patronage from the A-list clientele in Hong Kong.  Featuring four of the best three-star Michelin chefs in the world, you never know what will arrive on your plate the next time you visit us.</p>
                    <p>The restaurant traces its humble beginnings to <em>The Frying Pan</em>, a successful chain started by our CEO, Mr. Peter Pan, that featured for the first time the world's best cuisines in a pan.</p>
                </div>
                <div className="col-12 col-md-5  myCard">
                    <Card>
                        <CardHeader className=" text-black ">Facts At a Glance</CardHeader>
                        <CardBody>
                            <dl className="row p-1">
                                <dt className="col-6">Started</dt>
                                <dd className="col-6">3 Feb. 2013</dd>
                                <dt className="col-6">Major Stake Holder</dt>
                                <dd className="col-6">HK Fine Foods Inc.</dd>
                                <dt className="col-6">Last Year's Turnover</dt>
                                <dd className="col-6">$1,250,375</dd>
                                <dt className="col-6">Employees</dt>
                                <dd className="col-6">40</dd>
                            </dl>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12">
                    <Card>
                        <CardBody className="bg-faded">
                            <blockquote className="blockquote">
                                <p className="mb-4">You better cut the pizza in four pieces because
                                    I'm not hungry enough to eat six.</p>
                                <footer className="blockquote-footer">Yogi Berra,
                                    <cite title="Source Title">The Wit and Wisdom of Yogi Berra,
                                        P. Pepe, Diversion Books, 2014</cite>
                                </footer>
                            </blockquote>
                        </CardBody>
                    </Card>
                </div>
            </div>
            {/* Learders */}
            <div className="row row-content">
                <div className="col-12 m-3">
                    <h2>Corporate Leadership</h2>
                </div>

                {leaders}

            </div>
        </div>
    );
}

export default About;   