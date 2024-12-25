'use client'
import { HiOutlineHome, HiOutlineCollection, HiOutlineLightBulb, HiOutlineBriefcase } from "react-icons/hi";
import { FiTool } from "react-icons/fi";
import Link from "next/link";
import Intro from "./../component/mainCard";
import Detail from "../component/mian/se";
import Resent from "../component/mian/resent";
import Expereience from "../component/mian/experinec";


export default function Home() {

  return (
    <div className="flex flex-col w-screen h-screen bg-bgColor text-white overflow-x-hidden">
      
      {/* Navbar */}
      <div className="flex w-screen mx-4 my-2 justify-center p-5">
        <nav className="bg-navColor w-auto h-auto rounded-2xl px-6 py-3 flex gap-9 justify-center">
          <Link href={'/home'} className="group relative">
            <HiOutlineHome size={24} />
            <span className="absolute left-1/2 top-2 transform -translate-x-1/2 text-xs opacity-0 group-hover:opacity-100 group-hover:translate-y-8 transition-all duration-500 rounded-2xl px-4 py-2 font-bold bg-navColor">
              Home
            </span>
          </Link>
          <Link href={'/project'} className="group relative">
            <HiOutlineCollection size={24} />
            <span className="absolute left-1/2 top-2 transform -translate-x-1/2 text-xs opacity-0 group-hover:opacity-100 group-hover:translate-y-8 transition-all duration-500 rounded-2xl px-4 py-2 font-bold bg-navColor">
              Project
            </span>
          </Link>

          <Link href={'/experience'} className="group relative">
            <HiOutlineBriefcase size={24} />
            <span className="absolute left-1/2 top-2 transform -translate-x-1/2 text-xs opacity-0 group-hover:opacity-100 group-hover:translate-y-8 transition-all duration-500 rounded-2xl px-4 py-2 font-bold bg-navColor">
              Experience
            </span>
          </Link>
          <Link href={'/tools'} className="group relative">
            <FiTool size={24} />
            <span className="absolute left-1/2 top-2 transform -translate-x-1/2 text-xs opacity-0 group-hover:opacity-100 group-hover:translate-y-8 transition-all duration-500 rounded-2xl px-4 py-2 font-bold bg-navColor">
              Tools
            </span>
          </Link>
          <Link href={'/thoughts'} className="group relative">
            <HiOutlineLightBulb size={24} />
            <span className="absolute left-1/2 top-2 transform -translate-x-1/2 text-xs opacity-0 group-hover:opacity-100 group-hover:translate-y-8 transition-all duration-500 rounded-2xl px-4 py-2 font-bold bg-navColor">
              Thoughts
            </span>
          </Link>
        </nav>
      </div>

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
          <Detail />
          <Resent />
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
