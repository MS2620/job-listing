"use client";
import Image from "next/image";
import bg_header_desktop from "../public/images/bg-header-desktop.svg";
import data from "../data.json";
import { useState, useEffect } from "react";
import remove from "../public/images/icon-remove.svg";

export default function Home() {
  const [chosen, setChosen] = useState([]);
  const [width, setWidth] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const setClicked = (event) => {
    const clickedContent = event.innerHTML;
    setChosen((prevChosen) => [...prevChosen, clickedContent]);
  };

  const setRemoved = (event) => {
    const removeContent = event.innerHTML;
    setChosen((prevChosen) =>
      prevChosen.filter((item) => item !== removeContent)
    );
  };

  const filteredData = data.filter((item) => {
    return chosen.every((chosenItem) =>
      [item.position, item.role, item.level, ...item.languages].includes(
        chosenItem
      )
    );
  });

  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    // Check if window is defined before accessing it
    if (typeof window !== "undefined") {
      setWidth(window.innerWidth);
      window.addEventListener("resize", updateDimensions);
      return () => window.removeEventListener("resize", updateDimensions);
    }
  }, []);

  useEffect(() => {
    if (width < 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [width]);

  return (
    <>
      {isMobile ? (
        <div className="bg-bg h-screen">
          <div className="sticky z-0">
            <Image
              src={bg_header_desktop}
              alt="Logo"
              className="bg-primary w-full h-20"
            />
          </div>
          {chosen.length > 0 && (
            <div className="container w-[95%] mx-auto bg-white h-fit -mt-16 relative z-40 drop-shadow-lg rounded-md ">
              <div className="flex flex-wrap justify-start ms-4 gap-4 py-4 drop-shadow-md">
                {chosen.map((item) => (
                  <p
                    key={item}
                    className="bg-primary/15 text-primary font-bold px-4 text-sm rounded-lg mt-3 h-8 justify-center items-center flex flex-row"
                  >
                    {item}
                    <div className="group bg-primary ms-2 inline-flex -me-4 rounded-r-md h-full px-2">
                      <Image
                        src={remove}
                        alt="remove"
                        className="cursor-pointer object-contain"
                        onClick={(event) => setRemoved({ innerHTML: item })}
                      />
                    </div>
                  </p>
                ))}
                <div
                  className="absolute right-4 bottom-4 cursor-pointer"
                  onClick={() => setChosen([])}
                >
                  <p className="text-primary hover:underline ">Clear</p>
                </div>
              </div>
            </div>
          )}
          <div className="container mx-auto mt-12 space-y-8 pb-4">
            {filteredData.map((item) => (
              <div
                key={item.id}
                className="flex flex-col bg-white gap-2 p-4 drop-shadow-lg rounded-md mx-4"
              >
                {item.featured && (
                  <div className="border-l-4 border-primary h-[11.2rem] -ml-4 rounded-l-md -mt-4 absolute"></div>
                )}
                <Image
                  src={item.logo}
                  alt="Logo"
                  width={65}
                  height={65}
                  className="-mt-8"
                />
                <div className="flex flex-col">
                  <div className="flex flex-row gap-3">
                    <h1 className="text-sm font-bold text-primary">
                      {item.company}
                    </h1>
                    <p className={`${item.new ? "new" : ""}`}>
                      {item.new ? "New!" : ""}
                    </p>
                    <p className={`${item.featured ? "featured" : ""}`}>
                      {item.featured ? "Featured" : ""}
                    </p>
                  </div>

                  <p className="text-black font-semibold cursor-pointer">
                    {item.position}
                  </p>

                  <div className="flex flex-row gap-3">
                    <p className="text-dark-g-cyan text-xs">{item.postedAt}</p>
                    <p className="text-dark-g-cyan text-xs">-</p>
                    <p className="text-dark-g-cyan text-xs">{item.contract}</p>
                    <p className="text-dark-g-cyan text-xs">-</p>
                    <p className="text-dark-g-cyan text-xs">{item.location}</p>
                  </div>

                  <hr className="border-primary border-1 my-2" />

                  <div
                    className="flex flex-row gap-2 w-full mt-1"
                    onClick={(event) => setClicked(event.target)}
                  >
                    <div className="flex flex-row gap-2">
                      <p className="right cursor-pointer">{item.role}</p>
                      <p className="right cursor-pointer">{item.level}</p>
                      {item.languages.map((l) => (
                        <p className="right cursor-pointer" key={l}>
                          {l}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="bg-bg h-screen">
          <p className="top-0 absolute z-10 text-lg ms-2">created by{" "}
        <a href="https://github.com/MS2620" className="text-name">
          MS2620
        </a>{" "}
        - github.com</p>
          <div className="sticky z-0">
            <Image
              src={bg_header_desktop}
              alt="Logo"
              className="bg-primary w-full"
            />
          </div>
          {chosen.length > 0 && (
            <div className="container mx-auto bg-white h-14 -mt-20 relative z-40 drop-shadow-lg rounded-md ">
              <div className="flex flex-row justify-start ms-8 gap-4 mt-12 drop-shadow-md">
                {chosen.map((item) => (
                  <p
                    key={item}
                    className="bg-primary/15 text-primary font-bold px-4 text-sm rounded-lg mt-2 h-8 justify-center items-center flex flex-row"
                  >
                    {item}
                    <div className="group bg-primary ms-2 inline-flex -me-4 rounded-r-md h-full px-2">
                      <Image
                        src={remove}
                        alt="remove"
                        className="cursor-pointer object-contain"
                        onClick={(event) => setRemoved({ innerHTML: item })}
                      />
                    </div>
                  </p>
                ))}
                <div
                  className="absolute right-8 top-4 cursor-pointer"
                  onClick={() => setChosen([])}
                >
                  <p className="text-primary hover:underline ">Clear</p>
                </div>
              </div>
            </div>
          )}
          <div className="container mx-auto mt-12 space-y-4 pb-4">
            {filteredData.map((item) => (
              <div
                key={item.id}
                className="flex flex-row h-24 bg-white gap-2 p-4 drop-shadow-lg rounded-md"
              >
                {item.featured && (
                  <div className="border-primary border-solid border-2 -ml-4 -my-4 rounded-tl-md rounded-bl-md"></div>
                )}
                <Image
                  src={item.logo}
                  alt="Logo"
                  width={65}
                  height={65}
                  className=""
                />
                <div className="flex flex-col">
                  <div className="flex flex-row gap-3">
                    <h1 className="text-sm font-bold text-primary">
                      {item.company}
                    </h1>
                    <p className={`${item.new ? "new" : ""}`}>
                      {item.new ? "New!" : ""}
                    </p>
                    <p className={`${item.featured ? "featured" : ""}`}>
                      {item.featured ? "Featured" : ""}
                    </p>
                  </div>
                  <div
                    className="flex flex-row gap-2 w-full mt-1"
                    onClick={(event) => setClicked(event.target)}
                  >
                    <p className="text-black font-semibold cursor-pointer">
                      {item.position}
                    </p>
                    <div className="flex flex-row absolute right-8 gap-2">
                      <p className="right cursor-pointer">{item.role}</p>
                      <p className="right cursor-pointer">{item.level}</p>
                      {item.languages.map((l) => (
                        <p className="right cursor-pointer" key={l}>
                          {l}
                        </p>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-row gap-3">
                    <p className="text-dark-g-cyan text-xs">{item.postedAt}</p>
                    <p className="text-dark-g-cyan text-xs">-</p>
                    <p className="text-dark-g-cyan text-xs">{item.contract}</p>
                    <p className="text-dark-g-cyan text-xs">-</p>
                    <p className="text-dark-g-cyan text-xs">{item.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
