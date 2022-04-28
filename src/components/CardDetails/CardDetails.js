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
      <div style={{ marginTop: "100px" }} className="mx-2 sm:mx-14">
        <div>
          <div className="grid grid-cols-12 gap-6 pt-3">
            <div className="col-span-12 md:col-span-7 lg:col-span-7 xl:col-span-7 ">
              <TitleDet selObj={selectedObj} />
              <Instructor selObj={selectedObj} />
              <LearningPoints selObj={selectedObj} />
              <CourseSyllabus selObj={selectedObj} />
              <PaymentMeth />
              <StudentsComm />
              <CourseReq />
              <FAQs />
            </div>

            {/* position: sticky, top: 0px - is not working */}
            <div className="md:sticky top-0 col-span-12 md:col-span-5 lg:col-span-5 xl:col-span-5">
              <VideoCard selObj={selectedObj} />
            </div>
          </div>
        </div>

        <div className="">
          <Courses
            heText={headingText}
            pgText={paragraphText}
            cardObj={coursesData}
          />
        </div>
      </div>
    );
};

export default CardDetails;