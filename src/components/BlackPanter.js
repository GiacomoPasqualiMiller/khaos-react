import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const BlackPanter = () => {
  const navigate = useNavigate();
  const [closeModalValue, setCloseModalValue] = useState(false);
  const popUp = document.getElementById("popup-modal");
  // Get the modal by id
  const modal = document.getElementById("modal");

  // Get the modal image tag
  const modalImg = document.getElementById("modal-img");

  const imgBlackPanterMan = document.getElementById("blackPanter");

  /*   const closeModal = () => {
    setCloseModalValue(false);
}; */

  //Zoom Image
  /* const showModal = (src) => {
    setCloseModalValue(false);
    modalImg.src = src;
  }; */
  const imgBlack = document.getElementById("black-panter");
  
  const DarkMode = () => {
    //Auto Image Effect
    window.onload = function () {
      imgBlack.classList.add("zoomBlackPanter");
      setInterval(function (params) {
        popUp.classList.add("hidden");
      }, 2000);
    };
    if (
      localStorage.getItem("color-theme") === "dark" ||
      (!("color-theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      DarkMode();
    };
    fetchData();
  }, []);

  //IMG ZOOM
  const [imgClick, setImgClick] = useState(false);
  const handleClick = () => {
    setImgClick(!imgClick);
  };
  const closeClick = () => {
    setImgClick(false);
  };

  //Black Panter MAN EFFECT
  const [blackPanterFly, setBlackPanterFly] = useState(false);
  const handleFly = () => {
    setBlackPanterFly(true);
  };
  return (
    <>
      <html lang="en" className="dark">
        <head>
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <link rel="stylesheet" href="css/style.css" />
          <title>KHAOS</title>
          <link rel="icon" type="image/x-icon" href="/images/icon.png" />
          <script src="js/carcater-effects.js" defer></script>
          <script src="js/script.js" defer></script>
        </head>
        <body className="h-screen dark:bg-black">
          {/* <!-- Header --> */}
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
              <div className="w-30 h-30 absolute top-2 left-2">
                {/* <!-- Back Button  --> */}
                <button
                  onClick={() => navigate("/")}
                  id="back-btn"
                  className=" hover:bg-gray-100 dark:hover:bg-gray-700 focus:outlink-none focus:ring-4 focus:ring-gray-700 dark:focus:ring-gray-200 rounded-lg p-2.5 "
                >
                  <svg
                    className="svg-icon fill-black dark:fill-white"
                    viewBox="0 0 20 20"
                  >
                    <path d="M11.739,13.962c-0.087,0.086-0.199,0.131-0.312,0.131c-0.112,0-0.226-0.045-0.312-0.131l-3.738-3.736c-0.173-0.173-0.173-0.454,0-0.626l3.559-3.562c0.173-0.175,0.454-0.173,0.626,0c0.173,0.172,0.173,0.451,0,0.624l-3.248,3.25l3.425,3.426C11.911,13.511,11.911,13.789,11.739,13.962 M18.406,10c0,4.644-3.763,8.406-8.406,8.406S1.594,14.644,1.594,10S5.356,1.594,10,1.594S18.406,5.356,18.406,10 M17.521,10c0-4.148-3.373-7.521-7.521-7.521c-4.148,0-7.521,3.374-7.521,7.521c0,4.148,3.374,7.521,7.521,7.521C14.147,17.521,17.521,14.148,17.521,10"></path>
                  </svg>
                </button>
              </div>
              <div className="bg-black w-full absolute top-2 left-2 z-100"></div>
              <button
                id="theme-toggle"
                className="absolute top-2 right-2 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outlink-none focus:ring-4 focus:ring-gray-700 dark:focus:ring-gray-200 rounded-lg p-2.5"
              >
                {/* <!-- Dark SVG Icon --> */}
                <svg
                  id="theme-toggle-dark-icon"
                  className="w-5 h-5 hidden"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                </svg>

                {/* <!-- Light SVG Icon --> */}
                <svg
                  id="theme-toggle-light-icon"
                  className="w-5 h-5 hidden"
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
          {/* <!-- Pop up Section --> */}
          <div
            id="popup-modal"
            tabIndex="-1"
            className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 md:inset-0 h-modal md:h-full justify-center items-center flex h-full md:w-full bg-gradient-to-r from-[#664EAE] via-[#1A0554] to-[#0C0B13]"
            aria-modal="true"
            role="dialog"
          >
            <div className="relative p-0 w-full max-w-md h-full my-auto">
              {/* <!-- Box Container --> */}
              <div className="relative h-full bg-white bg-transparent">
                <div className="p-6 text-center h-full w-full">
                  <h3 className="mb-5 text-2xl font-bold text-white">
                    "I am King of Wakanda."
                  </h3>
                  <img
                    id="black-panter"
                    src={require("../images/card-black-panther.png")}
                    alt=""
                    className="transition-all mt-20 duration-1000 scroll-none"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex w-full justify-center">
            {/* <!-- Card Section --> */}
            <section className="w-1/3 flex justify-center flex-wrap mt-6">
              {/* <!-- Title Container --> */}
              <div className="flex flex-col justify-center items-center w-full space-y-6 p-1 px-4 rounded-xl bg- mb-4">
                <div className="flex flex-col justify-center items-center w-full space-y-6 bg-purple-600 rounded-lg">
                  <p className="text-center text-white">Clicca la carta!</p>
                </div>
              </div>
              {/* <!-- Image Container --> */}
              <div className="flex flex-col justify-center items-center w-full space-y-6 p-1 rounded-xl bg-purple-600">
                <div className="flex flex-col justify-center items-center w-full space-y-6 rounded-xl">
                  <img
                    src={require("../images/black-panter.jpg")}
                    alt=""
                    height="500"
                    className="flex w-full rounded-xl animate-pulse"
                    onClick={() => handleClick()}
                  />
                </div>
              </div>
            </section>
          </div>
          {/* <!-- The Modal --> */}
          <div
            style={{ display: imgClick ? "flex" : "none" }}
            id="modal"
            className="absolute top-0 left-0 z-80 w-screen h-screen bg-black/70 flex justify-center items-center"
          >
            {/* <!-- The close button --> */}
            <a
              style={{ display: imgClick ? "flex" : "hidden" }}
              className="fixed z-90 top-6 right-8 text-white text-5xl font-bold"
              href="javascript:void(0)"
              onClick={() => closeClick()}
            >
              &times;
            </a>

            {/* <!-- A big image will be displayed here --> */}
            <img
              style={{ display: imgClick ? "flex" : "none" }}
              id="modal-img"
              className="max-w-[800px] max-h-[600px] object-cover"
              src={require("../images/black-panter.jpg")}
            />
          </div>
        </body>
      </html>
    </>
  );
};

export default BlackPanter;
