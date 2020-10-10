import React, {createContext, useState} from 'react'
import ShopData from '../ShopData'

export const ShopContext = createContext()

const ShopContextProvider = (props) => {
    const [products, setProducts] = useState(ShopData)
    


    const addToCart = () => {

    }

    const removeFromCart = () => {

    }

return(
    <ShopContext.Provider value={{products, addToCart, removeFromCart}}>
        {props.children}
    </ShopContext.Provider>
    )
}

export default ShopContextProvider;