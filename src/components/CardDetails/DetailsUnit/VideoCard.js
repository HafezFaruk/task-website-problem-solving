import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const VideoCard = ({ selObj }) => {
    const navigate = useNavigate();
    const { course } = useParams();
    console.log( course )

    const [promoCodeBox, setPromoCodeBox ] = useState( false );

    const handleStartCourses = ( )=>{
        navigate(`/${course}/det/${selObj.courseId}/purchase`, { state: { selObj }})
        window.scrollTo(0, 0)
    }

    return (
      <div>
        <div className=" border rounded ">
          {/* video from youtube ------------ */}
          <div className="rounded ">
            <iframe
              className="rounded-t w-full h-72"
              src="https://www.youtube.com/embed/TiSGujM22OI"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          {/* courses details --------------- */}
          <div className="p-4 ">
            <div className="flex justify-between">
              <button
                onClick={() => {
                  setPromoCodeBox(true);
                }}
              >
                <u>প্রোমো কোড {promoCodeBox && "লিখুন"}</u>
              </button>
              <h2 className="text-2xl font-semibold">৳ ৯৫০</h2>
            </div>

            {promoCodeBox ? (
              <div className=" mt-2 ">
                <div className="flex">
                  <button
                    onClick={() => {
                      setPromoCodeBox(false);
                    }}
                    className="border text-2xl py-2 px-4 mr-3 rounded "
                  >
                    X
                  </button>
                  <div className="border flex w-full">
                    <input
                      className="w-full rounded-l "
                      type="text"
                      name="promoCode"
                      placeholder="প্রোমো কোডটি ব্যবহার করুন"
                    />
                    <button className="bg-black text-white rounded-r-md p-3">
                      অ্যাপ্লাই
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="my-2">
                <button
                  style={{ backgroundColor: "#F0AC01" }}
                  onClick={handleStartCourses}
                  className=" p-3 w-full rounded-lg text-white "
                >
                  কোর্সটি শুরু করুন <span className="ml-6">&rarr;</span>
                </button>
              </div>
            )}

            <div className="flex my-6 ">
              <div className=" w-2/4 flex justify-start items-center ">
                <div className=" rounded-full ">
                  <img
                    className="rounded-full border-2 border-black"
                    height="24px"
                    width="24px"
                    src="https://cdn-icons-png.flaticon.com/512/633/633781.png"
                    alt="users group"
                  />
                </div>
                <div className=" ml-2 text-left ">
                  <p>কোর্সটি করছেন</p>
                  <p>১১৮,০০৩ জন</p>
                </div>
              </div>

              <div className=" w-2/4 flex justify-start items-center ">
                <div className=" rounded-full ">
                  <img
                    className="rounded-full"
                    height="24px"
                    width="24px"
                    src="https://cdn-icons-png.flaticon.com/512/992/992700.png"
                    alt="duration of the courses"
                  />
                </div>
                <div className=" ml-2 text-left ">
                  <p>সময় লাগবে</p>
                  <p>২০ ঘন্টা</p>
                </div>
              </div>
            </div>

            <div className="border-t-2 flex justify-start py-6  ">
              <div className=" w-2/4">
                <div className="flex">
                  <p className="ml-2">
                    {" "}
                    <span style={{ color: "#F0AC01" }} className="text-xl ">
                      &#10003;
                    </span>{" "}
                    ৮৩টি ভিডিও
                  </p>
                </div>
                <div className="flex">
                  <p className="ml-2">
                    <span style={{ color: "#F0AC01" }} className=" text-xl ">
                      &#10003;
                    </span>{" "}
                    ৮৩টি নোট
                  </p>
                </div>
              </div>

              <div className=" w-2/4">
                <div className="flex">
                  <p className="ml-2">
                    <span style={{ color: "#F0AC01" }} className=" text-xl ">
                      &#10003;
                    </span>
                    ৮৩টি সেট কুইজ
                  </p>
                </div>
                <div className="flex">
                  <p className="ml-2">
                    <span style={{ color: "#F0AC01" }} className=" text-xl ">
                      &#10003;
                    </span>
                    ৮৩টি ট্রান্সক্রিপ্ট
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-3">
          <p className="text-sm sm:text-lg">
            কোর্সটি সম্পর্কে বিস্তারিত জানতে{" "}
            <span className=" text-indigo-600 ">কল করুন: 16910</span>{" "}
          </p>
        </div>
      </div>
    );
};

export default VideoCard;