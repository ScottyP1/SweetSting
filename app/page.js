import Image from 'next/image';
import Link from 'next/link';
import logo from '../public/logo.png';

export default function Home() {
  return (
    <div className='overflow-hidden '>
      {/* Video Background */}
      <video
        src={require('/honeyCombVid.mp4')}
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover z-0 overflow-hidden">
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

      {/* Content */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center">
        <div className="text-center">
          {/* Logo Image */}
          <Image
            src={logo}
            width={300}
            alt="Company logo"
            className="w-120 h-120 lg:w-[400px] lg:h-[500px] mx-auto"
            priority={true}
          />
          {/* Buttons */}
          <div className="flex space-x-4 mt-6 xl:mt-12 justify-center">
            <Link
              href="/services_"
              aria-label="Learn more about our services"
              className="border-2 border-[#CDF5EC] hover:bg-[#CDF5EC]/[.7] text-white rounded-full p-3 lg:p-4"
            >
              Learn More
            </Link>
            <Link
              href="/contact"
              aria-label="Get a quote"
              className="bg-[#CDF5EC] border-2 border-[#CDF5EC] rounded-full p-3 lg:p-4"
            >
              Get Quote
            </Link>
          </div>
          {/* Text */}
          <div className="ml-5 mt-6 xl:mt-12 text-center text-white ">
            <span className="text-sm lg:text-xl block tracking-[14px]">
              FREE HAND NEEDLE
            </span>
            <span className="text-sm lg:text-xl block mt-2 tracking-[14px]">
              SURGICAL STEEL
            </span>
            <h1 className="text-xl lg:text-4xl mt-6 xl:mt-12 tracking-[20px]">
              PROFESSIONAL BODY PIERCING
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
