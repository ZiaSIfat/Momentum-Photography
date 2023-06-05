import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Service from '../Service/Service';
import './Services.css';
AOS.init();
const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('Services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    return (
        <div
            data-aos="fade-up"
            data-aos-offset="100"
            data-aos-delay="20"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-center"
        >
            <div className='container mt-5'>

                <h1 className='mb-5 text-white'>Services</h1>
                <div className='services-container'>
                    {
                        services.map(service => <Service
                            key={service?.id}
                            service={service}>
                        </Service>)

                    }
                </div>
            </div>

        </div>

    );
};

export default Services;