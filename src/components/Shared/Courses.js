import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faShareNodes } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { useNavigate, useParams } from 'react-router-dom';

const Courses = ({ heText, pgText, cardObj }) => {

    const [ blackHeading, setBlackHeading ] = useState('')
    const [ yellowHeading, setyellowHeding ] = useState('')
    const navigate = useNavigate();
    const params = useParams();

    // font awesome icon --------------------------
    const iCart = <FontAwesomeIcon icon={ faCartPlus } />
    const iHeart = <FontAwesomeIcon icon={ faHeart } />
    const iShareNodes = <FontAwesomeIcon icon={ faShareNodes } />
    
    // calling the last word finder function.
    useEffect(()=>{
    designHeading( heText )
    },[])

    // Function for finding last word of the heading text
    // so we can color the text yellow
    const designHeading = ( headingText )=>{
        const textArray =  headingText.trim().split(' ')
        if( textArray ){
            if( textArray.length < 2){
                setBlackHeading(textArray[0])
            }
            else{
                setyellowHeding( textArray[textArray.length - 1] )
                textArray.splice(textArray.length-1, 1)
                const joinText = textArray.join(' ')
                setBlackHeading( joinText )
            }
        }
    }

    const handleEnroll = ( objId ) =>{
        const selectedObj = cardObj.find((eachObj)=>{
            return eachObj.courseId === objId;
        })
        
        if( window.location.pathname.length === 1){
            navigate(`home/det/${selectedObj.courseId}`, { state: { selectedObj }})
        }
        else if(window.location.pathname.split('/').includes('det')){
            navigate(`/${window.location.pathname.split('/')[1]}/det/${selectedObj.courseId}`, { state: { selectedObj }})
        }
        else{
            navigate(`det/${selectedObj.courseId}`, { state: { selectedObj }})
        }
        window.scrollTo(0, 0)
    }
    

    return (
      <div className="  flex justify-center items-center ">
        <div className=" w-full mx-auto ">
          {/* courses heading and details paragraph  ------------- */}
            {heText && (       
            <h1
               
                className={` text-2xl sm:text-4xl  ${heText && !pgText && "mt-10"} ${
                heText && pgText && "pb-4"
              } `}
            >
              {blackHeading}
              <span className="text-yellow-400 ml-3">{yellowHeading}</span>
            </h1>
          )}
          {pgText && (
            <p className="md:w-2/4 sm:mx-6 md:text-center sm:text-left  md:mx-auto ">
              {pgText}
            </p>
          )}

          {/* courses card container ----------------------------- */}
          <div className={`grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-4   py-6 mx-2 sm:mx-14 sm mt-14`}>
            {/* Single Card container ------------------------------------ */}
            {cardObj.map((eachCourse) => (
              <div key={eachCourse.courseId}>
                <div
                  onClick={() => {
                    handleEnroll(eachCourse.courseId);
                  }}
                 
                  className=" hover:scale-105  rounded-lg flex flex-col shadow hover:shadow-2xl shadow-indigo-500/50 transition-all duration-300 ease-linear "
                >
                  {/* card image ---------------------------------- */}
                  <div className="overflow-hidden rounded-t-xl h-48 ">
                    <img
                      height="100%"
                      src={eachCourse.banerImg}
                      className=""
                      width="100%"
                      alt="ba-gun"
                    />
                  </div>

                  {/* card details -------------------------------- */}
                  <div className=" p-2">
                    <div className=" flex justify-between items-center ">
                      <div className="flex">
                        <div className=" rounded-full overflow-hidden">
                          <img
                            src={eachCourse.tecImg}
                            alt="user"
                            height="20px"
                            width="20px"
                            className="rounded-full"
                          />
                        </div>
                        <h1 className="ml-2">{eachCourse.tecName}</h1>
                      </div>

                      <div className="flex ">
                        <p className="mr-2">{iCart}</p>
                        <p className="mr-2">{iHeart}</p>
                        <p>{iShareNodes}</p>
                      </div>
                    </div>

                    {/* course title ------------------------------ */}
                    <h1 className="mt-4 text-left truncate font-bold ">
                      {eachCourse.title}
                    </h1>

                    {/* course price and button ------------------- */}
                    <div className="flex justify-between items-center mt-5 mb-3 ">
                      <h1 className="text-2xl font-bold">
                        ??? {eachCourse.price}
                      </h1>
                      <button
                        onClick={() => {
                          handleEnroll(eachCourse.courseId);
                        }}
                        className=" px-2 py-1 bg-yellow-300 text-white rounded "
                      >
                        ??????????????????????????? ???????????????
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
};

export default Courses;