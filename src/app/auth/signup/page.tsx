import Link from "next/link";
import React from "react";

const Sign = () => {
  return (
    <div>
      <form action="signUp" method="post">
        <div className="flex justify-center flex-col items-center font-serif">
          <div className="font-bold text-4xl m-4 ">Sing-Up/ Register</div>
          <div className="flex flex-col items-center ">
            <label htmlFor="email" className="font-semibold text-2xl">
              Username
              <br />
            </label>
            <div className="flex flex-col text-left text-2xl">
              <label htmlFor="fname">First Name:</label>
              <input type="text" name="fname" id="fname" className="border-2" />
              <label htmlFor="lname">Last Name:</label>
              <input type="text" name="lname" id="lname" className="border-2" />
            </div>
            <div className="flex flex-col items-center">
              <div className="font-semibold text-2xl">Your Email Address</div>
              <div className="flex flex-col text-left text-2xl">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="border-2"
                />
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="font-semibold text-2xl">Your Password</div>
              <div className="flex flex-col text-left text-2xl">
                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="border-2"
                />
                <label htmlFor="cpassword">Confirm Password:</label>
                <input
                  type="password"
                  name="cpassword"
                  id="cpassword"
                  className="border-2"
                />
              </div>
            </div>
          </div>
          <button type="submit" className="bg-black text-white w-40 h-10 mt-8">
            Submit
          </button>
          <div className="mt-4">
            <p className="text-2xl">
              Already a member? <Link href={"/auth/signin"}>Login Here</Link>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Sign;
