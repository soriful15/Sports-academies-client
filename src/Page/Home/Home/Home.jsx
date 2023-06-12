import React from 'react';
import Banner from '../Banner/Banner';
import SportAcivment from '../SportAcivment';
import PopularClass from '../PopularClass/PopularClass';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <SportAcivment></SportAcivment>
            <PopularClass></PopularClass>
        </div>
    );
};

export default Home;