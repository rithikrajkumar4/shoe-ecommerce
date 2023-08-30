import React from "react";
import { SiNike } from "react-icons/si";

export default function MembershipComponents() {
  return (
    <div>
      <div>
        <h2 className="text-4xl font-mono mt-10 ml-40 uppercase">
          Soleranger Membership
        </h2>
      </div>
      <div className="bg-black text-white">
        <div className="flex justify-around  ">
          <div className="text-center flex flex-col items-center justify-center">
            <h2 className="text-5xl font-bold font-mono w-[55%]">
              Become a Member
            </h2>
            <h6 className="text-xl font-serif">
              Sign up for free. Join the community.
            </h6>
            <div>
              <button className="w-[120px] h-[50px] rounded-full bg-white text-black m-4 hover:bg-gray-500 font-sans">
                Join Us
              </button>
              <button className="w-[120px] h-[50px] rounded-full bg-white text-black m-4 hover:bg-gray-500 font-sans">
                Sign In
              </button>
            </div>
          </div>
          <div>
            <SiNike className="text-[400px]" />
          </div>
        </div>
      </div>
    </div>
  );
}
