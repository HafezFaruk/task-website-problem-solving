import React from "react";
import HomeBaner from "../HomeTwo/HomeBaner";
import coursesData from "../Shared/cardData";
import Courses from "../Shared/Courses";
import Footer from "../Shared/Footer";
import SecontBanner from "../Shared/SecontBanner";
import TopBanner from "../Shared/TopBanner";

const Home = () => {
  const headingText = "";
  const headingText2 = "আমাদের পেইড কোর্স";
  const paragraphText =
    "With our innovatove tools and solutions tailor ed to enpower your business, you just need to sit back and see your problems solved business operations accelerated and team productivity boosted.";

  return (
    <div>
      <TopBanner />
      {/* <HomeBaner /> */}
      <SecontBanner />
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
      {/* <Footer/> */}
    </div>
  );
};

export default Home;
