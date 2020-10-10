import React, {useContext} from 'react'
import { ShopContext } from './context/ShopContext'

export default function FeaturedProducts() {
    const {products} = useContext(ShopContext)
    let featuredProductsArray = products.slice(0, 12)

    return (
        <div className='container'>
            <br />
            <div style={{lineHeight: '1.3rem'}}>
                <strong className='text-success'>FEATURED PRODUCTS</strong>
                <br />
                <small>Items that you can't just miss</small>
            </div>
            <div className='featured-products-container'>

                {featuredProductsArray.map(product =>{
                    return(
                        <div
                            key={product.id}
                            className='card border rounded-0'
                            style={{background: 'inherit', cursor: 'pointer'}}>

                            <img className='card-img img-fluid' alt={product.name} src={product.imgUrl}/>
                                <div className='card-image-overlay h-100 d-flex flex-column justify-content-end'>
                                    <p className='text-danger ml-3 mb-0'>
                                        <strong>{product.name}</strong>
                                    </p>
                                    <small className='ml-4' style={{fontSize: '10px'}}> {product.price} </small>
                                </div>
                        </div>
                    )
                })}
            </div>
            <br />
        </div>
    )
}
