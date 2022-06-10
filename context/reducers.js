import { initialState } from './initialState'
import { TYPES } from "./types"


export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case TYPES.RESET_CART: 
            return {
                ...state,
                cart: []
            }
    
        case TYPES.CLOSE_MODAL:
            return{
                ...state,
                open: false
            }
        case TYPES.OPEN_MODAL:
            return{
                ...state,
                open: true
            }

        case TYPES.ADD_ITEM:
            const [newItem] = state.cart.filter( c => c.id === action.payload.item.id)
    
            if(newItem){
                return{
                    ...state,
                    cart: state.cart.map( item => {
                        if( item.id === action.payload.item.id){
                            return{
                                ...item,
                                quantity: item.quantity + 1
                            }
                        }
                        return item
                    })
                }
                
            }
            else{
                return{
                    ...state,
                    cart: [
                        ...state.cart,
                        action.payload.item
                    ]
                }
            }
            

        case TYPES.DELETE_ITEM:
            return {
                ...state,
                cart: state.cart.map( item => {
                    if(item.id === action.payload){
                        return{
                            ...item,
                            quantity: item.quantity - 1
                        }
                    }
                    return item
                })
            }

        case TYPES.DELETE_PRODUCT:
            
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload)
            }
        
        default: 
            return state
    }
}