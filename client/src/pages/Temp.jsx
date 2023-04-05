import React from "react";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import LoginState from "../states/LoginState";

const Temp = () => {
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(LoginState);

  const toggle = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="min-w-full max-w-xl">
        <div className="flex flex-col">
          <div className="not-prose relative overflow-hidden rounded-xl bg-slate-50 dark:bg-slate-800/25">
            <div className="bg-grid-slate-100 dark:bg-grid-slate-700/25 absolute inset-0"></div>
            <div className="relative overflow-auto rounded-xl p-8">
              <button onClick={toggle}>로그인</button>
            </div>
            <div class="pointer-events-none absolute inset-0 rounded-xl border border-black/5 dark:border-white/5"></div>
          </div>
          <div class="mt-4 -mb-3">
            <div class="not-prose relative overflow-hidden rounded-xl bg-slate-50 dark:bg-slate-800/25">
              <div class="bg-grid-slate-100 dark:bg-grid-slate-700/25 absolute inset-0 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))] dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]"></div>
              <div class="relative overflow-auto rounded-xl">
                <div class="my-8 overflow-hidden shadow-sm">
                  <table class="w-full table-auto border-collapse text-sm">
                    <thead>
                      <tr>
                        <th class="border-b p-4 pl-8 pt-0 pb-3 text-left font-medium text-slate-400 dark:border-slate-600 dark:text-slate-200">
                          Song
                        </th>
                        <th class="border-b p-4 pt-0 pb-3 text-left font-medium text-slate-400 dark:border-slate-600 dark:text-slate-200">
                          Artist
                        </th>
                        <th class="border-b p-4 pr-8 pt-0 pb-3 text-left font-medium text-slate-400 dark:border-slate-600 dark:text-slate-200">
                          Year
                        </th>
                      </tr>
                    </thead>
                    <tbody class="bg-white dark:bg-slate-800">
                      <tr>
                        <td class="border-b border-slate-100 p-4 pl-8 text-slate-500 dark:border-slate-700 dark:text-slate-400">
                          The Sliding Mr. Bones (Next Stop, Pottersville)
                        </td>
                        <td class="border-b border-slate-100 p-4 text-slate-500 dark:border-slate-700 dark:text-slate-400">
                          Malcolm Lockyer
                        </td>
                        <td class="border-b border-slate-100 p-4 pr-8 text-slate-500 dark:border-slate-700 dark:text-slate-400">
                          1961
                        </td>
                      </tr>
                      <tr>
                        <td class="border-b border-slate-100 p-4 pl-8 text-slate-500 dark:border-slate-700 dark:text-slate-400">
                          Witchy Woman
                        </td>
                        <td class="border-b border-slate-100 p-4 text-slate-500 dark:border-slate-700 dark:text-slate-400">
                          The Eagles
                        </td>
                        <td class="border-b border-slate-100 p-4 pr-8 text-slate-500 dark:border-slate-700 dark:text-slate-400">
                          1972
                        </td>
                      </tr>
                      <tr>
                        <td class="border-b border-slate-200 p-4 pl-8 text-slate-500 dark:border-slate-600 dark:text-slate-400">
                          Shining Star
                        </td>
                        <td class="border-b border-slate-200 p-4 text-slate-500 dark:border-slate-600 dark:text-slate-400">
                          Earth, Wind, and Fire
                        </td>
                        <td class="border-b border-slate-200 p-4 pr-8 text-slate-500 dark:border-slate-600 dark:text-slate-400">
                          1975
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div class="pointer-events-none absolute inset-0 rounded-xl border border-black/5 dark:border-white/5"></div>
            </div>
          </div>
          <div className="-my-2 overflow-x-auto py-2 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
            <div className="inline-block min-w-full overflow-hidden border-b border-gray-200 align-middle shadow sm:rounded-lg">
              <table className="min-w-full">
                <thead>
                  <tr>
                    <th className="border-b border-gray-200 bg-gray-50 px-6 py-3 text-left text-xs font-medium uppercase leading-4 tracking-wider text-gray-500">
                      번호
                    </th>
                    <th className="border-b border-gray-200 bg-gray-50 px-6 py-3 text-left text-xs font-medium uppercase leading-4 tracking-wider text-gray-500">
                      제목
                    </th>
                    <th className="border-b border-gray-200 bg-gray-50 px-6 py-3 text-left text-xs font-medium uppercase leading-4 tracking-wider text-gray-500">
                      작성자
                    </th>
                    <th className="border-b border-gray-200 bg-gray-50 px-6 py-3 text-left text-xs font-medium uppercase leading-4 tracking-wider text-gray-500">
                      작성일
                    </th>
                    <th className="border-b border-gray-200 bg-gray-50 px-6 py-3 text-left text-xs font-medium uppercase leading-4 tracking-wider text-gray-500">
                      조회
                    </th>
                    <th className="border-b border-gray-200 bg-gray-50 px-6 py-3 text-left text-xs font-medium uppercase leading-4 tracking-wider text-gray-500">
                      Edit
                    </th>
                    <th className="border-b border-gray-200 bg-gray-50 px-6 py-3 text-left text-xs font-medium uppercase leading-4 tracking-wider text-gray-500">
                      Delete
                    </th>
                  </tr>
                </thead>

                <tbody className="bg-white">
                  <tr>
                    <td className="whitespace-no-wrap border-b border-gray-200 px-6 py-4">
                      <div className="text-sm leading-5 text-gray-500">11 </div>
                    </td>
                    <td className="whitespace-no-wrap border-b border-gray-200 px-6 py-4">
                      <div className="flex items-center">
                        <div className="h-10 w-10 flex-shrink-0">
                          <img
                            className="h-10 w-10 rounded-full"
                            src="https://source.unsplash.com/user/erondu"
                            alt="admin dashboard ui"
                          />
                        </div>

                        <div className="ml-4">
                          <div className="text-sm font-medium leading-5 text-gray-900">
                            John Doe
                          </div>
                        </div>
                      </div>
                    </td>

                    <td className="whitespace-no-wrap border-b border-gray-200 px-6 py-4">
                      <div className="text-sm leading-5 text-gray-500">
                        john@example.com
                      </div>
                    </td>

                    <td className="whitespace-no-wrap border-b border-gray-200 px-6 py-4">
                      <div className="text-sm leading-5 text-gray-500">
                        1988-08-18
                      </div>
                    </td>
                    <td className="whitespace-no-wrap border-b border-gray-200 px-6 py-4">
                      <div className="text-sm leading-5 text-gray-500">
                        Vietnam
                      </div>
                    </td>

                    <td className="whitespace-no-wrap border-b border-gray-200 px-6 py-4 text-sm leading-5 text-gray-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-blue-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                        />
                      </svg>
                    </td>
                    <td className="whitespace-no-wrap border-b border-gray-200 px-6 py-4 text-sm leading-5 text-gray-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-red-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
                    </td>
                  </tr>
                  <tr>
                    <td className="whitespace-no-wrap border-b border-gray-200 px-6 py-4">
                      <div className="flex items-center">
                        <div className="h-10 w-10 flex-shrink-0">
                          <img
                            className="h-10 w-10 rounded-full"
                            src="https://source.unsplash.com/user/erondu"
                            alt="admin dashboard ui"
                          />
                        </div>

                        <div className="ml-4">
                          <div className="text-sm font-medium leading-5 text-gray-900">
                            John Doe
                          </div>
                        </div>
                      </div>
                    </td>

                    <td className="whitespace-no-wrap border-b border-gray-200 px-6 py-4">
                      <div className="text-sm leading-5 text-gray-500">
                        john@example.com
                      </div>
                    </td>

                    <td className="whitespace-no-wrap border-b border-gray-200 px-6 py-4">
                      <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                        Active
                      </span>
                    </td>

                    <td className="whitespace-no-wrap border-b border-gray-200 px-6 py-4 text-sm leading-5 text-gray-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-blue-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                        />
                      </svg>
                    </td>
                    <td className="whitespace-no-wrap border-b border-gray-200 px-6 py-4 text-sm leading-5 text-gray-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-red-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
                    </td>
                  </tr>
                  <tr>
                    <td className="whitespace-no-wrap border-b border-gray-200 px-6 py-4">
                      <div className="flex items-center">
                        <div className="h-10 w-10 flex-shrink-0">
                          <img
                            className="h-10 w-10 rounded-full"
                            src="https://source.unsplash.com/user/erondu"
                            alt="admin dashboard ui"
                          />
                        </div>

                        <div className="ml-4">
                          <div className="text-sm font-medium leading-5 text-gray-900">
                            John Doe
                          </div>
                        </div>
                      </div>
                    </td>

                    <td className="whitespace-no-wrap border-b border-gray-200 px-6 py-4">
                      <div className="text-sm leading-5 text-gray-500">
                        john@example.com
                      </div>
                    </td>

                    <td className="whitespace-no-wrap border-b border-gray-200 px-6 py-4">
                      <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                        Active
                      </span>
                    </td>

                    <td className="whitespace-no-wrap border-b border-gray-200 px-6 py-4 text-sm leading-5 text-gray-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-blue-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                        />
                      </svg>
                    </td>
                    <td className="whitespace-no-wrap border-b border-gray-200 px-6 py-4 text-sm leading-5 text-gray-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-red-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <form>
          <label className="block">
            <span className="block text-sm font-medium text-slate-700">
              Username
            </span>
            <input
              type="text"
              className="mt-1 block w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm placeholder-slate-400 shadow-sm
      invalid:border-pink-500 invalid:text-pink-600 focus:border-sky-500 focus:outline-none
      focus:ring-1 focus:ring-sky-500 focus:invalid:border-pink-500 focus:invalid:ring-pink-500
      disabled:border-slate-200 disabled:bg-slate-50
      disabled:text-slate-500 disabled:shadow-none
    "
            />
          </label>
        </form>
      </div>
    </div>
  );
};

export default Temp;
