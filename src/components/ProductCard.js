import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import { addToCart } from '../actions/cartActions';
import { removeFromCart } from '../actions/cartActions';
import { connect } from 'react-redux';

class ProductCard extends Component {
	constructor (props) {
		super(props);
	}

	render () {
		return (
			<div>
				<Card>
       				<CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
        			<CardBody>
          				<CardTitle>{this.props.product.name}</CardTitle>
          				<CardSubtitle>{this.props.product.price}</CardSubtitle>
          				<CardText>{this.props.product.description}</CardText>
          				<Button onClick={() => this.props.dispatch(addToCart(this.props.product))}>Add to cart</Button>
          				<Button onClick={() => this.props.dispatch(removeFromCart(this.props.product))}>Remove</Button>
        			</CardBody>
      			</Card>
			</div>
		)
	}


}

const mapStateToProps = state => ({
  	cart: state.cart
});

export default connect(mapStateToProps)(ProductCard);