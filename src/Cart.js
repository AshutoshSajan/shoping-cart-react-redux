import React from 'react';
import uuid from './uuid.js';
import { connect } from 'react-redux'

class Cart extends React.Component {
	state = {

	}
	

	render(){
		console.log(this.props , "props in cart")
		const {cartItems} = this.props;
		const {product} = this.props;
		console.log(cartItems)
		return(
		<React.Fragment>
			<div className={`cart ${product.isOpen ? "open" : "close"}`}>
				<button className="cart-btn" key={uuid()} onClick={() => this.props.toggleCart(product.isOpen)} >
					{
						product.isOpen ?
						<span className="close-btn">X</span>:
						<i className="fas fa-cart-plus"></i>
					}
				</button>
				<div className="cart-header">
					<i className="fas fa-cart-plus"></i>
					<h2 className="cart-text">Add something in cart</h2>
				</div>
				<div className="item-container">
					<ul className="ul">
						{(cartItems.length ? cartItems : []).map(item => 
							(<li key={uuid()} className="shop-items">
								<div className="item-size-details">
									<img src={`https://raw.githubusercontent.com/jeffersonRibeiro/react-shopping-cart/master/src/static/products/${item.sku}_2.jpg`} alt="product_img"/>
									<div className="item-quantity">
										<p>{item.title}</p>
										<p><span>{item.availableSizes[0]}</span>{` | ${item.style}`}</p>
										<p>Quantity : <span></span></p>
									</div>
								</div>
								<div className="item-price">
									<button className="remove-items" onClick={(e) => this.props.handleRemove(item.id)}>X</button>
									<div>
										<span>{item.currencyFormat}</span>
										<b className="bold">{item.price.toString().split(".")[0]} </b>
		                  <span>
		                  	{item.price.toString().split(".")[1] ? (` .${item.price.toString().split(".")[1]}`) : ".00"}
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
						<p>price</p>
					</div>
					<button className={`checkout-btn ${this.state.className}`}>CHECKOUT</button>
				</div>
			</div>
		 </React.Fragment>
		)
	}
}

function MapToState(state) {
  console.log(state)
  return {product: state.Product}
}
export default connect(MapToState) (Cart);