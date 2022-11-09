import Image from "next/image";
import Link from "next/link";

export default function CallToAction() {
    return (
        <>
            <div className="relative w-full bg-black bg-opacity-80">
                <video
                    controls
                    autoPlay
                    loop
                    className="absolute object-cover w-full h-full "
                >
                    <source src="/video.webm" />
                </video>
                <div className="relative flex flex-col lg:flex-row items-center h-full gap-16 py-16 wrapper-left text-light sm:py-32 sm:w-[86%] sm:gap-6 lg:items-start content-start lg:w-full lg:gap-24">
                    <div className=" h-14 w-14 sm:h-32 sm:w-72 lg:w-[15%] ">
                        <Image
                            width={60}
                            height={50}
                            alt="San diego designers"
                            src="/sanDiego.svg"
                            className="object-fill w-full h-full"
                        />
                    </div>
                    <div className="grid gap-6 lg:w-2/3 ">
                        <h1 className="italic font-bold text-[40px] leading-hug sm:text-5xl">
                            Psst… <br />
                            are you a designer?
                        </h1>
                        <p className="text-lg text-light sm:text-xl">
                            Consider joining our{" "}
                            <Link
                                href="https://sddd.org"
                                className="font-bold text-danger"
                            >
                                San Diego Design Designers{" "}
                            </Link>{" "}
                            group. More than 700 people, we meet online via
                            Slack and in person at social events around the
                            city. It’s a great opportunity to share ideas, get
                            inspired, find support, and celebrate great design.
                        </p>
                    </div>
                </div>
            </div>
            <div className="bg-secondary py-18 ">
                <div className="text-5xl font-extrabold text-center text-white lg:text-primary sm:text-left lg:text-center wrapper sm:px-40">
                    🙋 How can we <br className="hidden sm:block lg:hidden" />
                    help?
                </div>
            </div>
        </>
    );
}
