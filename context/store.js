import { initialState } from './initialState'
import { cartReducer } from './reducers'
import { createContext, useReducer } from 'react'

export const NomeContext = createContext()

export const NomeProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, initialState)
    
    return(
        <NomeContext.Provider value={[state, dispatch]}>
            {children}
        </NomeContext.Provider>
    )

}