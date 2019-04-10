import React from  "react";
import uuid from './uuid';
import { connect } from 'react-redux'

class Size extends React.Component {

	handleFilter = (e) => {
		const size = e.target.innerText;
		this.props.handleFilter(size);
	}

	handleFilterSize = (data) => {
		this.props.dispatch({
			type: "TOGGLE_SIZE",
			data: data
		})
	}

	render(){
		const { data } = this.props;
		return (
			<section className="sizes">
				<h2>Sizes:</h2>
				<div className="filtered-size">
					{
						data.size.map(size => 
						<div className={`circle ${size.checked ? "active" : "inactive"}`} key={uuid()} onClick={() => { 
							this.handleFilterSize(size); 
						} }>
							<span className="circle-txt">{size.size}</span>
						</div>
					)}
				</div>
				<p className="repo-link">Check this app <a href="#">Here</a>:)</p>
			</section>
		)
	}
}

export default connect((state) => ({data: state})) (Size);