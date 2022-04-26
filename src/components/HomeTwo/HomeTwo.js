import React from 'react';
import Courses from '../Shared/Courses';
import SecontBanner from '../Shared/SecontBanner';
import HomeBaner from './HomeBaner';

const HomeTwo = () => {

    const headingText ='Our Free Courese';
    const headingText2 ='Our Paid Courses';
    const paragraphText = 'With our innovatove tools and solutions tailor ed to enpower your business, you just need to sit back and see your problems solved business operations accelerated and team productivity boosted.'


    return (
        <div>
            {/* one component remaining to create  */}
            <HomeBaner/>
            <SecontBanner />
            <Courses heText={ headingText } pgText={ paragraphText } />
            <Courses heText={ headingText2 } pgText={ paragraphText } />
            
        </div>
    );
};

export default HomeTwo;