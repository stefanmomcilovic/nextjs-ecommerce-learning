"use client";

import Image from "next/image";
import { urlForImage } from "../../sanity/lib/image";
import { useState } from "react";

interface iAppProps {
    images: any[];
}

export default function ImageGallery({images} : iAppProps) {
    const [bigImage, setBigImage] = useState(images[0]);

    const handleGalleryImageClick = (image: any) => { 
        setBigImage(image);
    };

    return (
        <div className="grid gap-4 lg:grid-cols-5">
            <div className="order-last flex gap-4 lg:order-none lg:flex-col">
                {images.map((image, index) => (
                    <div key={index} className="overflow-hidden rounded-lg bg-gray-100">
                        <Image 
                            src={urlForImage(image)} 
                            width={200} 
                            height={200}
                            alt={"Product Image " + index}
                            className="h-full w-full object-cover object-center cursor-pointer"
                            onClick={() => handleGalleryImageClick(image)}
                        />
                    </div>
                ))}
            </div>
            
            <div className="relative overflow-hidden rounded-lg bg-gray-100 lg:col-span-4">
                <Image 
                    src={urlForImage(bigImage)} 
                    width={500} 
                    height={500}
                    alt="Product Image"
                    className="h-full w-full object-cover object-center"
                />
                <span className="absolute left-0 top-0 rounded-br-lg bg-red-500 px-3 py-1.5 text-sm uppercase tracking-wider text-white">Sale</span>
            </div>
        </div>
    );
};