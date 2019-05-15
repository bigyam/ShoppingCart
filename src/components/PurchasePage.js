import React, { Component } from 'react';
import { Link } from "react-router-dom";

class PurchasePage extends Component {
	constructor () {
		super();

	}

	render () {
		return (
			<div>
				the purchase page <br />
				<Link to="/summary" className="next">Next</Link>
			</div>
		)
	}


}

export default PurchasePage;