import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import Auth from "../../services/auth";
import { useRecoilState } from "recoil";
import LoginState from "../../states/LoginState";
import ThemeDropdown from "./ThemeDropdown";

const MenuDropdown = () => {
  const navigate = useNavigate("");
  const [loginState, setLoginState] = useRecoilState(LoginState);
  const basicInputs = [
    {
      id: "home",
      label: "홈",
    },
    {
      id: "board",
      label: "게시판",
    },
  ];
  const loggedInInputs = [
    {
      id: 1,
      label: `@${Auth.isLoggedIn() ? loginState.username : ""}`,
      disabled: true,
    },
    {
      id: 2,
      label: "마이페이지",
    },
    {
      id: 3,
      label: "관리페이지",
    },
    {
      id: 4,
      label: "로그아웃",
    },
  ];
  const loggedOutInputs = [
    {
      id: 5,
      label: `로그인`,
    },
    {
      id: 6,
      label: "회원가입",
    },
  ];

  const handleNavigate = (id) => {
    switch (id) {
      case "home":
        navigate("/");
        break;
      case "board":
        navigate("/board");
        break;
      case 1:
        navigate("/");
        break;
      case 2:
        navigate("/mypage");
        break;
      case 3:
        navigate("/management");
        break;
      case 5:
        navigate("/signin");
        break;
      case 6:
        navigate("/signup");
        break;
      default:
    }
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
            <span className="sr-only">Navigation</span>
            <svg width="24" height="24" fill="none" aria-hidden="true">
              <path
                d="M12 6v.01M12 12v.01M12 18v.01M12 7a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </span>
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
            {basicInputs.map((input) => {
              return (
                <Menu.Item key={input.id}>
                  {({ active }) => (
                    <button
                      onClick={() => handleNavigate(input.id)}
                      className={`${
                        active ? "bg-gray-100 dark:bg-slate-700" : ""
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm font-semibold text-gray-900 dark:text-gray-200`}
                    >
                      {input.label}
                    </button>
                  )}
                </Menu.Item>
              );
            })}
            <div className="flex justify-center">
              <div className="my-2 w-24 border-b-2 border-slate-200 dark:border-slate-700" />
            </div>
            {Auth.isLoggedIn()
              ? loggedInInputs
                  .filter((input) => {
                    if (loginState.member_id === 0 && input.id === 2) {
                      return false;
                    } else if (loginState.member_id !== 0 && input.id === 3) {
                      return false;
                    } else {
                      return true;
                    }
                  })
                  .map((input) => {
                    return (
                      <Menu.Item key={input.id}>
                        {({ active }) => (
                          <button
                            onClick={() => {
                              if (input.id === 4) {
                                handleSignOut();
                              } else {
                                handleNavigate(input.id);
                              }
                            }}
                            disabled={input.disabled ? true : false}
                            className={`${
                              active ? "bg-gray-100 dark:bg-slate-700" : ""
                            } group flex w-full items-center rounded-md px-2 py-2 text-sm font-semibold text-gray-900 dark:text-gray-200`}
                          >
                            {input.label}
                          </button>
                        )}
                      </Menu.Item>
                    );
                  })
              : loggedOutInputs.map((input) => {
                  return (
                    <Menu.Item key={input.id}>
                      {({ active }) => (
                        <button
                          onClick={() => handleNavigate(input.id)}
                          className={`${
                            active ? "bg-gray-100 dark:bg-slate-700" : ""
                          } group flex w-full items-center rounded-md px-2 py-2 text-sm font-semibold text-gray-900 dark:text-gray-200`}
                        >
                          {input.label}
                        </button>
                      )}
                    </Menu.Item>
                  );
                })}
            <div className="flex justify-center">
              <div className="my-2 w-24 border-b-2 border-slate-200 dark:border-slate-700" />
            </div>
            <Menu.Item>
              <div className="flex w-full items-center rounded-md px-2 pb-2 text-sm font-semibold text-gray-900 dark:text-gray-200">
                <span>테마</span>
                <ThemeDropdown />
              </div>
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default MenuDropdown;
