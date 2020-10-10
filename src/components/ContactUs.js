import React from 'react'
import Footer from './Footer'




export default function ContactUs() {
    return (
        <div className='container'>

            <iframe
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.635066346123!2d36.72819781416946!3d-1.39543879898226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f05ef5d269cff%3A0x7fb6e910f8462dc0!2sGoshen%20Uniforms%20And%20Distributors!5e0!3m2!1sen!2ske!4v1597908155919!5m2!1sen!2ske"
                 frameBorder="0"
                 className='container text-center
                 text-center'
                 title='Goshen grocery'
                 style={{allowfullscreen:"true",}}>
            </iframe>
            <div className='row'>
                <div className='col-12 mt-4'>
                    <strong>
                        <p style={{fontSize: '1.9rem',marginBottom: 0 }}>Contact Us</p>

                    </strong>
                        <p>We are here for you!</p>
                </div>
                <div className='col-lg-6' style={{lineHeight: '2rem'}}>
                    <p>
                        <img src="https://img.icons8.com/ios/23/000000/place-marker.png" alt=''/>
                        Ongata Rongai, Opp. Magenche Hardware
                    </p>
                    <p>
                        <img src="https://img.icons8.com/ios/23/000000/important-mail.png" alt=''/>&nbsp;
                        goshengroceries@gmail.com
                    </p>
                    <p>
                        <img src="https://img.icons8.com/ios/23/000000/phone.png" alt=''/>&nbsp;
                        +254 720 755 565
                    </p>
                    <p>
                        <img src="https://img.icons8.com/ios/23/000000/instagram-new.png" alt=''/>&nbsp;
                        Goshen grocers
                    </p>

                </div>

                <div className='col-lg-6 pt-2 pb-2 message'>
                    <input className="form-control rounded-0" style={{background: 'inherit'}} type="text" placeholder="Name" /><br />
                    <input className="form-control rounded-0" style={{background: 'inherit'}} type="text" placeholder="Email" /><br />
                    <textarea style={{background: 'inherit'}}placeholder='Your message' col='8' rows='3' className='form-control rounded-0'></textarea><br/>
                    <button className='btn' style={{background: '#60ad56'}}>Send message</button>
                </div>
            </div>
            <Footer />
            </div>
    )
}
