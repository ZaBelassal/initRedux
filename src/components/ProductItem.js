import React from 'react';

export default function ProductItem (props) {

    const {product} = props;

    return (

        <div>
                <div className="card">
                <img src={product.image} alt="euro-kit" style={{height:220, width:260}}/>
                        <div className="card-body">
                            <h5 className="card-title">{product.name}</h5>
                            <p className="card-text">{product.price} $</p>
                            <a href={"/products/" + product.id} className="btn btn-primary">Details</a>
                        </div>
                </div>
        </div>
    ) ;
}