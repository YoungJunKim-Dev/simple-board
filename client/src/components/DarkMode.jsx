import { useState } from "react";

const DarkMode = () => {
  const [isDark, setIsDark] = useState("다크");

  const setToSystemTheme = () => {
    localStorage.removeItem("theme");
    setIsDark("시스템");
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };
  const setToLightTheme = () => {
    localStorage.theme = "light";
    setIsDark("라이트");
    document.documentElement.classList.remove("dark");
  };
  const setToDarkTheme = () => {
    localStorage.theme = "dark";
    setIsDark("다크");
    document.documentElement.classList.add("dark");
  };

  return (
    <div>
      <p className="text-green-500">현재는 {isDark}모드 입니다.</p>
      <button
        className={
          "mt-4 inline-block rounded border border-white px-4 py-2 text-sm leading-none text-white hover:border-transparent hover:bg-white hover:text-teal-500 lg:mt-0"
        }
        onClick={setToSystemTheme}
      >
        시스템
      </button>
      <button
        className={
          "mt-4 inline-block rounded border border-white px-4 py-2 text-sm leading-none text-white hover:border-transparent hover:bg-white hover:text-teal-500 lg:mt-0"
        }
        onClick={setToLightTheme}
      >
        라이트
      </button>
      <button
        className={
          "mt-4 inline-block rounded border border-white px-4 py-2 text-sm leading-none text-white hover:border-transparent hover:bg-white hover:text-teal-500 lg:mt-0"
        }
        onClick={setToDarkTheme}
      >
        다크
      </button>
    </div>
  );
};

export default DarkMode;
