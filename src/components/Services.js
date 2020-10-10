import React from 'react'

export default function Services() {
    return (
        <div className='container'>
        <br />
        <h2 className='text-center logo'>Our Values</h2>
        <div className='mt-3 services text-center row'>

            <div>
            <img alt='services-icon' src="https://img.icons8.com/carbon-copy/48/000000/free-shipping.png"/><br />
                Delivery<br />
                <small>Free shipping for shopping above min* order amount in listed zones</small>
            </div>
            <div>
            <img src="https://img.icons8.com/cotton/35/000000/get-a-discount.png" alt='services-icon' className='mb-2'/><br />
                Discounts<br />
                <small>During the hard economic times, get fresh produce at discounted prices</small>
            </div>
            <div>
            <img src="https://img.icons8.com/ios/40/000000/online-shop-card-payment.png"alt='' className='mb-2'/><br />
                Secure pay<br />
                <small>Order payments on our site are encrypted and handled directly by Safaricom Mpesa.</small>
            </div>
            <div>
            <img src="https://img.icons8.com/ios/42/000000/vegetarian-food.png" className='mb-2' alt=''/><br />
            Fresh foods<br />
            <small>Our products are farm fresh and 100% organic.</small>
            </div>

        </div>
        <br />
        </div>
    )
}
