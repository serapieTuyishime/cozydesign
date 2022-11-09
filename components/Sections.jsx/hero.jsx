import Image from "next/image";
import Button from "../General/Button";

export default function Hero() {
    return (
        <div className="bg-gradient-to-l from-darkBlue to-darkMaroon">
            {/* <div className="container grid px-10 mx-auto overflow-hidden bg-white lg:grid-cols-2 xl:px-0 sm:pt-20 lg:pt-0 lg:pb-3 max-w-custom sm:px-24 lg:px-6"> */}

            <div className="grid overflow-hidden lg:grid-cols-2 wrapper sm:pt-20 lg:pt-0 lg:pb-3">
                <div className="grid gap-12 pt-10 lg:pt-0 sm:w-11/12 lg:w-full">
                    <h1 className="text-6xl font-extrabold sm:text-7.3xl font-fraunces144ptsupersoft leading-tight text-primary lg:text-[90px] lg:font-bold lg:leading-hug">
                        Your design team for the cost of a salary.
                    </h1>
                    <label className="text-3xl font-semibold lg:font-normal text-light text-opacity-70 sm:text-[40px] leading-tight">
                        Full-service design support that growing B2B and
                        non-profit organizations need. Are you strained because
                        you should have a design team but you don't?
                    </label>
                    <Button />
                </div>
                    <div className="w-full md:h-[38rem] h-[21rem]  relative flex items-end lg:h-full ">
                        <Image
                            width={334}
                            height={339.67}
                            alt="hero image"
                            src="/images/art.png"
                            className="absolute w-full h-full md:-bottom-20 -bottom-12 lg:-bottom-24 lg:-right-36 lg:scale-x-125 xl:scale-100 lg:h-5/6 xl:h-full xl:right-0 xl:-bottom-0 "
                        />
                    </div>
            </div>
        </div>
    );
}
