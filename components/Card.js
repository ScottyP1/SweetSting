'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import ShimmerLoader from './ShimmerLoader';

export default function Card({ title, details, img, classes, healTime }) {
    const [showDetails, setShowDetails] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const loadingState = sessionStorage.getItem('cardLoading');
        if (loadingState === 'false') {
            setIsLoading(false);
        } else {
            const timer = setTimeout(() => {
                setIsLoading(false);
                sessionStorage.setItem('cardLoading', 'false');
            }, 1000);
            return () => clearTimeout(timer); // Clear timeout on component unmount
        }
    }, []);

    return (
        <>
            {isLoading ? (
                <div className="relative w-[200px] lg:w-80 h-52">
                    <ShimmerLoader />
                </div>
            ) : (
                <div className="relative border-2 rounded-lg overflow-hidden card w-[200px] xl:w-80 h-52" onClick={() => setShowDetails(!showDetails)}>
                    <Image src={img} alt={title} fill style={{ objectFit: 'cover' }} className={`absolute inset-0 ${showDetails && 'opacity-40'}`} />
                    {showDetails ? (
                        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white bg-black bg-opacity-60 p-2 lg:p-4">
                            <p className="text-sm lg:text-md">{healTime}</p>
                            <div className="text-[10px] lg:text-[20px] mt-2 lg:mt-4">
                                <p>{details}</p>
                            </div>
                        </div>
                    ) : (
                        <h1 className={`${classes} absolute tracking-[10px] inset-0 flex items-center justify-center text-md lg:text-2xl text-center text-white`}>
                            {title}
                        </h1>
                    )}
                </div>
            )}
        </>
    );
}
