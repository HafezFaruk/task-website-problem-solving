import React from 'react';


const SecontBanner = () => {
    return (
      <div>
        <div
          
          className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2  gap-4 mx-2 sm:mx-14 my-24"
        >
          {/* image part ------------------------------------ */}
          <div className="w-full">
            <iframe
              className="w-full h-80 rounded-md"
              src="https://www.youtube.com/embed/x7lygbgt4-I"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          {/* text part ------------------------------------- */}
          <div className="text-left mt-5 sm:mt-0">
            <h1 className="text-3xl font-black">
              আমরাই ক্যান <span className="text-yellow-400">শেরা</span>
            </h1>{" "}
            <br />
            <p className="md:mr-16 ">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are
            </p>{" "}
            <br />
            <p className="md:mr-16 ">
              going to use a passage of Lorem Ipsum, you need to be sure there
              isn't anything embarrassing hidden in the middle of text. All the
              Lorem Ipsum generators on the Internet
            </p>
          </div>
        </div>
      </div>
    );
};

export default SecontBanner;