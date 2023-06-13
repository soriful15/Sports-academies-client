import React from 'react';
import Banner from '../Banner/Banner';
import SportAcivment from '../SportAcivment';

import PopularInstructor from '../PopularInstructor/PopularInstructor';
import Popular from '../PopularClass/Popular';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Popular></Popular>
            <PopularInstructor></PopularInstructor>
            <SportAcivment></SportAcivment>
        </div>
    );
};

export default Home;