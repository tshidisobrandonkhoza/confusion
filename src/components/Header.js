import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, NavItem, NavbarBrand, NavbarToggler, Collapse, Nav } from 'reactstrap';
//assests
import '../assets/css/Header.css'
import brandonLogo from '../assets/images/brandonkhoza.png';


class Header extends Component {
    constructor(props) {
        super(props);

        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
            isNavOpen: false
        };
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }


    render() {
        return (
            <React.Fragment>
                <Navbar dark color='dark'>
                    <div className='containser'>
                        <NavbarBrand>
                            <img src={brandonLogo} alt='' className='navbar--brand'></img>
                        </NavbarBrand>
                        <NavbarToggler onClick={this.toggleNav} />

                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to='/home'>
                                        <span className="fa fa-home fa-lg"></span> Home
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to='/about'>
                                        <span className="fa fa-info fa-lg"></span> About Us
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to='/menu'>
                                        <span className="fa fa-list fa-lg"></span> Menu
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to='/contact'>
                                        <span className="fa fa-address-card fa-lg"></span> Contact Us
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>


                </Navbar>
                <div className='hero--section'>
                    <div className='container'>
                        <div className='row row--header'>
                            <div className='col-12 col-sm-6'>
                                <h1>ALL EATS OUT</h1>
                                <p>Worlds best cuisines, we are here to offer you the best meals served with the best code in town,
                                    Smiles and joys for your stomach and brain
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </React.Fragment>
        );
    }
}

export default Header;