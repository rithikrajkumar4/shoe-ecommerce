import Link from "next/link";
import React from "react";

const SignIn = () => {
  return (
    <div>
      <form action="login" method="post">
        <div className="flex flex-col items-center justify-center">
          <p>Login Credentials</p>
          <div>
            <label>Email:</label>
            <input type="email" className="border-2" />
          </div>
          <div>
            <label>Password:</label>
            <input type="password" className="border-2" />
          </div>
          <button type="submit" className="w-40 h-10 bg-black text-white">
            Login
          </button>
          <div className="mt-4">
            <p>
              Not a member? <Link href={"/auth/signup"}>Sign up here</Link>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
