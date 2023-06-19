import React from 'react';
import Banner from '../Banner/Banner';
import SportAcivment from '../SportAcivment';

import PopularInstructor from '../PopularInstructor/PopularInstructor';
import Popular from '../PopularClass/Popular';
import { Helmet } from 'react-helmet-async';
import MoreExtraSection from './MoreExtraSection/MoreExtraSection';
import MoreExtraSectionTwo from './MoreExtraSectionTwo/MoreExtraSectionTwo';
import MoreExtraSectionThree from './MoreExtraSectionThree/MoreExtraSectionThree';
// import OurAcademy from '../OurAcademy/OurAcademy';

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
            {/* <OurAcademy></OurAcademy> */}
            <MoreExtraSection></MoreExtraSection>
            <MoreExtraSectionTwo></MoreExtraSectionTwo>
            <MoreExtraSectionThree></MoreExtraSectionThree>
        </div>
    );
};

export default Home;