import React, { useContext} from 'react'
import Shop from './Shop'
import ShopCategories from './ShopCategories'
import Footer from './Footer'
import Cereal from './Cereal'
import { ShopContext } from './context/ShopContext'

export default function ShopList() {
    const {products} = useContext(ShopContext)

    return (
        <div className='container'>
            <ShopCategories />
            <Cereal />
            <br />
            <div className='shop-items'>
                {products.map(product => {
                    return(
                    <Shop name={product.name}
                          key={product.id}
                          price={product.price}
                          imgUrl={product.imgUrl} />
                        )
                })}
                </div>
                <br />
                <Footer />
        </div>
        )}
