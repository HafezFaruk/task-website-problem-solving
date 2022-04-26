import React from 'react';
import { useLocation } from 'react-router-dom';
import CourseSyllabus from './DetailsUnit/CourseSyllabus';
import Instructor from './DetailsUnit/Instructor';
import LearningPoints from './DetailsUnit/LearningPoints';
import StudentsComm from './DetailsUnit/StudentsComm';
import TitleDet from './DetailsUnit/TitleDet';
import VideoCard from './DetailsUnit/VideoCard';
import PaymentMeth from './DetailsUnit/PaymentMeth';
import CourseReq from './DetailsUnit/CourseReq';
import FAQs from './DetailsUnit/FAQs';
import coursesData from '../Shared/cardData';
import Courses from '../Shared/Courses';

const CardDetails = () => {

    const location = useLocation()
    const selectedObj = location.state.selectedObj;
    console.log( selectedObj )

    const headingText ='';
    const paragraphText = ''




    return (
        <div style={{ marginTop: '100px'}} className='' >

            <div className='md:mx-24 sm:mx-14' >
                <div className='flex justify-around md:flex-row sm:flex-col-reverse w-full pt-3 ' >
                    <div className=' p-6 md:w-3/5 sm:w-full ' >
                        <TitleDet selObj={selectedObj} />
                        <Instructor selObj={selectedObj}  />
                        <LearningPoints selObj={selectedObj}  />
                        <CourseSyllabus selObj={selectedObj} />
                        <PaymentMeth />
                        <StudentsComm />
                        <CourseReq />
                        <FAQs/>
                    </div>

                    {/* position: sticky, top: 0px - is not working */}
                    <div className='md:sticky top-0' >
                        <VideoCard selObj={selectedObj}  />
                    </div>
                </div>
            </div>


            <div className='' >
                <Courses heText={ headingText } pgText={ paragraphText } cardObj={ coursesData } />
            </div>

        </div>
    );
};

export default CardDetails;