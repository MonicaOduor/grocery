import React from 'react'
import {Carousel} from 'react-bootstrap'
import slider1 from './images/slider1.jpg'
import slider2 from './images/slider2.jpg'
import slider3 from './images/slider3.jpg'
import slider4 from './images/slider4.jpg'
import slider5 from './images/slider4.jpg'
import slider6 from './images/slider5.jpg'
import slider7 from './images/slider6.jpg'


export default function Slider() {
    return (
        <div>
            <Carousel>

                <Carousel.Item>
                    <img
                    className="d-block slider-img"
                    src={slider2}
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block slider-img"
                    src={slider3}
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block slider-img"
                    src={slider4}
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block slider-img"
                    src={slider5}
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block slider-img"
                    src={slider6}
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block slider-img"
                    src={slider7}
                    alt="First slide"
                    />
                </Carousel.Item>


</Carousel>
        </div>
    )
}
