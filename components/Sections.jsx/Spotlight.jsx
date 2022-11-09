import { data } from "autoprefixer";
import Image from "next/image";
import Button from "../General/Button";

export default function Spotlight() {
    const data = {
        part1: {
            image1: {
                path: "/logo1.webp",
                height: 140,
                width: 140,
            },
            image2: {
                path: "/logo2.webp",
                height: 160,
                width: 140,
            },
            image3: {
                path: "/logo3.webp",
                height: 140,
                width: 140,
            },
            image4: {
                path: "/logo4.webp",
                height: 140,
                width: 140,
            },
        },
        image5: {
            path: "/logo5.webp",
            height: 62.84,
            width: 140,
        },
        part3: {
            image7: {
                path: "/logo7.webp",
                height: 140,
                width: 140,
            },
            image8: {
                path: "/logo8.webp",
                height: 165.7,
                width: 120,
            },
            image9: {
                path: "/logo9.webp",
                height: 140,
                width: 140,
            },
            image10: {
                path: "/logo10.webp",
                height: 66.55,
                width: 150,
            },
        },
    };
    return (
        <div className="spotlight">
            <div className="grid items-center pb-24 wrapper-left lg:grid-cols-2 sm:pt-44 lg:py-56 py-28 ">
                <div className="grid">
                    <div className="flex text-3xl font-geomanistLight">
                        <span>🌴</span>
                        <span>🐯</span>
                        <span>US</span>
                    </div>
                    <h1 className="text-[70px] pt-14 font-bold text-dark capitalize">
                        get cozy
                    </h1>
                    <label className="text-4xl leading-snug sm:w-11/12 text-tertiary">
                        Design & digital marketing <br className="sm:hidden lg:block" />{" "}
                        in San Diego, California
                    </label>
                    <p className="text-dark text-[22px] pt-10 pb-6 tracking-wider leading-relaxed">
                        We’re an award-winning design shop based in South Park,
                        San Diego. We efficiently combine the best parts of user
                        experience (UX) with creative design and execution to
                        create effective collateral that connects with the human
                        beings who interact with them. 🤯
                    </p>
                    <p className="text-dark text-[22px] pb-8 tracking-wider leading-relaxed">
                        No epic quests for inspiration. Just pragmatic
                        collaboration and efficient results from big-agency
                        graduates with decades of experience.
                    </p>
                    <Button text="why we do what we do" />
                </div>
                <div className="grid items-center gap-10 lg:gap-0 sm:grid-cols-2">
                    <div className="grid content-center gap-10 justify-items-center">
                        {Object.keys(data.part1).map((index, key) => {
                            return (
                                <Image
                                    key={key}
                                    alt={key}
                                    width={data.part1[index].width}
                                    height={data.part1[index].height}
                                    src={"/logos" + data.part1[index].path}
                                    className={`${
                                        key ==
                                            Object.keys(data.part1).length -
                                                1 && "-mt-10 sm:mt-0"
                                    }`}
                                />
                            );
                        })}
                    </div>
                    <div className="grid content-center gap-10 justify-items-center">
                        <div className="grid content-center gap-5 justify-items-center">
                            <Image
                                alt="acrredition"
                                width={data.image5.width}
                                height={data.image5.height}
                                src={"/logos" + data.image5.path}
                            />
                            <p className="text-sm font-semibold font-geomanist">
                                BBB rating: A+
                            </p>
                        </div>
                        {Object.keys(data.part3).map((index, key) => {
                            return (
                                <Image
                                    alt={key}
                                    key={key}
                                    width={data.part3[index].width}
                                    height={data.part3[index].height}
                                    src={"/logos" + data.part3[index].path}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}
