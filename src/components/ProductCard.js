import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

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
          				<CardSubtitle>{this.props.product.company}</CardSubtitle>
          				<CardText>{this.props.product.description}</CardText>
          				<Button>Add to cart</Button>
        			</CardBody>
      			</Card>
			</div>
		)
	}


}

export default ProductCard;