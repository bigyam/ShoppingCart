import React from "react";
import {
	Container,
	Navbar,
	NavbarBrand,
	Button
} from 'reactstrap';
import { Link } from "react-router-dom";

export default function NavigationBar() {
	return (
		<Container fluid className="centered">
			<Navbar dark color="dark">
				<NavbarBrand href="/">Welcome to Shopping Cart</NavbarBrand>
				<Link to="/cart" className="next"><Button color="success" size="sm">Cart</Button></Link>
			</Navbar>

		</Container>
	);
}