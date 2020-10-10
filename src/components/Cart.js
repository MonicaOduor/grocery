import React from 'react'
import Footer from './Footer'


export default function Cart() {
    

    return (
        <>
        <div className='container' style={{minHeight: '50vh',}} >
            <div className="card" style={{background: 'inherit', border: 'none', }}>
                <h2 className='m-3 text-center' style={{fontSize: 'rem'}}>
                    <strong className="card-text ">CART</strong>
                </h2>
            </div>
            <div className='p-3 text-center'>
                <p className='border p-2'>
                    Your cart is currently empty
                </p>
                <button className='btn border rounded-0 text-center text-white' style={{background: '#94c4f7',}}>
                    RETURN TO SHOP
                </button>
            </div>
        </div>
        <Footer style={{ position: 'absolute', bottom:'10'}}/>
        </>
    )
}
