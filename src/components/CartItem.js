import React from 'react';
import {connect} from 'react-redux';
import { removeFromCart} from "../store/actions/actions"


function ProductItem (props) {

    const {item,index} = props ;
    const {product} = item;

    return (

        <div>
                <div className="card">
                <img src={product.image} className="card-img-top" alt="euro-kit"/>
                        <div className="card-body">
                            <h5 className="card-title">{product.name}</h5>
                            <p className="card-text">{product.price} $
                            </p>
                            Quantity :{item.quantity}
                            <br />
                            Total : {item.quantity* product.price}
                            <br />
                            <button onClick={()=>props.removeFromCart(index)} className="btn btn-danger">
                                <i className="fa fa-trash"></i>Delete
                            </button>
                        </div>
                </div>
        </div>
    ) ;
}

const mapDispatchToProps = ( dispatch ) => {

    return {

        removeFromCart : (index)=>dispatch(removeFromCart(index)),

    }
}

export default connect(null,mapDispatchToProps)(ProductItem) ;