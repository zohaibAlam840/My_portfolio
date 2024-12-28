'use client'
import { HiOutlineHome, HiOutlineCollection, HiOutlineLightBulb, HiOutlineBriefcase } from "react-icons/hi";
import { FiTool } from "react-icons/fi";
import Link from "next/link";
import Intro from "./../component/mainCard";
import Expereience from "../component/mian/experinec";

export default function Home() {

  return (
    <div className="flex flex-col w-screen h-screen bg-bgColor text-white overflow-x-hidden">
      

      {/* Main Content */}
      <div className="grid grid-cols-[2fr_2.5fr_1fr] gap-5 px-5">
        {/* Left Column - Sticky Intro */}
        <div className="w-full h-[200vh] py-14 pl-28">
          <div className="sticky top-0 z-10">
            <Intro />
          </div>
        </div>

        {/* Middle Column */}
        <div className="w-full h-screen">
          <Expereience />
        </div>

        {/* Right Column */}
        <div className="w-full h-screen border-2 border-black">
          column three
        </div>
      </div>
    </div>
  );
}
