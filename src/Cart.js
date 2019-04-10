import React from 'react';
import uuid from './uuid.js';
import { connect } from 'react-redux'

class Cart extends React.Component {
	state = {
		className: true,
	}

	render() {
		const { cart } = this.props.product;
		const { Product } = this.props.product;
		const total = cart.reduce((acc, v) => {
			return acc += v.product.price * v.quant
		}, 0)

		return (
			<React.Fragment>
				<div>
				<button className={`cart-btn ${this.state.className ? "click" : ""}`} key={uuid()} onClick={() => {this.props.toggleCart(Product.isOpen); this.setState({className: !this.state.className})}}>
						{
							Product.isOpen ?
								<span className="close-btn">X</span> :
								<div>
									<i className="fas fa-cart-plus"></i>
									<span className="product-quantity">{cart.length}</span>
								</div>
						}
					</button>
				<div className={`cart ${Product.isOpen ? "open" : "close"}`}>
				
					<div className="cart-header">
						<div>
							<i className="fas fa-cart-plus"></i>
							<span className="product-quantity">{cart.length}</span>
						</div>
						<h2 className="cart-text">Add something in cart</h2>
					</div>
					<div className="item-container">
						<ul className="ul">
							{(cart.length ? cart : []).map(item =>
								(<li key={uuid()} className="shop-items">
									<div className="item-size-details">
										<img src={`https://raw.githubusercontent.com/jeffersonRibeiro/react-shopping-cart/master/src/static/products/${item.product.sku}_2.jpg`} alt="product_img" />
										<div className="item-quantity">
											<p>{item.product.title}</p>
											<p><span>{item.product.availableSizes[0]}</span>{` | ${item.product.style}`}</p>
											<p>Quantity : <span>{item.quant}</span></p>
										</div>
									</div>
									<div className="item-price">
										<button className="remove-items" onClick={(e) => this.props.handleRemove(item.product.id)}>X</button>
										<div className="per_item_price">
											<span className="currency">{item.product.currencyFormat}</span>
											<span>{(item.product.price * item.quant).toString().split(".")[0]} </span>
											<span>
												{(item.product.price * item.quant).toString().split(".")[1] ? (` .${(item.product.price * item.quant).toString().split(".")[1]}`) : ".00"}
											</span>
										</div>
									</div>
								</li>)
							)}
						</ul>
					</div>
					<div className="subtotal-sec">
						<div className="total-price">
							<p>SUBTOTAL</p>
							<p className="total_price" >
								<span className="currency">$</span>
								{total.toFixed(2)}
							</p>
						</div>
						<button className={`checkout-btn ${this.state.className}`} onClick={() => {
							alert(total ? `$ ${total.toFixed(2)}` : "Add some items in cart")}}>CHECKOUT</button>
					</div>
				</div>
				</div>
			</React.Fragment>
		)
	}
}

function MapToState(state) {
	return { product: state }
}
export default connect(MapToState)(Cart);