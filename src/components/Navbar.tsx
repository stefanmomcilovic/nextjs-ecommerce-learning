"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import { ShoppingBag } from "lucide-react";
import { useShoppingCart } from "use-shopping-cart";

export default function Navbar(){
    const pathName = usePathname();
    const { handleCartClick } = useShoppingCart();

    const links = [
        {
            href: "/",
            label: "Home"
        },
        {
            href: "/collections/Men",
            label: "Men"
        },
        {
            href: "/collections/Women",
            label: "Women"
        },
        {
            href: "/collections/Teens",
            label: "Teens"
        }
    ];

    return (
        <header className="mb-8 border-b">
            <div className="flex items-center justify-between mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl">
                <Link href="/">
                    <h1 className="text-2xl md:text-4xl font-bold">Next <span className="text-primary">Commerce</span></h1>
                </Link>

                <nav className="hidden gap-12 lg:flex 2xl:ml-16">
                    {links.map((link, index) => (
                        <div key={index}>
                            {pathName === link.href ? 
                            (
                                <Link href={link.href} className="text-lg font-semibold text-primary">
                                    {link.label}
                                </Link>
                            ) : (
                                <Link href={link.href} className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-primary">
                                    {link.label}
                                </Link>
                            )}
                        </div>
                    ))}
                </nav>

                <div className="flex divide-x border-none">
                    <Button variant={"outline"} className="flex flex-col gap-y-1.5 h-12 w-12 sm:h-20 sm:w-20 md:h-24 md:w-24 rounded-none border-none" onClick={() => handleCartClick()}>
                      <ShoppingBag />
                      <span className="hidden text-xs font-semibold text-gray-500 sm:block">Bag</span>         
                    </Button>
                </div>
            </div>
        </header>
    );
}