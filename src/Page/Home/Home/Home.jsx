import React from 'react';
import Banner from '../Banner/Banner';
import SportAcivment from '../SportAcivment';
// import PopularClass from '../PopularClass/PopularClass';
import PopularInstructor from '../PopularInstructor/PopularInstructor';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PopularInstructor></PopularInstructor>
            {/* <PopularClass></PopularClass> */}
            <SportAcivment></SportAcivment>
        </div>
    );
};

export default Home;