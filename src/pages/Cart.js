import React from 'react';
import CartItem from '../components/CartItem';
import {connect} from 'react-redux';
import { clearCart} from '../store/actions/actions';


class Cart extends React.Component {

   placeOrder = () =>{

    this.props.clearCart();
   }

    render () {
    return (
        <div>
            <h1>Cart</h1>
            <div className="row">
                {this.props.cartItems.map((item , index) => 
                <div className={"col-3"}  key={item.product.id}>
                    <CartItem item={item} index={index}/>
                </div>
                )}
            </div>

            <p>
                Total : {this.props.total}
            </p>

            <button className="btn btn-primary btn " onClick={this.placeOrder}>Place Order</button>
        </div>

    );
    }


}
const mapStateToProps = ( state ) => {

    return {

        cartItems: state.cart,
        total : state.cart.reduce((total,item)=> total + item.quantity* item.product.price,0),
    }
}

const mapDispatchToProps = ( dispatch ) => {

    return {

        clearCart: () => dispatch(clearCart()),
    }
}

export default connect (mapStateToProps , mapDispatchToProps)(Cart);