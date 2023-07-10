import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
//assests
import '../assets/css/Header.css'
import brandonLogo from '../assets/images/brandonkhoza.png';


class Header extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar dark color='dark'>
                    <div className='container'>
                        <NavbarBrand>
                            <img src={brandonLogo} alt='' className='navbar--brand'></img>
                        </NavbarBrand>
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