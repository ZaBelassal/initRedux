import { ADD_TO_CART, REMOVE_FROM_CART , CLEAR_CART } from "../actions/types"

export default function cartReducer(state , action) {

    switch(action.type){
        case ADD_TO_CART : {
            return {
                cart : [
                    ...state.cart , 
                    {
                        product : action.productInfo,
                        quantity : action.quantity
                    }
                ]
            }
        }

        case REMOVE_FROM_CART : {
            
                const item_index = action.index;
                const new_state = {...state};             // kan Cloniw State dial lobjet kamél iLa dért ghyr const new_state = state ===> Ghadi tbédall state kamla
                delete new_state.cart[item_index];
                return new_state;

        }

        case CLEAR_CART : {

                const new_state = {...state}; // kandiro copy dial state
                new_state.cart = [];
                return new_state ;
        }

        default : 
        return state;
    }



}

