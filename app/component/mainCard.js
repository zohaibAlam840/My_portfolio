// import Image from "next/image";
import imageProfile from "../assets/one.png";
import { AiOutlineInstagram, AiOutlineLinkedin, AiOutlineGithub, AiOutlineMail } from 'react-icons/ai';

export default function Card() {
  return (
    <div className="relative flex items-center justify-center h-auto">
      {/* Card Component with Circles Clipped */}
      <div className="relative z-10 w-auto h-auto bg-white rounded-2xl flex flex-col items-center py-10 px-5 shadow-lg overflow-hidden">
        {/* Background Half-Circle Dotted Pattern */}
        <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full border-4 border-dashed border-iconCol"></div>
        <div className="absolute -bottom-20 -right-12 w-44 h-44 rounded-full border-4 border-dashed border-iconCol"></div>

        {/* Card Content */}
        <div className="border-2 border-red-300 w-56 h-64 rounded-2xl">
          {/* Uncomment if you want to use the profile image */}
          {/* <Image 
            src={imageProfile} 
            alt="profile image" 
            className="rounded-2xl h-64 w-72"
          /> */}
        </div>
        <div className="w-auto h-auto px-2 py-4 text-4xl text-black font-bold">
          Zohaib Alam
        </div>
        <div className="w-24 h-24"></div>
        <div className="w-72 h-24 text-gray-500">
          <p className="text-lg text-center font-bold">
            A Software Engineer who <br /> has developed countless innovative solutions.
          </p>
        </div>
        <div className="flex gap-7">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <AiOutlineInstagram size={30} style={{ color: "#f57f51" }} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <AiOutlineLinkedin size={30} style={{ color: "#f57f51" }} />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <AiOutlineGithub size={30} style={{ color: "#f57f51" }} />
          </a>
          <a href="mailto:your-email@example.com" target="_blank" rel="noopener noreferrer">
            <AiOutlineMail size={30} style={{ color: "#f57f51" }} />
          </a>
        </div>
      </div>
    </div>
  );
}
