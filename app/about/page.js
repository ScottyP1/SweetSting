import React from 'react';
import Image from 'next/image';
import profile from '@/public/profile.jpg';
import Layout from '@/components/Layout';

export default function About() {
    return (
        <Layout header='About Us'>
            <div className="m-4">
                <p >
                    Sweet Sting Piercings can guarantee a clean, safe piercing experience every time.
                    Our piercers are trained in San Diego, CA and have a passion to help others express themselves
                    through piercings. All piercings are done with surgical steel from Shining Light Piercings in San Diego.
                    We take the worry out of the equation so you can put your energy into healing your new piercings!
                    If you want to place an order before your piercing event we ask you contact 3 weeks in advance.
                    If you are okay with silver surgical steel for the initial piercing then you do not need to book that
                    far in advance. We hope to meet you soon and provide piercings for your next event, or in your house for
                    your comfort.
                </p>
            </div>
            <div className="flex md:flex-row justify-center md:space-y-0 md:space-x-4 xl:mt-6">
                <div className="rounded-lg overflow-hidden text-center flex-shrink-0">
                    <Image src={profile} width={150} height={150} alt="Profile" className='w-30 h-40 md:w-[300px] md:h-[300px] rounded-full lg:rounded-lg object-cover mx-auto' />
                    <span className='block text-white text-center mt-2 text-xl'>Founder</span>
                </div>
            </div>
        </Layout>

    );
}
