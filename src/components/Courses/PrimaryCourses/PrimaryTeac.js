import React from 'react';
import coursesData from '../../Shared/cardData';
import Courses from '../../Shared/Courses';

const PrimaryTeac = () => {

    const headingText ='আমাদের পেইড কোর্স';
    const headingText2 ='আমাদের ফ্রি কোর্স';
    const paragraphText = ''

    return (
        <div style={{ marginTop: '100px'}} >
            <Courses heText={ headingText } pgText={ paragraphText } cardObj={ coursesData } />
            <Courses heText={ headingText2 } pgText={ paragraphText } cardObj={ coursesData } />
        </div>
    );
};

export default PrimaryTeac;