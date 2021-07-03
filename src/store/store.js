import {createStore} from 'redux' ;
import cartReducer from './reducers';


const initialState = {
    cart : [
        {
            product : {
                "id": 1,
                "name": "Belgium",
                "price": 100,
                "image": "./images/belgium1.jpg",
                "description": "Belgium Kit"
            },

            quantity : 2

        }

    ]

};



const store = createStore(cartReducer , initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) ;

export default store;