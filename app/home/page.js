'use client'

import Intro from "./../component/mainCard";
import Detail from "../component/mian/se";
import Resent from "../component/mian/resent";
import Expereience from "../component/mian/experinec";
import Tools from "../component/mian/Tool";
// import Nav from "../component/nav"


export default function Home() {

  return (
    <div className="flex flex-col w-screen h-screen bg-bgColor text-white overflow-x-hidden">
      
      {/* Navbar */}
      {/* <Nav /> */}

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
          <Tools />
        </div>

        {/* Right Column */}
        <div className="w-full h-screen border-2 border-black">
          <button>Downlode the resuma</button>
        </div>
      </div>
    </div>
  );
}
