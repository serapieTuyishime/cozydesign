import Image from "next/image";
import Link from "next/link";

export default function Navigation() {
    return (
        <div className="bg-gradient-to-r from-dark to-darkMaroon">
            <div className="flex items-center justify-center gap-12 p-5 px-8 lg:justify-between">
                <Image
                    src="/images/logo.svg"
                    height={68.66}
                    width={100}
                    alt="logo"
                />
                <Image
                    src="/icons/menu.svg"
                    height={41}
                    width={40}
                    alt="Menu"
                    className="lg:hidden"
                />
                <div className="lg:flex items-center gap-8 text-[25px] text-light hidden ">
                    <Link href="/about" className="duration-500 hover:-translate-y-1 hover:text-primary">Get Cozy</Link>
                    <Link href="/services" className="duration-500 hover:-translate-y-1 hover:text-primary">What we do</Link>
                    <Link href="/work" className="duration-500 hover:-translate-y-1 hover:text-primary">Our work</Link>
                    <Link href="/blog" className="duration-500 hover:-translate-y-1 hover:text-primary">The blog</Link>
                    <Link href="/contact" className="duration-500 hover:-translate-y-1 hover:text-primary">Say hi</Link>
                    
                </div>
            </div>
        </div>
    );
}
