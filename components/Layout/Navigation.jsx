import Image from "next/image";

export default function Navigation() {
    return (
        <div className="bg-gradient-to-r from-dark to-darkMaroon">
            <div className="wrapper flex justify-center items-center gap-12 p-5">
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
                />
            </div>
        </div>
    );
}
