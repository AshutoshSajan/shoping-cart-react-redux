import React from 'react';

class Header extends React.Component {

	render(){
		return (
			<header className="product-header">
				<p>{`${ this.props.filtered ? this.props.filtered.length : 0} Product(s) found.`}</p>
				<div className="sort-product">
					<p>Order by</p>
					<select className="select-input" onChange={(e) => this.props.sortProduct(e.target.value)}>
						<option value="Select" >Select</option>
						<option value="Lowest to highest" > Lowest to highest</option>
						<option value="Highest to lowest" > Highest to lowest</option>
					</select>
				</div>
			</header>
		)
	}
}


export default Header;