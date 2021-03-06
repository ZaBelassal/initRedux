import React from 'react';
import { connect } from 'react-redux';
import {getById} from '../api/products'
import {addToCart} from '../store/actions/actions'

class Product extends React.Component {

    state = {
        loading: true ,
        quantity: 0,
        product : {}
    }

    componentDidMount(){
        const id = this.props.match.params.id;
    
        getById(parseInt(id))
        .then(product => {
            this.setState({
                product,
                loading : false
            });
        })

    }

    addToCart = (product) => {
        this.props.addToCart(product , this.state.quantity)
    }


    handleChange = (e) => { 
      if(e.target.value < 0){     // khassék dir e.target.value Bash tackLi la valeur Li katpointi 3Liha
          return 
      }
      this.setState({ 
          quantity : e.target.value 
        })
      
    }

    render() {
    
        
        if(this.state.loading)
            return 'Loading..';

        const {product,quantity} = this.state;

        return (
            <div>
                <h1>{product.name}</h1>
                <div className={'row'}>
                    <div className="col-6">
                        <img src={product.image} width={'100%'}/>
                    </div>

                    <br /> <br />

                    <div className='col-6'>
                        <h1>{product.name}</h1>   
                        <p>Price : {product.price} $</p>
                        <p>{product.description}</p>
                        
                    
                        <input type="number" value={quantity} onChange={this.handleChange}/>

                        <br /> <br />

                        <button className="btn btn-primary" onClick={()=>this.addToCart(product)}>
                            Add to Cart
                        </button>

                        <p>
                            Total : {quantity*product.price}
                        </p>
                    </div>
                </div>
            </div>


        );
                
    }
}

const mapDispatchToProps = ( dispatch ) => {

    return {

       addToCart:(productsInfo , quantity) => dispatch(addToCart(productsInfo,quantity))
    }
}
 

export default connect(null, mapDispatchToProps) (Product)

