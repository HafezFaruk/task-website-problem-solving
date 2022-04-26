import { Alert, CircularProgress } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import useFirebase from "../Hooks/useFirebase";

const SignUpModal = ({ setShowSignUp, setShowLogin }) => {
  const [signUpData, setSignUpData] = useState({});
  const { registrationUser, isLoading, authNotice, setAuthNotice } =
    useFirebase();

  // function for geting input value from the user for signup
  const getData = (e) => {
    const propertyName = e.target.name;
    if (propertyName === "notRobote") {
      setSignUpData({ ...signUpData, [propertyName]: e.target.checked });
    } else {
      setSignUpData({ ...signUpData, [propertyName]: e.target.value });
    }
  };

  //handle submit function
  const handleSubmit = (e) => {
    if (signUpData.password === signUpData.conPassword) {
      // checking both password (password and confirmed password )
      registrationUser(signUpData.emailAdd, signUpData.password); // gegistration user with firebase
    } else {
      console.log("please confirm password again");
      alert("please confirm password again");
    }
    //   setShowSignUp(false)
    e.preventDefault();
    e.target.reset();
  };

  const handleToggle = () => {
    setShowSignUp(false);
    setShowLogin(true);
  };

  return (
    <>
      <div className="bg-black bg-opacity-70 absolute inset-0 h-screen flex justify-center items-center ">
        <div
          style={{ height: "100%" }}
          className="overflow-auto rounded-lg w-full flex justify-center items-center "
        >
          <div
            style={{ width: "500px" }}
            className=" flex rounded-lg mx-auto my-auto justify-center items-center bg-white "
          >
            {/* modal body ==================== */}

            <div
              style={{
                width: "500px",
                backgroundColor: "rgba(240, 172, 1, 0.05)",
              }}
              className="rounded pt-10 w-14 "
            >
              <h1 className="text-2xl font-black">
                আপনার অ্যাকাউন্টের জন্য{" "}
                <span className="text-yellow-400">সাইন আপ করুন</span>
              </h1>

              <form
                onSubmit={(e) => {
                  handleSubmit(e);
                }}
                className="rounded px-8 pt-6 pb-8 mb-4"
              >
                <div className="mb-6  ">
                  <label
                    className="block text-gray-700 text-sm text-left font-bold mb-2"
                    htmlFor="fullName"
                  >
                    পুরো নাম <span className="text-yellow-400">*</span>{" "}
                  </label>
                  <input
                    onChange={(e) => {
                      getData(e);
                    }}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    name="fullName"
                    id="fullName"
                    type="text"
                    required
                  />
                </div>

                <div className="my-6  ">
                  <label
                    className="block text-gray-700 text-sm text-left font-bold mb-2"
                    htmlFor="phnNumber"
                  >
                    ফোন নম্বর <span className="text-yellow-400">*</span>{" "}
                  </label>
                  <input
                    onChange={(e) => {
                      getData(e);
                    }}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    name="phnNumber"
                    id="phnNumber"
                    type="text"
                    required
                  />
                </div>

                <div className="my-6  ">
                  <label
                    className="block text-gray-700 text-sm text-left font-bold mb-2"
                    htmlFor="emailAd"
                  >
                    ইমেইল <span className="text-yellow-400">*</span>{" "}
                  </label>
                  <input
                    onChange={(e) => {
                      getData(e);
                    }}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    name="emailAdd"
                    id="emailAd"
                    type="email"
                    required
                  />
                </div>

                <div className="my-6  ">
                  <label
                    className="block text-gray-700 text-sm text-left font-bold mb-2"
                    htmlFor="password"
                  >
                    পাসওয়ার্ড <span className="text-yellow-400">*</span>{" "}
                  </label>
                  <input
                    onChange={(e) => {
                      getData(e);
                    }}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="password"
                    name="password"
                    type="password"
                    required
                  />
                </div>

                <div className="my-6  ">
                  <label
                    className="block text-gray-700 text-sm text-left font-bold mb-2"
                    htmlFor="conPass"
                  >
                    পাসওয়ার্ড নিশ্চিত করুন{" "}
                    <span className="text-yellow-400">*</span>{" "}
                  </label>
                  <input
                    onChange={(e) => {
                      getData(e);
                    }}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="conPass"
                    name="conPassword"
                    type="password"
                    required
                  />
                </div>

                <div className="my-6 p-4 border-2 flex justify-start items-center w-auto ">
                  <input
                    onChange={(e) => {
                      getData(e);
                    }}
                    name="notRobote"
                    type="checkbox"
                    htmlFor="notRobote"
                  />
                  <label
                    className="block mx-5 text-gray-700 text-sm text-left font-bold mb-2"
                    name="notRobote"
                    htmlFor="notRobote"
                  >
                    I’m not a robot
                  </label>
                </div>

                {(authNotice === 0 && null) ||
                  (authNotice === 1 && (
                    <Alert severity="success">
                      Sign Up success - Thank You !!
                    </Alert>
                  )) ||
                  (authNotice === 2 && (
                    <Alert severity="error">
                      There is something wrong — check it out!
                    </Alert>
                  ))}

                <div className=" flex justify-start items-center w-full  ">
                  <button
                    type="submit"
                    className=" text-white rounded px-3 mt-3 py-1 hover:bg-yellow-400 bg-yellow-300 transition-all duration-200 ease-linear w-full "
                  >
                    {isLoading ? (
                      <CircularProgress size={21} color="secondary" />
                    ) : (
                      "Sign Up"
                    )}
                  </button>
                </div>

                <div className="border-t-2 pt-6 mt-6">
                  <p>
                    ইতোমধ্যে বিসিএস জয়যাত্রা ব্যবহারকারী ?{" "}
                    <Link to="signUp" onClick={handleToggle} className="text-yellow-300">
                      লগ-ইন
                    </Link>
                  </p>
                </div>
              </form>

              <div className="flex justify-end mr-4 mb-4">
                <Link to="/"
                  onClick={() => {
                    setShowSignUp(false);
                    setAuthNotice(0);
                  }}
                  className=" px-4 transition-all duration-200 ease-linear hover:text-red-500 font-black text-black"
                >
                  Cancel
                </Link>
              </div>
            </div>

            {/* End modal body ------------------------ */}
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUpModal;
