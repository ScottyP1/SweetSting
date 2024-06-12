import Image from 'next/image';
import Link from 'next/link';
import logo from '../public/logo.png';

export default function Home() {
  return (
    <div className="overflow-hidden">
      <main className="background relative flex items-center justify-center min-h-screen overflow-hidden">
        <div className="container mx-auto px-4 flex flex-col items-center overflow-hidden">
          <div className="text-center mt-2 xl:mt-12 lg:mt-4 flex flex-col items-center">
            {/* Logo Image */}
            <Image
              src={logo}
              width={400}
              alt="Company logo"
              className="w-64 h-90 lg:w-[400px] lg:h-[500px] opacity-70"
              priority={true}
            />
            <div className="flex space-x-4 mt-4">
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
            <div className="mt-6 xl:mt-12 ms-3 text-center">
              <span className="text-white text-sm lg:text-xl block tracking-[14px]">
                FREE HAND NEEDLE
              </span>
              <span className="text-white text-sm lg:text-xl block mt-2 tracking-[14px]">
                SURGICAL STEEL
              </span>
              <h1 className="text-xl lg:text-4xl text-white mt-6 xl:mt-12 tracking-[20px]">
                PROFESSIONAL BODY PIERCING
              </h1>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
