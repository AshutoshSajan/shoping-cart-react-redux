import React, { Component } from 'react';
import uuid from './uuid';
import { connect } from 'react-redux'


class Card extends Component {
  
  state = {
    sortedProduct: null,
  }

  createFiltered (data = []){
    const { sizes } = this.props;
    if(!sizes) return;
    let filteredSizes = sizes.filter(v => v.checked).map(v=> v.size);
    let filteredData = data.filter(pro =>{
      return pro.availableSizes.some(size => filteredSizes.length ?  (filteredSizes.includes(size)): size );
    })
    // console.log('createFiltered',filteredSizes)
    return filteredData;
  }

  render() {
    console.log(this.props, "props in cards");
    const { data } = this.props.product;
    const filtered = this.createFiltered(data);
    return (
      <React.Fragment>
        { 
          filtered.map(v => {
            return (
              <div className="product" key={uuid()} onClick={() => {this.props.openCart(); this.props.addToCart(v.id)} }>
              <p className="shipping">Free shipping</p>
              <figure className="img-box">
                <img src={`https://raw.githubusercontent.com/jeffersonRibeiro/react-shopping-cart/master/src/static/products/${v.sku}_1.jpg`} alt="product_img"/>
              </figure>
              <div className="product-details">
                  <p className="tshirt-title">{v.title}</p>
                  <p className="line"></p>
                <div className="price">
                  <span>{v.currencyFormat}</span>
                  <b className="bold">{v.price.toString().split(".")[0]}</b>
                  <span>{v.price.toString().split(".")[1] ? (` .${v.price.toString().split(".")[1]}`) : ".00"}</span>
                  <p>{`or ${v.installments} X ${v.currencyFormat} ${(v.price/v.installments).toFixed(2)}`}</p>
                </div>
              </div>
              <p className="add-to-cart">Add to Cart</p>
            </div>)
          })}
      </React.Fragment>
    )
  }
}

function MapToState(state) {
  console.log(state)
  return {
    product: state.Product,
    sizes: state.size 
  }
}
export default connect(MapToState) (Card);

// {/*this.state.sortedProduct) ? (this.state.sortedProduct) : "" */}


// { data.map((v,i) => console.log(v)) }
  
              // (<div className="product" key={uuid()} onClick={() => {this.props.openCart(); this.props.addToCart()}}>
              //   <p className="shipping">Free shipping</p>
              //   <figure className="img-box">
              //     <img src={`https://raw.githubusercontent.com/jeffersonRibeiro/react-shopping-cart/master/src/static/products/${"v.sku"}_1.jpg`} alt="product_img"/>
              //   </figure>
              //   <div className="product-details">
              //     <p className="tshirt-title">{v.title*//*}</p>
                  // <p className="line"></p>
                  // <div className="price">
                    // <span>{/*v.currencyFormat}</span>
                    // <b className="bold">{v.price.toString().split(".")[0]}</b>
                    // <span>{/*v.price.toString().split(".")[1] ? (` .${v.price.toString().split(".")[1]}`) : ".00"*/}</span>
                    // <p>{/*`or ${v.installments} X ${v.currencyFormat} ${(v.price/v.installments).toFixed(2)}`*/}</p>
  //                 </div>
  //               </div>
  //             <p className="add-to-cart">Add to Cart</p>
  //           </div>)
  //   {/*    })}  */}
  //     </React.Fragment>
  //   )
  // */}