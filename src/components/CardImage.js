import React from 'react'
import bgimage from './images/bgimage.jpg'

export default function CardImage() {
    return (
        <div>
            <div className="card container mb-2" style={{background: 'inherit', border: 'none'}}>
                <img
                className="card-img img-fluid image-overlay"
                src={bgimage}
                style={{height: '20rem'}}
                alt="home background-img"/>
                    <div className="card-img-overlay m-3">
                        <br /><br />
                        <h4>
                            <strong className="card-text text-center text-white">
                            Groceries with the same quality, freshness<br /> and choice you'd find in the store. Promise
                            </strong>
                        </h4>
                        <button className='btn btn-success'>
                            Shop Now
                        </button>
                    </div>
            </div>

        </div>
    )
}
