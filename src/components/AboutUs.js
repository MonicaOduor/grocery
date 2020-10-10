import React from 'react'
import Footer from './Footer'
import aboutUsImg from './images/aboutUsImg.png'

export default function AboutUs() {
    return (
        <div>
            <div className='container'>
                <strong>
                    <div className=' about-us text-center text-white'>
                        <h2>ABOUT US</h2>

                        <p>Providing healthy super organic produce</p>
                    </div>

                </strong>
                <div className='row'>
                    <div className='col-5 '>
                        <br />
                        <img src={aboutUsImg} className='img-fluid' alt=''/>
                    </div>
                    <div className='col-7 about-us-text'>
                    <br />
                    <p>Est dolore fugiat tempor culpa ullamco velit laboris duis pariatur dolor proident minim enim. Nulla excepteur do quis dolore.

                    Veniam officia officia ullamco nisi enim non irure. Fugiat sit aliquip id tempor adipisicing consectetur non id excepteur nulla voluptate anim.</p>

                    <p className='about-text2'>Aliquip laborum sunt elit proident consectetur proident esse id. Id ea non aliqua id nisi deserunt officia veniam est occaecat reprehenderit amet Lorem.

                    Deserunt ipsum culpa cupidatat do tempor laborum excepteur dolor tempor quis ea proident in incididunt. Commodo aute officia</p>
                    </div>

                </div>
            </div>
            <Footer />
        </div>
    )
}
