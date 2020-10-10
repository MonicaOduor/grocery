import React from 'react'
import {Navbar, Nav} from 'react-bootstrap'
import Logo from './Logo'
import { LinkContainer } from 'react-router-bootstrap'



export default function Navigation() {
    return (
        <div className='container-fluid'>
            <Navbar bg="light" expand="lg" className='nav'>
                <Navbar.Toggle aria-controls="basic-navbar-nav"style={{border:'none'}}>
                    <img src="https://img.icons8.com/material-rounded/20/000000/menu.png"alt='menu-icon' className='menu-icon'/>
                </Navbar.Toggle>

                <Logo/>
                <button className='btn btn-sm'>
                    <img src="https://img.icons8.com/plasticine/30/000000/shopping-cart-loaded.png" className='nav-cart' alt='cart-icon'/>
                </button>

                <Navbar.Collapse id="basic-navbar-nav" className="mt-3 p-2 text-dark nav-collapse">
                    <Nav className="mr-auto">
                        <LinkContainer to='/' className='navlink pb-1'>
                                <Nav.Link >
                                    HOME
                                </Nav.Link>
                        </LinkContainer>
                        <LinkContainer to='/about'>
                            <Nav.Link className='navlink pb-1'>
                                    ABOUT US
                            </Nav.Link>
                        </LinkContainer>
                        <LinkContainer to='/shop'>
                            <Nav.Link className='navlink pb-1'>
                                    SHOP
                            </Nav.Link>
                        </LinkContainer>
                        <LinkContainer to='/cart'>
                            <Nav.Link className='navlink pb-1'>
                                    CART
                            </Nav.Link>
                        </LinkContainer>
                        <LinkContainer to='/contact'>
                            <Nav.Link className='navlink pb-1'>
                                    CONTACT
                            </Nav.Link>
                        </LinkContainer>
                    </Nav>

                    <div className='cart '>
                        <button className='btn btn-sm'>
                            <img src="https://img.icons8.com/plasticine/30/000000/shopping-cart-loaded.png"  alt='cart-icon'/>

                        </button>
                        <button className='btn btn-sm'>
                            <img src="https://img.icons8.com/material-two-tone/24/000000/search.png" alt='search-icon' />
                        </button>
                        <button className='btn btn-sm'>
                            <img src="https://img.icons8.com/ios/24/000000/user.png" alt='user-icon'/>
                        </button>
                    </div>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}
