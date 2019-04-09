import React from "react"
import Loading from "./Loading"; 
import Size from './Size';
import Header from './Header';
import Cards from './Cards';
import Cart from './Cart';
import { connect } from 'react-redux'

class Main extends React.Component {
	state = {
		cartItems: []
	}

	componentDidMount = () => {
		fetch("https://react-shopping-cart-67954.firebaseio.com/products.json")
		.then(res => res.json())
		.then(({products}) => (this.props.dispatch(
			{	type: "ADD_SIZE",
				sizes:  [...new Set(products.reduce((acc, v) => {
								return [...acc, ...v.availableSizes]
								},[]))].map(v => ({size:v, checked: false})),
				loading: false
			}),
			this.props.dispatch(
			{	type: "ADD_PRODUCT",
				data: products,
				loading: true,
				isOpen : false,
			})
		))
	}

	addToCart = (id) => {
		console.log(id)
		const {data} = this.props.data.Product
		this.setState({cartItems: [...this.state.cartItems, ...data.filter(obj => obj.id === id)]});
		console.log(data , "add to cart");

    // console.log(this.state.cartItem.includes(data.id))
    // this.setState({cartItem: this.state.cartItem.concat([data])})
  }
	
	toggleCart = (data) => {
		this.props.dispatch(
			{	
				type: "TOGGLE_CART",
				data : data,
			})
	}

	openCart = () => {
		this.props.dispatch(
			{	
				type: "OPEN_CART",
				data : true,
			})
	}

	handleFilter = (size) => {
		console.log("clicked")
		const filtered = this.state.data.filter(obj => obj.availableSizes.includes(size))
		this.setState({filtered})
	}

	handleRemove = (id) => {
		console.log(id);
		this.setState({cartItems: this.state.cartItems.filter(item => item.id !== id)})
	}

	handleFilterSize = (data) => {
		// console.log(data, "check")
		// this.setState({sizes: this.state.map(size => data.size && data.checked in size ? 
		// 	{size: size.size, checked: !data.checked})})
	}

	render() {
		console.log(this.props);
		console.log(this.state, "main js state");
		const {Product} = this.props.data;
		// Product.loading ? console.log("yup") : console.log("nope")
		// setTimeout(() => this.setState({className: "internet-error"}), 1000);
		return(
			<React.Fragment>
				{
				navigator.onLine ?
				// Product.loading ? <Loading /> :
				(<section className="main-sec">
					<Size handleFilter={this.handleFilter} handleFilterSize={this.handleFilterSize} />
					<div className="cards-section">
						<div className="card">
							<Cards addToCart={this.addToCart} openCart={this.openCart} />
						</div>
					</div>
					<Cart toggleCart={this.toggleCart} handleRemove={this.handleRemove} cartItems={this.state.cartItems}/>
				</section> )
				: <p className={`error ${this.state.className}`}>No internet connection</p>
			}
			</React.Fragment>
		)
	}
}

export default connect((state) => ({data: state})) (Main);