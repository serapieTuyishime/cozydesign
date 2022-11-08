import Link from "next/link";
import Image from "next/image";
export default function Footer() {
    const data = [1, 2, 3, 4, 5];
    const socials = [
        "twitter.svg",
        "linkedin.svg",
        "fb.svg",
        "ig.svg",
        "tube.svg",
        "clogo.svg",
        "email.svg",
    ];
    return (
        <div className="bg-light py-12">
            <div className="wrapper grid gap-4">
                <div className="flex justify-between flex-col lg:flex-row gap-8">
                    <div className="flex flex-col justify-center items-center lg:flex-row gap-6">
                        <Image
                            src="/logo-success.svg"
                            width={72.48}
                            height={50}
                            alt="logo green"
                        />
                        <div className="flex flex-col text-center gap-3 text-secondary text-xs">
                            <Link href="/about">About</Link>
                            <Link href="/about">Services</Link>
                            <Link href="/about">Work</Link>
                            <Link href="/about">Blog</Link>
                            <Link href="/about">Contact</Link>
                        </div>
                    </div>
                    <div className="grid justify-items-center gap-4">
                        <div className="flex items-center gap-2 text-xs text-danger">
                            <Image height={24} width={24} src="/sdd.webp" />
                            San diego digital designers
                        </div>
                        <div className="flex justify-center gap-2">
                            {socials.map((key, index) => {
                                return (
                                    <div
                                        key={key}
                                        className="bg-blue-300 rounded-sm flex items-center h-6 w-6 justify-center p-1.5"
                                    >
                                        <Image
                                            height={24}
                                            width={24}
                                            src={"/icons/" + socials[index]}
                                            alt={socials[index]}
                                        />
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
                <div className="bg-primary h-0.5 w-full"></div>
                <div className="flex flex-col lg:flex-row justify-between gap-16">
                    <div className="flex flex-wrap gap-6">
                        <div className="grid gap-5">
                            <Image
                                alt="acrredition"
                                width={140}
                                height={52.24}
                                src="/logos/logo5.webp"
                            />
                            <p className="text-sm font-geomanist font-semibold">
                                BBB rating: A+
                            </p>
                        </div>
                        <Image
                            src="/bureau.png"
                            height={73.36}
                            width={140}
                            alt="Bureau of accredators"
                        />
                        <div className="flex gap-4 rounded-bl-3xl rounded-tr-3xl bg-white pr-5 max-w-max ">
                            <div className="bg-dark p-4 flex justify-center items-center rounded-bl-3xl rounded-tr-3xl">
                                <Image src="/clog.svg" width={24} height={24} />
                            </div>
                            <div className="font-geomanist grid rounded-br-3xl ">
                                <div className="flex items-center gap-2 ">
                                    <p className="text-xl ">5.0</p>
                                    <div className="flex gap-1 ">
                                        {data.map((key) => {
                                            return (
                                                <svg
                                                    className="w-4 h-4"
                                                    key={key}
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="#FF3D2E"
                                                    viewBox="0 0 12 12"
                                                >
                                                    <g data-name="Layer 2">
                                                        <path
                                                            d="m5.94 9.38-3.11 1.88a.5.5 0 0 1-.75-.54l.83-3.53L.17 4.81a.5.5 0 0 1 .29-.87l3.6-.31L5.48.3a.5.5 0 0 1 .92 0l1.41 3.33 3.61.31a.49.49 0 0 1 .28.87L9 7.19l.82 3.53a.5.5 0 0 1-.74.54Z"
                                                            data-name="Layer 1"
                                                        />
                                                    </g>
                                                </svg>
                                            );
                                        })}
                                    </div>
                                </div>
                                <Link href="#" className="text-xs">
                                    Based on 16 Cluthes reviews
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="grid justify-items-center lg:justify-items-end gap-12">
                        <span className="text-xs text-dark">
                            Made with ❤ in beautiful, sunny San Diego. ©2021
                        </span>
                        <div className="flex gap-4 text-secondary text-xs">
                            <Link href="/privacy">Privacy</Link>
                            <Link href="/privacy">Photo edit</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
