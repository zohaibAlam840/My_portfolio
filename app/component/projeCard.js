import { FiArrowUpRight } from "react-icons/fi";
import Image from "next/image";

export default function InfoCard({ title, image, date, link }) {
  return (
    <div className="relative flex hover:bg-cardHov text-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-600 items-center gap-x-5 group transform group-hover:scale-105">
      <div className="w-32 h-32 rounded-2xl">
        {/* Uncomment if you want to use the profile image */}
        <Image 
          src={image} 
          alt="profile image" 
          className="rounded-2xl h-32 w-auto"
        />
      </div>
      {/* Title */}
      <div>
        <h2 className="text-xl font-bold mb-2">{title}</h2>

        {/* Description */}
        {/* <p className="text-gray-400 mb-4">{description}</p> */}

        {/* Date */}
        <p className="text-sm text-gray-500">{date}</p>
      </div>

      {/* Optional Link */}
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-4 right-4 text-orange-500 hover:text-orange-600 transition-transform transform group-hover:translate-x-4 group-hover:-translate-y-4"
        >
          <FiArrowUpRight size={20} />
        </a>
      )}
    </div>
  );
}
