'use client'
import { useState } from "react";
import Image from "next/image";

export default function Card({ title, details, img, classes, healTime }) {
    const [showDetails, setShowDetails] = useState(false);

    return (
        <div className="relative border-2 rounded-lg overflow-hidden card w-[200px] lg:w-80 h-52" onClick={() => setShowDetails(!showDetails)}>
            <Image src={img} alt={title} layout="fill" objectFit="cover" className={`absolute inset-0 ${showDetails && 'opacity-40'}`} />
            {showDetails ? (
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white bg-black bg-opacity-60 p-2 lg:p-4">
                    <p className="text-sm lg:text-md">{healTime}</p>
                    <div className='text-[10px]  lg:text-[20px] mt-2 lg:mt-4'>
                        <p>{details}</p>
                    </div>
                </div>
            ) : (
                <h1 className={`${classes} absolute tracking-[10px] inset-0 flex items-center justify-center text-md lg:text-2xl text-center text-white`}>
                    {title}
                </h1>
            )}
        </div>
    );
}
