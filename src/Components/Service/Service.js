import AOS from 'aos';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    const { name, price, description1, description2, description3, description4, id } = service;

    const navigate = useNavigate();

    const handleCheckout = id => {
        navigate(`/checkout/${id}`);
    }

    AOS.init();

    // You can also pass an optional settings object
    // below listed default settings
    AOS.init({
        // Global settings:
        disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
        startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
        initClassName: 'aos-init', // class applied after initialization
        animatedClassName: 'aos-animate', // class applied on animation
        useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
        disableMutationObserver: false, // disables automatic mutations' detections (advanced)
        debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
        throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


        // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
        offset: 120, // offset (in px) from the original trigger point
        delay: 0, // values from 0 to 3000, with step 50ms
        duration: 400, // values from 0 to 3000, with step 50ms
        easing: 'ease', // default easing for AOS animations
        once: false, // whether animation should happen only once - while scrolling down
        mirror: false, // whether elements should animate out while scrolling past them
        anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

    });

    return (
        <div data-aos="fade-up">
            <div className='card-div mb-4'>
                <h1 className='mt-3'>{name}</h1>
                <hr className='text-white' />
                <h3>Price: {price} tk</h3>
                <hr className='text-white' />
                <p>{description1}</p>
                <hr className='text-white' />
                <p>{description2}</p>
                <hr className='text-white' />
                <p>{description3}</p>
                <hr className='text-white' />
                <p>{description4}</p>
                <button onClick={() => handleCheckout(id)} className='mt-3 checkout-btn'>Book Now</button>
            </div>
        </div>

    );
};

export default Service;