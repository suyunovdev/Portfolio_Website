"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { FaRegUserCircle } from "react-icons/fa";
import Link from "next/link";

const Portfolio = () => {
  return (
    <div className="flex items-center justify-center w-full my-auto h-[60vh]">
      {" "}
      <div className="flex flex-col items-center justify-center  w-[60%] text-center gap-5">
        <h1 className="text-3xl font-semibold ">
          Hello, my name is Ilyos , click on the go to my portfolio button below
          to get complete information about me.
        </h1>
        <div>
          <Link href="/about" className='data-aos="flip-left"'>
            {" "}
            <button className="inline-flex items-center justify-center px-8 py-4 font-sans font-semibold tracking-wide text-white bg-blue-500 rounded-lg h-[60px] ">
              Go to my portfolio
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
