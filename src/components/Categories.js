import React from 'react'

export default function Categories() {
    return (
        <div className='container'>
            <strong className='text-success'>POPULAR CATEGORIES</strong>
            <div className='row'>
                <div className='col-lg-2 col-md-3 col-sm-4'>
                <img src="https://img.icons8.com/color/48/000000/grains-of-rice.png" alt='rice'/>
                    <small>Cereals</small>
                </div>

                <div className='col-lg-2 col-md-3 col-sm-4 '>
                <img src="https://img.icons8.com/cotton/48/000000/beetroot-and-carrot-1.png" alt='root vegetable'/>
                    <small>Root veggies</small>
                </div>

                <div className='col-lg-2 col-md-3 col-sm-4 '>
                <img src="https://img.icons8.com/emoji/48/000000/leafy-green.png" alt='veggies'/>
                    <small>Veggies</small>
                </div>

                <div className='col-lg-2 col-md-3 col-sm-4 '>
                <img src="https://img.icons8.com/color/48/000000/group-of-fruits.png" alt='fruits'/>
                    <small>Fruits</small>
                </div>
                <div className='col-lg-2 col-md-3 col-sm-4'>
                <img src="https://img.icons8.com/cotton/48/000000/potato--v1.png" alt='potato'/>
                    <small>Potatoes</small>
                </div>

                <div className='col-lg-2 col-md-3 col-sm-4 '>
                <img src="https://img.icons8.com/emoji/48/000000/tomato-emoji.png" alt='tomato'/>
                    <small>Tomatoes</small>
                </div>
            </div>
        </div>
    )
}
