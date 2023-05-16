import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../Images/Banner/banner1.jpg';
import banner2 from '../../Images/Banner/banner2.jpg';
import banner3 from '../../Images/Banner/banner3.jpg';
import './Banner.css';


const Banner = () => {
    return (
        <div className='container'>
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className=" banner-img"
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>A picture is worth a thousand words</h3>
                        <p>It clearly and beautifully captures your emotions-the joy,the laughter,the tears,you name it.Our pride is in offering the best shoots as we help you tell your story in photos</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className=" banner-img"
                        src={banner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Ready to take you beyond your imagiination</h3>
                        <p>We take photos so perfectly that you will feel the same that you had felt in that very special day with your very special one.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className=" banner-img"
                        src={banner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Every moment of your life is beautiful.</h3>
                        <p>
                            Your each moment,your each emotion is nothing but a beautiful picture and  we just want to hold on those moments with our camera and make it a piece of art with our adroit editing.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;