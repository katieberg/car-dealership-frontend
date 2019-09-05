import React from "react";
import "../../App.css";
import { Navbar, NavbarBrand } from 'reactstrap'

const Footer = () => {
    return (
        <Navbar color="dark" dark className="footer">
            <NavbarBrand href="/">
                &copy; 2019
            </NavbarBrand>
            <NavbarBrand className="adminLink" href="/login">
                Admin Access
            </NavbarBrand>
        </Navbar>
    );
};

export default Footer;
