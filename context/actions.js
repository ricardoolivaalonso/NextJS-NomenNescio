import { TYPES } from "./types"

export const OPEN_MODAL_ACTION = () => ({
    type: TYPES.OPEN_MODAL
})
export const CLOSE_MODAL_ACTION = () => ({
    type: TYPES.CLOSE_MODAL
})

export const RESET_CART_ACTION = () =>({
    type: TYPES.RESET_CART
})
// 
export const ADD_ITEM_ACTION = (item) => ({
    type: TYPES.ADD_ITEM,
    payload: item
})
export const DELETE_ITEM_ACTION = (idProduct, quantity) => {
    if(quantity !== 1){
        return {
            type: TYPES.DELETE_ITEM,
            payload: idProduct
        }
    }
    else{
        return{
            type: TYPES.DELETE_PRODUCT,
            payload: idProduct
        }
    }
}
export const DELETE_PRODUCT_ACTION = (idProduct) => ({
    type: TYPES.DELETE_PRODUCT,
    payload: idProduct
})

