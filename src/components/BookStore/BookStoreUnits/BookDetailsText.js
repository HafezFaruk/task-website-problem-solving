import React, { useState } from 'react';

const BookDetailsText = () => {
    const [showText, setShowTest] = useState( true )

    const writersData = [
        {
            writerId: '0001',
            name: 'Ashique Shah',
            edu: 'Civil Engineering, Bangladesh University of Engineering and Technology (BUET)',
            img: 'https://d1yreyj8btzg0t.cloudfront.net/images/store/instructors/Ashique-Shah-120.jpg',
        },
        {
            writerId: '0002',
            name: 'Nova Tabassum',
            edu: 'Civil Engineering, Bangladesh University of Engineering and Technology (BUET)',
            img: 'https://d1yreyj8btzg0t.cloudfront.net/images/store/instructors/Nova-Tabassum-120.jpg',
        },
        {
            writerId: '0003',
            name: 'Shahnaz Shanta',
            edu: 'Civil Engineering, Bangladesh University of Engineering and Technology (BUET)',
            img: 'https://d1yreyj8btzg0t.cloudfront.net/images/store/instructors/Shahanaz-Shanta-120.jpg',
        },
        {
            writerId: '0004',
            name: 'Muhtadi Ahnaf Ansari',
            edu: 'Mechanical Engineering, Bangladesh University of Engineering and Technology (BUET)',
            img: 'https://d1yreyj8btzg0t.cloudfront.net/images/store/instructors/Muhtadi-Ahnaf-Ansari-120.jpg',
        },
    ]



    return (
      <div className="mx-4">
        <div>
          <div>
            <h1 className="text-2xl text-left font-extrabold">
              HSC Chemistry 2nd Paper Interactive Guide
            </h1>
          </div>

          <div>
            <h1 className="text-2xl mt-4 text-left font-extrabold">
              লেখকবৃন্দ
            </h1>
          </div>

          {/* লেখকবৃন্দ >>> writers  */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 my-7 ">
            {writersData.map((eachObj) => (
              <div key={eachObj.writerId} className="">
                <div className="flex w-full">
                  <div
                    width="48px"
                    className="w-2/5 flex justify-center items-center rounded-full "
                  >
                    <img
                      className=" rounded-full"
                      style={{ objectFit: "fill" }}
                      width="48px"
                      height="48px"
                      src={eachObj.img}
                      alt="writer"
                    />
                  </div>
                  <div className=" ">
                    <h1 className="text-xl text-left ">{eachObj.name}</h1>
                    <p style={{ fontSize: "12px" }} className=" text-left">
                      {eachObj.edu}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* বই সম্পর্কে >>> about book  */}
        <div className="mr-4">
          <h1 className=" text-2xl mt-4 text-left font-extrabold">
            বই সম্পর্কে
          </h1>
          <br />

          <div className="text-left">
            <p>
              তুমি কি রসায়ন ২য় পত্র নিয়ে সকল সমস্যার সবচেয়ে সহজতম সমাধান খুঁজছো?
              তাহলে তুমি সাহায্য পাওয়ার জন্য একদম সঠিক জায়গায় এসেছো। আমরা
              নিশ্চিত করবো এইচএসসি রসায়ন ২য় পত্র নিয়ে যা কিছু জানা দরকার তার
              সবকিছু তুমি জানো খুব সম্প্রতি প্রকাশিত হওয়া আমাদের "এইচএসসি রসায়ন
              ২য় পত্র ইন্টার‍্যাকটিভ গাইড" এর সাহায্যে।
            </p>
            <br />
            {!showText ? (
              <p>
                <p>
                  অধিকাংশ এইচএসসি পরীক্ষার্থীর কাছে এইচএসসি ২য় পত্র একটি কঠিন
                  বিষয় হিসেবে ধরা দেয়। এটা কিন্তু আসলে কঠিন নয়। বিশ্বাস করো আর
                  না করো, প্রত্যেকটি অধ্যায়ের ঠিক কোথায় কোথায় তুমি সমস্যা অনুভব
                  করো সেটা আমরা বুঝি। কতিপয় মেধাবী লেখকবৃন্দের দ্বারা
                  প্রস্তুতকৃত চমৎকার এই বইটিতে রসায়নের খুঁটিনাটি প্রত্যেকটি
                  বিষয়ের উপর নজরপাত করা হয়েছে যা তোমাকে এইচএসসি রসায়ন ২য় পত্র
                  পড়তে এবং শিখতে দারুণভাবে সাহায্য করবে।
                </p>
                <br />
              </p>
            ) : null}
            {!showText ? (
              <p>
                <p>
                  এইচএসসিতে রসায়ন ২য় পত্রে ভালো করার জন্য আমরা নিয়ে এসেছি
                  প্রতিটি অধ্যায়ের সবগুলো টপিকের সবচেয়ে সহজ ব্যাখ্যার সাথে সূত্র
                  প্রয়োগে আরও দক্ষ হওয়ার কার্যকরী টিপস।
                </p>
                <br />
              </p>
            ) : null}
            {!showText ? (
              <p>
                <p>
                  একজন এইচএসসি শিক্ষার্থী হিসেবে তোমার জন্য বইয়ের প্রতেকটি টপিক
                  পুঙ্খানুপুঙ্খভাবে বুঝা খুবই গুরুত্বপূর্ণ। বইটি বিশেষভাবে
                  এইচএসসি রসায়ন ২য় পত্র আয়ত্ত্ব করতে তোমাকে সহায়তা করার
                  উদ্দেশ্যেই তৈরি করা হয়েছে। তাহলে আর চিন্তা কেন যখন আমরা
                  সবগুলো সমস্যার সমাধান পেয়ে গেছি?
                </p>
                <br />
              </p>
            ) : null}
            {!showText ? (
              <p>
                <p>
                  তাহলে তাড়াতাড়ি চমৎকার গ্রেড অর্জন করতে এই বইটি নিয়ে ফেলো এবং
                  অনুশীলন করো!
                </p>
                <br />
              </p>
            ) : null}

            <p className="text-center">
              <u>
                <span
                  onClick={() => {
                    showText ? setShowTest(false) : setShowTest(true);
                  }}
                  className="text-blue-600 "
                >
                  {!showText ? "সংক্ষিপ্ত করুন" : "আরো দেখুন"}
                </span>{" "}
              </u>
            </p>
          </div>
        </div>
      </div>
    );
};

export default BookDetailsText;