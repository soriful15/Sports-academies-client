import React from 'react';
import Banner from '../Banner/Banner';
import SportAcivment from '../SportAcivment';

import PopularInstructor from '../PopularInstructor/PopularInstructor';
import Popular from '../PopularClass/Popular';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Sport Academic | Home Page</title>
            </Helmet>
           
                <Banner></Banner>

            <Popular></Popular>
            <PopularInstructor></PopularInstructor>
            <SportAcivment></SportAcivment>
        </div>
    );
};

export default Home;