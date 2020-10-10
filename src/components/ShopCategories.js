import React from 'react'

export default function ShopCategories() {
    const styles= {
        color: '#848484',
        fontSize: '0.8em'
    }
    return (
        <div className='shop-container' style={styles}>
        <div className='col-lg-2 col-md-2 col-4'>
            <img src="https://img.icons8.com/bubbles/50/000000/ingredients.png"alt=''/><br />
                All items
        </div>

       <div className='col-lg-2 col-md-2 col-4'>
            <img src="https://img.icons8.com/color/50/000000/grains-of-rice.png"alt=''/><br />
            Cereals
        </div>

       <div className='col-lg-2 col-md-2 col-4'>
            <img src="https://img.icons8.com/cotton/50/000000/beetroot-and-carrot-1.png" alt=''/><br />
            Root veggies
       </div>

       <div className='col-lg-2 col-md-2 col-4'>
            <img src="https://img.icons8.com/color/50/000000/group-of-fruits.png"alt=''/><br />
            Season Fruits
       </div>

        <div className='col-lg-2 col-md-2 col-4'>
            <img src="https://img.icons8.com/emoji/50/000000/leafy-green.png" alt='veggies'/><br />
            Fresh greens
        </div>

        <div className='col-lg-2 col-md-2 col-4'>
            <img src="https://img.icons8.com/color/50/000000/onion.png" alt=''/> <br />
                Onions
        </div>
    </div>
    )
}
