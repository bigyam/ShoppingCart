import React, { Component } from 'react';
import { Container, Row, Col, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import { Link } from "react-router-dom";
import { removeFromCart } from '../actions/cartActions';
import { connect } from 'react-redux';

class CartPage extends Component {
	render () {
		return (
			<Container>
			<div>
				Your Shopping Cart <br/>
			</div>
			<Row>
				<Col>
					{this.props.cart.map(cartList => {
			return (
				<Card key={cartList.id}>
       				<CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
        			<CardBody>
          				<CardTitle>Product: {cartList.name}</CardTitle>
          				<CardSubtitle>Price: {cartList.price}</CardSubtitle>
          				<CardText>Quantity: {cartList.quantity}</CardText>
          				<Button onClick={() => this.props.dispatch(removeFromCart(cartList))}>Remove</Button>
        			</CardBody>
      			</Card>
			)
		})}
				</Col>
			</Row>

			<Link to="/purchase" className="next">Purchase</Link>
			</Container>
		)
	}
}

const mapStateToProps = state => ({
  	cart: state.cart
});

export default connect(mapStateToProps)(CartPage);