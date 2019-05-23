import React, { Component } from 'react';
import {
	Container,
	Navbar,
	NavbarBrand,
	Button
} from 'reactstrap';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';

class NavigationBar extends Component {
	render () {
		return (
			<Container fluid className="centered">
				<Navbar dark color="dark">
					<NavbarBrand href="/">Welcome to Shopping Cart</NavbarBrand>
					<Link to="/cart" className="next"><Button color="success" size="sm">Cart ({this.props.cart.length})</Button></Link>
				</Navbar>

			</Container>
		)
	}
}

const mapStateToProps = state => ({
  	cart: state.cart
});

export default connect(mapStateToProps)(NavigationBar);