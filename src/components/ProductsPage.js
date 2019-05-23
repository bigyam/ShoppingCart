import React, { Component } from 'react';
import ProductCard from './ProductCard'
import {
	Container,
	Row,
	Col
} from 'reactstrap';
import { fetchProducts } from '../actions/productActions';
import { connect } from 'react-redux';

class ProductsPage extends Component {
	
	componentDidMount () {
		this.props.dispatch(fetchProducts());
	}

	render () {
		const { error, loading, products } = this.props;

		if (error) {
			//return error stuff
		}

		if (loading) {
			//return loading stuff
		}
		let productCards = products.map(product => {
			return (
				<Col sm="4" key={product.id}>
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

const mapStateToProps = state => ({
	products: state.products.items,
 	loading: state.products.loading,
  	error: state.products.error,
});

export default connect(mapStateToProps)(ProductsPage);