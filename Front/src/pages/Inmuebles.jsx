
import { useState } from "react";
import { FaRankingStar } from "react-icons/fa6";
import { FcFactory } from "react-icons/fc";
import Carousel from "react-multi-carousel";
import "/styles.css";
import "react-multi-carousel/lib/styles.css";
import imagen1 from "../assets/img/bernard-1.jpg";
import house2 from "../assets/img/house2.jpg";
import house1 from "../assets/img/house1.jpg";

// Importa tu componente de Card
const Card = ({ id, title, imageSrc }) => (
  <div className=" flex items-center mt-[20%] ">
    <div className="h-[17vh]"></div>
    <div className="relative mx-auto w-full max-w-sm pt-6 ">
      <a
        href="#"
        className="relative inline-block w-full transform transition-transform duration-300 ease-in-out"
      >
        <div className="rounded-lg ml-[5%] mr-[5%]">
          <div className="relative flex h-[40vh] justify-center overflow-hidden rounded-lg ">
            <div className="w-full transform transition-transform duration-500 ease-in-out hover:scale-110">
              <img
                src={imageSrc}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute bottom-0 mb-3 flex justify-center">
              <div className="flex space-x-5 overflow-hidden rounded-lg bg-white/70 px-4 py-1 shadow">
                <p className="flex items-center font-medium text-gray-500">
                  <svg
                    className="mr-2 h-5 w-5 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d="M480,226.15V80a48,48,0,0,0-48-48H80A48,48,0,0,0,32,80V226.15C13.74,231,0,246.89,0,266.67V472a8,8,0,0,0,8,8H24a8,8,0,0,0,8-8V416H480v56a8,8,0,0,0,8,8h16a8,8,0,0,0,8-8V266.67C512,246.89,498.26,231,480,226.15ZM64,192a32,32,0,0,1,32-32H208a32,32,0,0,1,32,32v32H64Zm384,32H272V192a32,32,0,0,1,32-32H416a32,32,0,0,1,32,32ZM80,64H432a16,16,0,0,1,16,16v56.9a63.27,63.27,0,0,0-32-8.9H304a63.9,63.9,0,0,0-48,21.71A63.9,63.9,0,0,0,208,128H96a63.27,63.27,0,0,0-32,8.9V80A16,16,0,0,1,80,64ZM32,384V266.67A10.69,10.69,0,0,1,42.67,256H469.33A10.69,10.69,0,0,1,480,266.67V384Z"></path>
                  </svg>
                  3
                </p>

                <p className="flex items-center font-medium text-gray-500">
                  <svg
                    className="mr-2 h-5 w-5 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 480 512"
                  >
                    <path d="M423.18 195.81l-24.94-76.58C387.51 86.29 356.81 64 322.17 64H157.83c-34.64 0-65.34 22.29-76.07 55.22L56.82 195.8C24.02 205.79 0 235.92 0 271.99V400c0 26.47 21.53 48 48 48h16c26.47 0 48-21.53 48-48v-16h256v16c0 26.47 21.53 48 48 48h16c26.47 0 48-21.53 48-48V271.99c0-36.07-24.02-66.2-56.82-76.18zm-310.99-66.67c6.46-19.82 24.8-33.14 45.64-33.14h164.34c20.84 0 39.18 13.32 45.64 33.13l20.47 62.85H91.72l20.47-62.84zM80 400c0 8.83-7.19 16-16 16H48c-8.81 0-16-7.17-16-16v-16h48v16zm368 0c0 8.83-7.19 16-16 16h-16c-8.81 0-16-7.17-16-16v-16h48v16zm0-80.01v32H32v-80c0-26.47 21.53-48 48-48h320c26.47 0 48 21.53 48 48v48zM104.8 248C78.84 248 60 264.8 60 287.95c0 23.15 18.84 39.95 44.8 39.95l10.14.1c39.21 0 45.06-20.1 45.06-32.08 0-24.68-31.1-47.92-55.2-47.92zm10.14 56c-3.51 0-7.02-.1-10.14-.1-12.48 0-20.8-6.38-20.8-15.95S92.32 272 104.8 272s31.2 14.36 31.2 23.93c0 7.17-10.53 8.07-21.06 8.07zm260.26-56c-24.1 0-55.2 23.24-55.2 47.93 0 11.98 5.85 32.08 45.06 32.08l10.14-.1c25.96 0 44.8-16.8 44.8-39.95 0-23.16-18.84-39.96-44.8-39.96zm0 55.9c-3.12 0-6.63.1-10.14.1-10.53 0-21.06-.9-21.06-8.07 0-9.57 18.72-23.93 31.2-23.93s20.8 6.38 20.8 15.95-8.32 15.95-20.8 15.95z"></path>
                  </svg>
                  2
                </p>

                <p className="flex items-center font-medium text-gray-500">
                  <svg
                    className="mr-2 h-5 w-5 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d="M504,256H64V61.25a29.26,29.26,0,0,1,49.94-20.69L139.18,65.8A71.49,71.49,0,0,0,128,104c0,20.3,8.8,38.21,22.34,51.26L138.58,167a8,8,0,0,0,0,11.31l11.31,11.32a8,8,0,0,0,11.32,0L285.66,65.21a8,8,0,0,0,0-11.32L274.34,42.58a8,8,0,0,0-11.31,0L251.26,54.34C238.21,40.8,220.3,32,200,32a71.44,71.44,0,0,0-38.2,11.18L136.56,18A61.24,61.24,0,0,0,32,61.25V256H8a8,8,0,0,0-8,8v16a8,8,0,0,0,8,8H32v96c0,41.74,26.8,76.9,64,90.12V504a8,8,0,0,0,8,8h16a8,8,0,0,0,8-8V480H384v24a8,8,0,0,0,8,8h16a8,8,0,0,0,8-8V474.12c37.2-13.22,64-48.38,64-90.12V288h24a8,8,0,0,0,8-8V264A8,8,0,0,0,504,256ZM228.71,76.9,172.9,132.71A38.67,38.67,0,0,1,160,104a40,40,0,0,1,40-40A38.67,38.67,0,0,1,228.71,76.9ZM448,384a64.07,64.07,0,0,1-64,64H128a64.07,64.07,0,0,1-64-64V288H448Z"></path>
                  </svg>
                  3
                </p>
              </div>
            </div>

            <span className="absolute left-0 top-0 z-10 ml-3 mt-3 inline-flex select-none rounded-lg bg-orange-500 px-3 py-2 text-sm font-medium text-white">
              {" "}
              Featured{" "}
            </span>
          </div>

          <div className="">
            <div className="mt-4 grid grid-cols-2">
              <div className="flex items-center">
                <div className="relative">
                  <h2
                    className="line-clamp-1 text-base font-medium text-gray-800 md:text-lg"
                    title="New York"
                  >
                    Statue of Liberty
                  </h2>
                  <p
                    className="mt-2 line-clamp-1 text-sm text-gray-800"
                    title="New York, NY 10004, United States"
                  >
                    New York, NY 10004, United States
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-end">
                <p className="text-primary inline-block whitespace-nowrap rounded-xl font-semibold leading-tight">
                  <span className="text-sm uppercase"> $ </span>
                  <span className="text-lg">3,200</span>/m
                </p>
              </div>
            </div>

            <div className="mt-2 border-t border-gray-200 pt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
              laboriosam labore obcaecati hic fugit exercitationem ad blanditiis
              inventore excepturi cumque!
            </div>

            <div className="mt-2 grid grid-cols-2 grid-rows-2 gap-4 border-b border-t border-gray-200 pb-3 pt-3">
              <p className="flex items-center text-gray-800 xl:flex-row xl:items-center">
                <svg
                  className="mr-3 inline-block h-5 w-5 fill-current text-gray-800 xl:h-4 xl:w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                >
                  <path d="M570.53,242,512,190.75V48a16,16,0,0,0-16-16H400a16,16,0,0,0-16,16V78.75L298.53,4a16,16,0,0,0-21.06,0L5.47,242a16,16,0,0,0,21.07,24.09L64,233.27V464a48.05,48.05,0,0,0,48,48H464a48.05,48.05,0,0,0,48-48V233.27l37.46,32.79A16,16,0,0,0,570.53,242ZM480,464a16,16,0,0,1-16,16H112a16,16,0,0,1-16-16V205.27l192-168,192,168Zm0-301.25-64-56V64h64ZM208,218.67V325.34A26.75,26.75,0,0,0,234.66,352H341.3A26.76,26.76,0,0,0,368,325.34V218.67A26.75,26.75,0,0,0,341.3,192H234.66A26.74,26.74,0,0,0,208,218.67ZM240,224h96v96H240Z"></path>
                </svg>
                <span className="xl:mt-0"> Condominium </span>
              </p>
              <p className="flex items-center text-gray-800 xl:flex-row xl:items-center">
                <svg
                  className="mr-3 inline-block h-5 w-5 fill-current text-gray-800 xl:h-4 xl:w-4"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.5883 7.872H16.4286L16.7097 8.99658H6.74743V10.1211H17.4309C17.5163 10.1211 17.6006 10.1017 17.6774 10.0642C17.7542 10.0267 17.8214 9.97222 17.874 9.90487C17.9266 9.83753 17.9631 9.75908 17.9808 9.6755C17.9986 9.59192 17.997 9.5054 17.9763 9.42251L17.5883 7.872ZM17.5883 4.49829H16.4286L16.7097 5.62286H6.74743V6.74743H17.4309C17.5163 6.74742 17.6006 6.72794 17.6774 6.69046C17.7542 6.65299 17.8214 6.59851 17.874 6.53116C17.9266 6.46381 17.9631 6.38537 17.9808 6.30179C17.9986 6.2182 17.997 6.13168 17.9763 6.04879L17.5883 4.49829ZM17.4309 0H0.562286C0.413158 0 0.270139 0.0592407 0.16469 0.16469C0.0592407 0.270139 0 0.413158 0 0.562286L0 2.81143C0 2.96056 0.0592407 3.10358 0.16469 3.20903C0.270139 3.31448 0.413158 3.37372 0.562286 3.37372H4.49829V5.62286H1.28271L1.56386 4.49829H0.404143L0.0175714 6.04879C-0.00313354 6.13162 -0.00470302 6.21808 0.012982 6.30161C0.0306671 6.38514 0.0671423 6.46355 0.119641 6.53088C0.172139 6.59822 0.239283 6.65271 0.315978 6.69023C0.392673 6.72775 0.476905 6.74731 0.562286 6.74743H4.49829V8.99658H1.28271L1.56386 7.872H0.404143L0.0175714 9.42251C-0.00313354 9.50534 -0.00470302 9.5918 0.012982 9.67533C0.0306671 9.75886 0.0671423 9.83727 0.119641 9.9046C0.172139 9.97193 0.239283 10.0264 0.315978 10.0639C0.392673 10.1015 0.476905 10.121 0.562286 10.1211H4.49829V14.7228C4.12312 14.8554 3.80693 15.1164 3.60559 15.4596C3.40424 15.8028 3.33072 16.2062 3.39801 16.5984C3.4653 16.9906 3.66907 17.3464 3.9733 17.6028C4.27754 17.8593 4.66265 18 5.06057 18C5.4585 18 5.84361 17.8593 6.14784 17.6028C6.45208 17.3464 6.65585 16.9906 6.72314 16.5984C6.79043 16.2062 6.7169 15.8028 6.51556 15.4596C6.31422 15.1164 5.99803 14.8554 5.62286 14.7228V3.37372H17.4309C17.58 3.37372 17.723 3.31448 17.8285 3.20903C17.9339 3.10358 17.9932 2.96056 17.9932 2.81143V0.562286C17.9932 0.413158 17.9339 0.270139 17.8285 0.16469C17.723 0.0592407 17.58 0 17.4309 0V0ZM5.06057 16.8686C4.94936 16.8686 4.84065 16.8356 4.74818 16.7738C4.65572 16.712 4.58365 16.6242 4.54109 16.5215C4.49853 16.4187 4.4874 16.3057 4.50909 16.1966C4.53079 16.0875 4.58434 15.9873 4.66298 15.9087C4.74162 15.8301 4.8418 15.7765 4.95088 15.7548C5.05995 15.7331 5.17301 15.7443 5.27575 15.7868C5.3785 15.8294 5.46631 15.9014 5.5281 15.9939C5.58988 16.0864 5.62286 16.1951 5.62286 16.3063C5.62286 16.4554 5.56362 16.5984 5.45817 16.7039C5.35272 16.8093 5.2097 16.8686 5.06057 16.8686ZM16.8686 2.24914H1.12457V1.12457H16.8686V2.24914Z"></path>
                </svg>
                <span className="mt-0"> Partly furnished </span>
              </p>
              <p className="flex items-center text-gray-800 xl:flex-row xl:items-center">
                <svg
                  className="mr-3 inline-block h-5 w-5 fill-current text-gray-800 xl:h-4 xl:w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M399.959 170.585c-4.686 4.686-4.686 12.284 0 16.971L451.887 239H60.113l51.928-51.444c4.686-4.686 4.686-12.284 0-16.971l-7.071-7.07c-4.686-4.686-12.284-4.686-16.97 0l-84.485 84c-4.686 4.686-4.686 12.284 0 16.971l84.485 84c4.686 4.686 12.284 4.686 16.97 0l7.071-7.07c4.686-4.686 4.686-12.284 0-16.971L60.113 273h391.773l-51.928 51.444c-4.686 4.686-4.686 12.284 0 16.971l7.071 7.07c4.686 4.686 12.284 4.686 16.97 0l84.485-84c4.687-4.686 4.687-12.284 0-16.971l-84.485-84c-4.686-4.686-12.284-4.686-16.97 0l-7.07 7.071z"></path>
                </svg>
                <span className="mt-0"> 1,386 sq. ft. </span>
              </p>
              <p className="flex items-center text-gray-800 xl:flex-row xl:items-center">
                <svg
                  className="mr-3 inline-block h-5 w-5 fill-current text-gray-800 xl:h-4 xl:w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                >
                  <path d="M532.01 386.17C559.48 359.05 576 325.04 576 288c0-80.02-76.45-146.13-176.18-157.94 0 .01.01.02.01.03C368.37 72.47 294.34 32 208 32 93.12 32 0 103.63 0 192c0 37.04 16.52 71.05 43.99 98.17-15.3 30.74-37.34 54.53-37.7 54.89-6.31 6.69-8.05 16.53-4.42 24.99A23.085 23.085 0 0 0 23.06 384c53.54 0 96.67-20.24 125.17-38.78 9.08 2.09 18.45 3.68 28 4.82C207.74 407.59 281.73 448 368 448c20.79 0 40.83-2.41 59.77-6.78C456.27 459.76 499.4 480 552.94 480c9.22 0 17.55-5.5 21.18-13.96 3.64-8.46 1.89-18.3-4.42-24.99-.35-.36-22.39-24.14-37.69-54.88zm-376.59-72.13l-13.24-3.05-11.39 7.41c-20.07 13.06-50.49 28.25-87.68 32.47 8.77-11.3 20.17-27.61 29.54-46.44l10.32-20.75-16.49-16.28C50.75 251.87 32 226.19 32 192c0-70.58 78.95-128 176-128s176 57.42 176 128-78.95 128-176 128c-17.73 0-35.42-2.01-52.58-5.96zm289.8 100.35l-11.39-7.41-13.24 3.05A234.318 234.318 0 0 1 368 416c-65.14 0-122-25.94-152.43-64.29C326.91 348.62 416 278.4 416 192c0-9.45-1.27-18.66-3.32-27.66C488.12 178.78 544 228.67 544 288c0 34.19-18.75 59.87-34.47 75.39l-16.49 16.28 10.32 20.75c9.38 18.86 20.81 35.19 29.53 46.44-37.19-4.22-67.6-19.41-87.67-32.47zM233.38 182.91l-41.56-12.47c-4.22-1.27-7.19-5.62-7.19-10.58 0-6.03 4.34-10.94 9.66-10.94h25.94c3.9 0 7.65 1.08 10.96 3.1 3.17 1.93 7.31 1.15 10-1.4l11.44-10.87c3.53-3.36 3.38-9.22-.54-12.11-8.18-6.03-17.97-9.58-28.08-10.32V104c0-4.42-3.58-8-8-8h-16c-4.42 0-8 3.58-8 8v13.4c-21.85 1.29-39.38 19.62-39.38 42.46 0 18.98 12.34 35.94 30 41.23l41.56 12.47c4.22 1.27 7.19 5.62 7.19 10.58 0 6.03-4.34 10.94-9.66 10.94h-25.94c-3.9 0-7.65-1.08-10.96-3.1-3.17-1.94-7.31-1.15-10 1.4l-11.44 10.87c-3.53 3.36-3.38 9.22.54 12.11 8.18 6.03 17.97 9.58 28.08 10.32V280c0 4.42 3.58 8 8 8h16c4.42 0 8-3.58 8-8v-13.4c21.85-1.29 39.38-19.62 39.38-42.46 0-18.98-12.35-35.94-30-41.23z"></path>
                </svg>
                <span className="mt-0"> $1.98 /sq.ft </span>
              </p>
            </div>
          </div>
        </div>
      </a>
    </div>
  </div>
);

const Inmuebles = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  const cardData = [
    { id: 1, title: "Card 10", imageSrc: `${imagen1}` },
    { id: 2, title: "Card 2", imageSrc: `${house2}` },
    { id: 3, title: "Card 3", imageSrc: `${house1}` },
    // Agrega el resto de las tarjetas según sea necesario
  ];

  return (
    <div>
      <div className="h-[5vh]"></div>
      <Carousel
        responsive={responsive}
        infinite
        removeArrowOnDeviceType={["tablet", "mobile"]}
        containerClass="carousel-container"
        itemClass="carousel-item"
        beforeChange={(previousSlide, { currentSlide }) =>
          setCurrentSlide(currentSlide)
        }
      >
        {cardData.map((card) => (
          <Card key={card.id} {...card} />
        ))}
      </Carousel>

      <div className="flex  justify-around h-[9%] mb-[50px] flex-wrap ">
        <a
          href="/CardsPropiedades"
          type="button"
          className=" flex justify-center ml-[31%] inlineBlock rounded bg-orange-500 mt-[50px] px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
          data-te-ripple-init
          data-te-ripple-color="light"
        >
          ver todas las solicitudes
        </a>
        <a
          href="/"
          type="button"
          className=" flex justify-center inlineBlock rounded bg-orange-500 mt-[50px] px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
          data-te-ripple-init
          data-te-ripple-color="light"
        >
          Volver
        </a>
      </div>
      

      <div className="flex justify-evenly items-center bg-gray-200 h-[50vh]">
        <div className="flex justify-center items-center flex-col  w-[35vw] bg-white">
          <div className="bg-orange-500 aspect-w-1 aspect-h-1 p-[10%] mt-[20px] flex justify-center items-center rounded-full focus:outline-none hover:bg-gray-400 hover:shadow-none">
            <a href="#">
              <FaRankingStar size={100} color="#E64A19" />
            </a>
          </div>
          <h2 className="mt-[5px] text-xl text-[#6B7280]">
            Ranking de corretores
          </h2>
        </div>
        <div className="flex justify-center items-center flex-col w-[35vw] bg-white">
          <div className="bg-orange-500 aspect-w-1 aspect-h-1 p-[10%] mt-[20px] flex justify-center items-center rounded-full focus:outline-none hover:bg-gray-400 hover:shadow-none ">
            <a href="#">
              <FcFactory size={100} />
            </a>
          </div>
          <h2 className="mt-[5px] text-xl text-[#6B7280]">
            Empresas constructoras
          </h2>
        </div>
      </div>
    </div>
  );
};

export { Inmuebles };

