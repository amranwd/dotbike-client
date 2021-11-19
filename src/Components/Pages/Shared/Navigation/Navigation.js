import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../../Hooks/useAuth';
import logo from '../../../../images/logo.png';


const Navigation = () => {
    const { user, logout } = useAuth();
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/home">
                        <img className="logo" src={logo} alt="dotBike" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
                        <Nav className="">
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="/allproducts">All Products</Nav.Link>
                            <Nav.Link as={Link} to="/cart">View Cart</Nav.Link>
                            {!user.email && <Nav.Link as={Link} to="/registration">Registration</Nav.Link>}
                            {user.email && <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>}

                            {user.email ?
                                <button onClick={logout} style={{ border: 'none', background: 'none', color: 'rgba(255,255,255,.55)' }} className="mx-2">Log out</button> :
                                <Nav.Link as={Link} to="/login">Login</Nav.Link>

                            }
                        </Nav>
                        {user.email && <Navbar.Text>
                            Signed in as: <span style={{ color: 'white' }}>{user.displayName}</span>
                        </Navbar.Text>}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Navigation;