import React from 'react';
import PeopleThoutht from '../Shared/PeopleThoutht';
import SecontBanner from '../Shared/SecontBanner';
import TopBanner from '../Shared/TopBanner';
import Courses from './../Shared/Courses';

const SingleCourse = () => {

    const headingOne = 'Our BCS Courese'
    const headingTwo = 'Our Primary Teacher Courses'
    const headingThree = 'Our 2nd & 3d class job courses'
    const headingFour = 'Our NTRCA courses'
    const paragraphText = 'with our innovatove tools and solutions tailor ed to enpower your business, you just need to sit back and see your problems solved business operations accelerated and team productivity boosted.'

    return (
        <div>
            <TopBanner />
            <SecontBanner />
            <Courses heText={ headingOne } pgText={ paragraphText } />
            <Courses heText={ headingTwo } pgText={ paragraphText } />
            <Courses heText={ headingThree } pgText={ paragraphText } />
            <Courses heText={ headingFour } pgText={ paragraphText } />

            <PeopleThoutht />

        </div>
    );
};

export default SingleCourse;