import React from 'react';
import Cta from '../../Cta/Cta';
import Testimonials from '../../Testimonials/Testimonials';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <Testimonials></Testimonials>
            <Cta></Cta>
        </div>
    );
};

export default Home;