import React from 'react'
import bgimage from './images/home-card-img-2.jpg'

export default function Order() {
    return (
        <div className="container mt-4 card order-card">
            <img
                className="card-img img-fluid image-overlay"
                src={bgimage}

                alt="background-img"/>

            <div className='m-2 card-img-overlay text-white'>
                <h3>
                    <strong className="text-center">
                    Healthy life.<br />Happy Perfect life.
                    </strong>
                    <strong>Same day fresh grocery. Order by 1pm</strong>
                    <br />
                    <button className='btn btn-success btn-sm rounded' style={{width: 'fit-content', }}>
                        Shop Now
                    </button>
                </h3>
            </div>
    </div>
    )
}
