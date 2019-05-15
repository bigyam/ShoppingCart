import React, { Component } from 'react';
import ProductCard from './ProductCard'
import {
	Container,
	Row,
	Col
} from 'reactstrap';

class ProductsPage extends Component {
	constructor () {
		super();
		this.state = {
			product: [
				{
					name: "Product X",
					company: "Company X",
					description: "Cool Product X"
				},
				{
					name: "Product Y",
					company: "Company Y",
					description: "Cool Product Y"
				},
				{
					name: "Product Z",
					company: "Company Z",
					description: "Cool Product Z"
				}
			]
		}

	}

	render () {
		let productCards = this.state.product.map(product => {
			return (
				<Col sm="4">
					<ProductCard product={product} />
				</Col>
			)
		})
		return (
			<Container fluid>
				<Row>
					{productCards}
				</Row>
			</Container>			
		)
	}


}

export default ProductsPage;