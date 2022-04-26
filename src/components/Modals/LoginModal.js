import { Alert, CircularProgress } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import useFirebase from "../Hooks/useFirebase";

const LoginModal = ({ setShowLogin, setShowSignUp }) => {
  const { LoginUser, resetPassword, isLoading, authNotice, setAuthNotice } =
    useFirebase();
  const [loginInfo, setLoginInfo] = useState({});

  // getting user login information
  const getLoninData = (e) => {
    const propertyName = e.target.name;
    if (propertyName === "notRobot" || propertyName === "rememberMe") {
      setLoginInfo({ ...loginInfo, [propertyName]: e.target.checked });
    } else {
      setLoginInfo({ ...loginInfo, [propertyName]: e.target.value });
    }
  };

  // function for handling login
  const handleSubmit = (e) => {
    e.preventDefault();
    LoginUser(loginInfo.userName, loginInfo.userPass, loginInfo.rememberMe); // Login the user with firebase
      setShowLogin(false)
    e.target.reset();
  };

  // fucntion for reset password
  const handleResetPass = () => {
    if (loginInfo.userName) {
      resetPassword(loginInfo.userName);
    } else {
      alert("Please enter user name first then try to reset password");
    }
  };

  const handleToggle = () => {
    setShowLogin(false);
    setShowSignUp(true);
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
            className="flex rounded-lg mx-auto justify-center items-center bg-white "
          >
            {/* modal body ==================== */}

            <div className=" flex justify-center items-center ">
              <div
                style={{
                  width: "500px",
                  backgroundColor: "rgba(240, 172, 1, 0.05)",
                }}
                className=" rounded pt-10 w-14 "
              >
                <h1 className="text-2xl font-black">
                  আপনার অ্যাকাউন্টে{" "}
                  <span className="text-yellow-400">লগ-ইন করুন</span>
                </h1>

                <form
                  onSubmit={(e) => {
                    handleSubmit(e);
                  }}
                  className="rounded px-8 pt-6 pb-8 mb-4"
                >
                  <div className="my-6  ">
                    <label
                      className="block text-gray-700 text-sm text-left font-bold mb-2"
                      htmlFor="emailAd"
                    >
                      নাম <span className="text-yellow-400">*</span>{" "}
                    </label>
                    <input
                      onChange={(e) => {
                        getLoninData(e);
                      }}
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      name="userName"
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
                      পাসওয়ার্ড <span className="text-yellow-400">*</span>{" "}
                    </label>
                    <input
                      onChange={(e) => {
                        getLoninData(e);
                      }}
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      name="userPass"
                      id="password"
                      type="password"
                      required
                    />
                  </div>

                  <div className="border-2 flex justify-around p-3 rounded-lg ">
                    <div className=" flex justify-start items-center w-auto ">
                      <input
                        onChange={(e) => {
                          getLoninData(e);
                        }}
                        type="checkbox"
                        name="notRobot"
                        htmlFor="notRobote"
                      />
                      <label
                        className="block mx-5 text-gray-700 text-sm text-left font-bold mb-2"
                        id="notRobote"
                      >
                        I’m not a robot
                      </label>
                    </div>
                    <div className="flex justify-start items-center w-auto ">
                      <input
                        onChange={(e) => {
                          getLoninData(e);
                        }}
                        type="checkbox"
                        name="rememberMe"
                        htmlFor="rememberMe"
                      />
                      <label
                        className="block ml-3 text-gray-700 text-sm text-left font-bold "
                        id="rememberMe"
                      >
                        Remember me
                      </label>
                    </div>
                  </div>

                  <div className="flex justify-between items-center my-2 ">
                    <p
                      onClick={handleResetPass}
                      className="text-yellow-400 cursor-pointer"
                    >
                      Forget password?
                    </p>
                  </div>

                  {(authNotice === 0 && null) ||
                    (authNotice === 1 && (
                      <Alert severity="success">
                        Log in success - Thank You !!
                      </Alert>
                    )) ||
                    (authNotice === 2 && (
                      <Alert severity="error">
                        There is something wrong — check it out!
                      </Alert>
                    ))}

                  <div className=" flex justify-start items-baseline w-full ">
                    <button
                      type="submit"
                      className=" text-white rounded px-3 mt-3 py-1 hover:bg-yellow-400 bg-yellow-300 transition-all duration-200 ease-linear w-full "
                    >
                      {isLoading ? (
                        <CircularProgress size={21} color="secondary" />
                      ) : (
                        "Log in"
                      )}
                    </button>
                  </div>

                  <div className="border-t-2 pt-6 mt-6">
                    {/* <p>বিসিএস জয়যাত্রায় নতুন ? <NavLink to='/signUp' className='text-yellow-300 cursor-pointer' >এখন সাইন আপ করুন</NavLink> </p> */}
                    <p>
                      বিসিএস জয়যাত্রায় নতুন ?{" "}
                                          <Link
                                              to="/login"
                        onClick={handleToggle}
                        className="text-yellow-300 cursor-pointer"
                      >
                        সাইন আপ করুন
                      </Link>
                    </p>
                  </div>
                </form>
                <div className="flex justify-end mr-4 mb-4">
                  <Link to="/"
                    onClick={() => {
                      setShowLogin(false);
                      setAuthNotice(0);
                    }}
                    className="px-4 font-black text-black hover:text-red-500 "
                  >
                    Cancel
                  </Link>
                </div>
              </div>
            </div>

            {/* End modal body ------------------------ */}
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginModal;
