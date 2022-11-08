import Image from "next/image";
import Link from "next/link";

export default function CallToAction() {
    return (
        <>
        <div className="w-full h-[38rem] relative bg-black bg-opacity-80">
            <video
                controls
                autoPlay
                loop
                className="h-full object-cover absolute w-full "
            >
                <source src="/video.webm" />
            </video>
            <div className="wrapper-left relative text-light h-full grid content-center justify-items-center gap-16">
                <div className="">
                    <Image
                        width={60}
                        height={50}
                        alt="San diego designers"
                        src="/sanDiego.svg"
                    />
                </div>
                <div className="gap-6 grid">
                    <h1 className="italic font-bold text-[40px] leading-hug">
                        Psst… <br />
                        are you a designer?
                    </h1>
                    <p className="text-light text-lg">
                        Consider joining our{" "}
                        <Link
                            href="https://sddd.org"
                            className="text-danger font-bold"
                        >
                            San Diego Design Designers{" "}
                        </Link>{" "}
                        group. More than 700 people, we meet online via Slack
                        and in person at social events around the city. It’s a
                        great opportunity to share ideas, get inspired, find
                        support, and celebrate great design.
                    </p>
                </div>
            </div>
        </div>
        <div className="bg-secondary py-18 ">
            <div className="wrapper text-center text-5xl text-white font-extrabold">🙋 How can we help?</div>
        </div>
        </>
    );
}
