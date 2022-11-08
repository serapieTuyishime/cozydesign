import Image from "next/image";
import Button from "../General/Button";

export default function Hero() {
    return (
        <div className="bg-gradient-to-l from-darkBlue to-darkMaroon max-w-custom">
            <div className="grid lg:grid-cols-2 wrapper gap-10 overflow-hidden">
                <div className="grid py-10 gap-9">
                    <h1 className="font-fraunces144ptsupersoft font-extrabold text-6xl leading-hug text-primary ">
                        Your design team for the cost of a salary.
                    </h1>
                    <label className="text-light text-3xl font-semibold text-opacity-70">
                        Full-service design support that growing B2B and
                        non-profit organizations need. Are you strained because
                        you should have a design team but you don't?
                    </label>
                    <Button />
                </div>
                <div className=""><Image width={334} height={339.67} alt="hero image" src='/images/art.png' className="-mb-10"/></div>
            </div>
        </div>
    );
}
