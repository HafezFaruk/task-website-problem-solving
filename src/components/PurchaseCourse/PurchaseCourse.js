import React from 'react';
import PurchaseMap from './PurchaseCourseUnits/PurchaseMap';
import StudentInfo from './PurchaseCourseUnits/StudentInfo';

const PurchaseCourse = () => {
    return (
        <div className=' flex justify-center items-center h-screen ' >
            <div style={{ marginTop: '89px'}} className=' w-full ' >
                <PurchaseMap />
                <StudentInfo />
            </div>
        </div>
    );
};

export default PurchaseCourse;