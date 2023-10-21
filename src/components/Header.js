import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import {
    Navbar, NavItem, NavbarBrand, NavbarToggler,
    Collapse, Nav, Modal, ModalHeader, ModalBody, Button
} from 'reactstrap';
//assests
import '../assets/css/Header.css'
// import brandonLogo from '../assets/images/brandonkhoza.png';


class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isNavOpen: false,
            isModalOpen: false
        };

        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }
    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }
    handleLogin(event) {

        this.toggleModal();
        alert("username: " + this.username.value + " remember : " + this.remember.checked);
        event.preventDefault();

    }


    render() {
        return (
            <React.Fragment>
                <Navbar className='nav-bar' >
                    <NavbarBrand className='nav-logo'>
                        Pixa Resturant
                    </NavbarBrand>
                    <NavbarToggler className='nav-toggler' onClick={this.toggleNav} />
                    {/* start navigation */}
                    <Collapse isOpen={this.state.isNavOpen} navbar className='nav-togg'>
                        <Nav navbar  className='nav-togg-list'>
                            <NavItem>
                                <NavLink className="nav-link" to='/' onClick={this.toggleNav}>
                                    <span className="fa fa-home fa-lg"></span> HOME
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/about' onClick={this.toggleNav}>
                                    <span className="fa fa-info fa-lg"></span> ABOUT US
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/menu' onClick={this.toggleNav}>
                                    <span className="fa fa-list fa-lg"></span> MENU
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/contact' onClick={this.toggleNav}>
                                    <span className="fa fa-address-card fa-lg"></span> CONTACT US
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <Button className="fa fa-sign-in fa-lg" onClick={this.toggleModal}>Login</Button>
                            </NavItem>
                        </Nav>
                    </Collapse>
                    {/* end navigation */}
                    {/* start login */}
                    <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                        <ModalHeader toggle={this.toggleModal}>
                            Login
                        </ModalHeader>
                        <ModalBody>
                            <form onSubmit={this.handleLogin}>
                                <label htmlFor='username'>Username
                                    <input type='text' id='username' name='username'
                                        innerRef={(input) => this.username = input} />
                                </label>
                                <label htmlFor='password'>Password
                                    <input type='text' id='password' name='password'
                                        innerRef={(input) => this.password = input} />
                                </label>
                                <label htmlFor='remember'>Remember Me
                                    <input type='checkbox' id='remember' name='remember'
                                        innerRef={(input) => this.remember = input} />
                                </label>
                                <Button type="submit" value="submit" color="primary">Login</Button>

                            </form>
                        </ModalBody>
                    </Modal>
                    {/* end login */}
                </Navbar>


            </React.Fragment>
        );
    }
}

export default Header;