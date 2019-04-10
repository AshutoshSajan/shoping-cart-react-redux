import React from "react"
import Loading from "./Loading";
import Size from './Size';
import Cards from './Cards';
import Cart from './Cart';
import { connect } from 'react-redux'

class Main extends React.Component {
  state = {
    cartItems: [],
    data: [],
  }

  componentDidMount = () => {
    fetch("https://react-shopping-cart-67954.firebaseio.com/products.json")
      .then(res => res.json())
      .then(({ products }) => (this.props.dispatch(
        {
          type: "ADD_SIZE",
          sizes: [...new Set(products.reduce((acc, v) => {
            return [...acc, ...v.availableSizes]
          }, []))].map(v => ({ size: v, checked: false })),
          loading: false
        }) 
        
        &&

        this.props.dispatch(
          {
            type: "ADD_PRODUCT",
            data: products,
            loading: false,
            isOpen: false,
          })
      ))
  }

  sortProduct = (data) => {
    let sort;
    this.setState({data: [...this.props.data.Product.data]}) ;
    const products = [...this.props.data.Product.data]

    if (data === "Select") {
      sort = this.state.data;
    } else if (data === "Lowest to highest") {
      sort = [...products].sort((a, b) => a.price - b.price)
    } else if (data === "Highest to lowest") {
      sort = [...products].sort((a, b) => b.price - a.price)
    }
    this.props.dispatch({ type: "SORT_PRODUCT", sorted: sort })
  }

  addToCart = (obj) => {
    this.props.dispatch({type: "ADD_TO_CART", data: obj});
  }

  handleRemove = (id) => {
    this.props.dispatch({type: "REMOVE_FROM_CART", id: id}); 
  }

  toggleCart = (data) => {
    this.props.dispatch(
      {
        type: "TOGGLE_CART",
        data: data,
      })
  }

  openCart = () => {
    this.props.dispatch(
      {
        type: "OPEN_CART",
        data: true,
      })
  }

  handleFilter = (size) => {
    const filtered = this.state.data.filter(obj => obj.availableSizes.includes(size))
    this.setState({ filtered })
  }

  render() {
    console.log(this.props);
    return (
      <React.Fragment>
        {
           navigator.onLine ?
            this.props.data.Product.loading ? <Loading /> :
            (<section className="main-sec">
              <Size handleFilter={this.handleFilter} handleFilterSize={this.handleFilterSize} />
              <div className="cards-section">
                <div className="card">
                  <Cards addToCart={this.addToCart} openCart={this.openCart} sortProduct={this.sortProduct}/>
                </div>
              </div>
              <Cart toggleCart={this.toggleCart} handleRemove={this.handleRemove} cartItems={this.state.cartItems} />
            </section>) 
            : <p className={`error ${this.state.className}`}>No internet connection</p>
        }
      </React.Fragment>
    )
  }
}
function mapStateToProps(state){
  return {
    data: state
  }
}

export default connect(mapStateToProps)(Main);