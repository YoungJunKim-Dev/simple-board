import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import Auth from "../../services/auth";
import LoginState from "../../states/LoginState";

const UserDropdown = () => {
  const navigate = useNavigate("");
  const [loginState, setLoginState] = useRecoilState(LoginState);

  const isAdmin = () => {
    if (loginState.member_id === 0) {
      return true;
    } else {
      return false;
    }
  };
  const handleNavigate = () => {
    isAdmin() ? navigate("/management") : navigate("/mypage");
  };
  const handleSignOut = () => {
    Auth.logout().then(() => {
      Auth.isLoggedOut()
        ? setLoginState(null)
        : setLoginState({ ...loginState });
      navigate("/");
    });
  };
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-8 justify-center rounded-md px-4 py-2 align-middle text-sm font-medium text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
          <span className="ml-6 block text-slate-400 hover:text-slate-500 dark:hover:text-slate-300">
            <span className="sr-only">user profile</span>
            <div className="h-5 w-5 flex-shrink-0">
              <img
                className="h-5 w-5 rounded-full"
                src={loginState.image}
                alt="profile"
              />
            </div>
          </span>
          {/* <div className="pointer-events-none inset-y-0 right-0 flex items-center  "> */}
          <span>
            <svg
              className="h-4 w-4 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 10"
            >
              <path
                d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                className="text-gray-700 dark:text-slate-200"
              />
            </svg>
          </span>
          {/* </div> */}
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-2 w-28 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-slate-800">
          <div className="px-1 py-1 ">
            <Menu.Item>
              <button
                className="group flex w-full items-center rounded-md px-2 py-2 text-sm font-semibold text-gray-900 dark:text-gray-200"
                disabled="true"
              >
                {`@${loginState.username}`}
              </button>
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={handleNavigate}
                  className={`${
                    active ? "bg-gray-100 dark:bg-slate-700" : ""
                  } group flex w-full items-center rounded-md px-2 py-2 text-sm font-semibold text-gray-900 dark:text-gray-200`}
                >
                  {isAdmin() ? "관리페이지" : "마이페이지"}
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={handleSignOut}
                  className={`${
                    active ? "bg-gray-100 dark:bg-slate-700" : ""
                  } group flex w-full items-center rounded-md px-2 py-2 text-sm font-semibold text-gray-900 dark:text-gray-200`}
                >
                  로그아웃
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default UserDropdown;
