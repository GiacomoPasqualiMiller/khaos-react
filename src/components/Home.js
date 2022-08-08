import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [dark, setDark] = useState(true);
  const navigate = useNavigate();
  const darkModeBtn = () => {
    DarkMode()
    setDark(!dark);
  };
  const DarkMode = () => {
    /* if (
      localStorage.getItem("color-theme") === "dark" ||
      (!("color-theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) { */
    if(dark){
      document.documentElement.classList.add("dark");
    }else{
      document.documentElement.classList.remove("dark");
    }
    /* } else { */
    /* } */
    console.log("okokkok");
  };

  useEffect(() => {
    const fetchData = async () => {
      DarkMode();
    };
    fetchData();
  }, []);

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="css/style.css" />
        <title>KHAOS</title>
        <script src="js/script.js" defer></script>
      </head>
      <body className="h-screen bg-white dark:bg-black ">
        <header className="container mx-auto relative">
          <section
            id="header"
            className="flex w-full justify-center flex-wrap p-2.5"
          >
            <div className="flex w-full justify-center align-baseline dark:bg-black gap-2">
              <h1 className="text-lg font-bold text-center p-1 px-2 rounded-md text-white  bg-red-600">
                KHAOS MARVEL
              </h1>
            </div>
            <button
              id="theme-toggle"
              className="absolute top-2 right-2 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outlink-none focus:ring-4 focus:ring-gray-700 dark:focus:ring-gray-200 rounded-lg p-2.5"
              onClick={() => darkModeBtn()}
            >
              <svg
                id="theme-toggle-dark-icon"
                className="w-5 h-5 absolute top-2 right-2"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
              </svg>

              <svg
                id="theme-toggle-light-icon"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                  fillRule="evenodd"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </section>
        </header>

        <section id="buttons">
          <div className="flex flex-row justify-center p-3 m-4 align-center flex-nowrap dark:bg-black rounded-md">
            <a
              onClick={() => navigate("/regole-generali")}
              className="w-1/2 text-center p-2 px-4 font-bold text-xl  uppercase rounded-md duration-200 hover:scale-110 bg-red-600 text-white shadow-md shadow-gray-500 dark:shadow-white"
            >
              Regole generali
            </a>
          </div>

          <div className="mx-auto flex flex-row justify-center align-center flex-nowrap">
            <a
              onClick={() => navigate("/iron-man")}
              className="w-1/2 m-4 bg-white  dark:bg-black"
            >
              <img
                src={require("../images/icon-iron-man.jpg")}
                alt=""
                className="w-full shadow-xl shadow-yellow-600 rounded-md duration-200 hover:scale-110"
              />
            </a>
            <a
              onClick={() => navigate("/capitan-marvel")}
              className="w-1/2 m-4 bg-white dark:bg-black"
            >
              <img
                src={require("../images/icon-capitan-marvel.jpg")}
                alt=""
                className="w-full shadow-xl shadow-blue-600 rounded-md  transition-all duration-200 hover:scale-110"
              />
            </a>
          </div>
          <div className="mx-auto flex flex-row justify-center align-center flex-nowrap">
            <a
              onClick={() => navigate("/wanda")}
              className="w-1/2 h-[200px] m-4 bg-white dark:bg-black"
            >
              <img
                src={require("../images/icon-wanda.jpg")}
                alt=""
                className="w-full shadow-xl shadow-red-700 rounded-md  transition-all duration-200 hover:scale-110"
              />
            </a>
            <a
              onClick={() => navigate("/black-panter")}
              className="w-1/2 m-4 bg-white dark:bg-black"
            >
              <img
                src={require("../images/icon-black-panter.jpg")}
                alt=""
                className="w-full shadow-xl shadow-purple-600 rounded-md transition-all duration-200 hover:scale-110"
              />
            </a>
          </div>
        </section>
      </body>
    </html>
  );
};

export default Home;
