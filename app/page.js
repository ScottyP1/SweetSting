import Image from 'next/image';
import Link from 'next/link';
import logo from '../public/logo.png';

export default function Home() {
  return (
    <main className="background relative">
      <div className='container mx-auto px-4'>
        <div className='text-center mt-12 lg:mt-4'>
          {/* Logo Image */}
          <Image
            src={logo}
            width={400}
            alt='Company logo'
            className='w-64 h-80 lg:w-[400px] lg:h-[500px] m-auto opacity-70'
            priority={true}
          />
          <div className='inline-block'>
            <Link href='/services_' aria-label='Learn more about our services' className='border-2 border-[#CDF5EC] hover:bg-[#CDF5EC]/[.7] text-white rounded-full p-3 m-2 lg:p-4 block'>
              Learn More
            </Link>
          </div>
          <div className='inline-block'>
            <Link href='/contact' aria-label='Get a quote' className='bg-[#CDF5EC] border-2 border-[#CDF5EC] rounded-full p-3 m-2 lg:p-4 block'>
              Get Quote
            </Link>
          </div>
          <span className='text-white text-sm lg:text-xl flex justify-center mt-12 tracking-[14px]'>
            FREE HAND NEEDLE
          </span>
          <span className='text-white text-sm lg:text-xl justify-center mt-2 tracking-[14px]'>
            SURGICAL STEEL
          </span>
          <h1 className='text-xl lg:text-4xl text-center text-white mt-12 tracking-[20px]'>
            PROFESSIONAL BODY PIERCING
          </h1>
        </div>
      </div>
    </main>
  );
}
