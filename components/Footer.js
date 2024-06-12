'use client'
import { useState, useEffect } from "react";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa";
import { BsTelephone } from "react-icons/bs";

export default function Footer() {
    const [currentYear, setCurrentYear] = useState("");

    useEffect(() => {
        const year = new Date().getFullYear();
        setCurrentYear(year.toString());
    }, []);

    return (
        <div className="fixed bottom-0 left-0 w-full bg-[#CDF5EC]/[.6] lg:p-4 flex justify-center items-center flex-col">
            {/* <div className="flex items-center space-x-4 sm:mb-0">
                <FaGoogle size={30} />
                <FaFacebook size={30} />
            </div> */}
            <div className="flex items-center mt-2">
                <BsTelephone />
                <a className="ml-1" href="tel:301-997-3385">(301)997-3385</a>
            </div>

            <div className="flex items-center">
                <FaRegCopyright />
                <span className="ml-1">{currentYear} SweetStingPiercing</span>
            </div>
        </div>
    );
}
