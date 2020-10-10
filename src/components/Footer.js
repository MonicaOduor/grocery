import React from 'react'

export default function Footer() {
    return (
        <div className='wrapper container  text-center footer border' >
        <br />
        <h4>Follow us now</h4>
        <div className='text-center'>
            <img src="https://img.icons8.com/doodle/48/000000/facebook-new.png" alt='facebook-icon' />
            &nbsp;&nbsp;
            <img alt='insta-icon' src="https://img.icons8.com/cute-clipart/48/000000/instagram-new.png"/>
            &nbsp;&nbsp;
            <img alt='twitter-icon' src="https://img.icons8.com/doodle/48/000000/twitter--v1.png"/>
        </div>
        <br />
        <div>
        <small>© 2020 Copyright: Goshen Groceries</small>
        <br />
        <small style={{fontSize: '0.6rem'}}>Designed by Monica Oduor</small>
        </div>
    </div>
    )
}
