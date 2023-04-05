import React from "react";
import earth from "../img/earth.gif";
import Auth from "../services/auth";
import { useRecoilValue } from "recoil";
import LoginState from "../states/LoginState";

const Main = () => {
  const loginState = useRecoilValue(LoginState);
  return (
    <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="min-w-full max-w-xl">
        <div className="flex flex-col items-center">
          <div className="-my-2 overflow-x-auto py-2 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
            <div className="inline-block min-w-full overflow-hidden border-gray-200 align-middle">
              <div className="pb-20 text-4xl font-extrabold">
                <span className="bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
                  {Auth.isLoggedIn() ? loginState.username + "! " : ""}Welcome
                  to YJK Forum{" "}
                </span>
              </div>
              <img src={earth} alt="main" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
