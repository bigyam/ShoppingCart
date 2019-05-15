import React, { Component } from 'react';
import { Link } from "react-router-dom";

class CartPage extends Component {
	constructor () {
		super();

	}

	render () {
		return (
			<div>
				the Carts page <br/>
				<Link to="/purchase" className="next">Next</Link>

			</div>
		)
	}


}

export default CartPage;