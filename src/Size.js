import React from  "react";
import uuid from './uuid';
import { connect } from 'react-redux'

class Size extends React.Component {

	handleFilter = (e) => {
		const size = e.target.innerText;
		this.props.handleFilter(size);
	}

	handleFilterSize = (data) => {
		console.log(data)
		this.props.dispatch({
			type: "TOGGLE_SIZE",
			data: data
		})
	}

	// handleFilter = (data, size) => {
	// 	console.log(data,size, "filter")
	// 	this.props.dispatch({
	// 		type: "HANDLE_FILTER",
	// 		data: data,
	// 		size: size
	// 	})
	// }

	render(){
		console.log(this.props)
		const { data } = this.props;
		console.log(data);
		return (
			<section className="sizes">
				<h2>Sizes:</h2>
				<div className="filtered-size">
					{
						data.size.map(size => 
						<div className={`circle ${size.checked ? "active" : "inactive"}`} key={uuid()} onClick={() => { 
							this.handleFilterSize(size); 
							// this.handleFilter(data, size);
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