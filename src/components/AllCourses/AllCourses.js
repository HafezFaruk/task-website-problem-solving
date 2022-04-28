import React from 'react';
import Courses from '../Shared/Courses.js';
import coursesData from "../Shared/cardData.js";
const AllCourses = () => {
      const headingText = "আমাদের পেইড কোর্স";
      const headingText2 = "আমাদের ফ্রি কোর্স";
      const paragraphText = "";
    return (
      <div>
        <div style={{ marginTop: "100px" }}>
          <Courses
            heText={headingText}
            pgText={paragraphText}
            cardObj={coursesData}
          />
          <Courses
            heText={headingText2}
            pgText={paragraphText}
            cardObj={coursesData}
          />
        </div>
      </div>
    );
};

export default AllCourses;