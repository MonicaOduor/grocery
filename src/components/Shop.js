import React, { useContext } from 'react'
import { ShopContext } from './context/ShopContext'


export default function Shop(props) {

    return (
        <div className='card rounded-0' style={{background: 'inherit', }}>
            <img className="card-img img-fluid" src={props.imgUrl} alt="" />
                <div className="card-img-overlay h-100 d-flex flex-column justify-content-start">
                    <strong className='text-danger'>
                        {props.name}
                    </strong>
                    <small style={{fontSize: '10px'}}>
                        {props.price}
                    </small>
                </div>

                <div className='text-center d-flex'>
                    <button
                        className='btn add-to-cart-btn border m-3'
                        style={{cursor: 'pointer'}}>
                        <img alt='' src="https://img.icons8.com/dotty/20/000000/add-shopping-cart.png"/>&nbsp;Add to cart
                    </button>
                    <br/>

                    <button
                        className='btn add-to-cart-btn border m-3'
                        style={{cursor: 'pointer'}}>
                        <img alt= ''src="https://img.icons8.com/carbon-copy/20/000000/filled-like.png"/>&nbsp;Wishlist
                    </button>

                </div>
        </div>

    )
}
