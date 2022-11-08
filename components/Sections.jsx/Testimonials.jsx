import ProfileImage from "../General/ProfileImage";

export default function Testimonials() {
    return (
        <div className="bg-light">
            <div className="wrapper pt-20 pb-3">
                <div className="grid gap-12 justify-items-center content-center">
                    <span className="font-semibold text-2xl">
                        ❤️ from our clients
                    </span>
                    <div className="h-1 w-10 bg-primary"></div>
                </div>
                <div className="py-10 lg:wrapper-right grid gap-8 lg:grid-cols-2 lg:grid-rows-2">
                    <div className="bg-dark noise grid py-20 pl-12 pr-10 gap-10  rounded-tl-[42%] rounded-bl-[50%] rounded-tr-[44%] shadow-2xl shadow-dark">
                        <ProfileImage />
                        <div className="text-xl  text-right text-light grid gap-4">
                            <label className="text-primary font-semibold">
                                “One of the top design professionals…”
                            </label>
                            <p className="text-lg font-semibold">
                                I connect with hundreds of talented folks on a
                                regular basis, and I can say with complete
                                confidence that Lee is one of the best UX
                                designers in Aquent/Vitamin T's global network.
                            </p>
                            <label className="font-geomanist font-semibold uppercase tracking-wide text-xs">
                                SUSIE POLLASKY
                            </label>
                            <label className="font-geomanist font-light text-xs -mt-3">
                                Now: Leadership Recruiting @ Product Design{" "}
                                <br /> at Facebook
                            </label>
                        </div>
                    </div>
                    <div className="bg-darkSuccess noise grid py-20 px-12 gap-10  rounded-t-[50%] rounded-br-[40%] shadow-2xl shadow-darkSuccess">
                        <ProfileImage path="/clients/client2.webp" />
                        <div className="text-xl  text-left text-light grid gap-4">
                            <label className="text-primary font-semibold">
                                “They’re a very well-rounded organization…”
                            </label>
                            <p className="text-lg font-semibold">
                                Cost per conversion and all of those metrics
                                have dropped significantly. We used to pay an
                                average of $100 per lead that converts… now we
                                have that down to about $20. Sessions and
                                contacts have also gone up astronomically, at
                                least threefold. Organic search and social media
                                referrals have all continued to skyrocket. We’re
                                really pleased.
                            </p>
                            <label className="font-geomanist font-semibold uppercase tracking-wide text-xs">
                                MARTIN SPRITZER
                            </label>
                            <label className="font-geomanist font-light text-xs -mt-3">
                                General Manager @ iQuoteXpress
                            </label>
                        </div>
                    </div>
                    <div className="bg-tertiary noise grid py-20 pr-10 gap-10  rounded-b-[38%] rounded-tl-[60%] shadow-2xl shadow-tertiary">
                        <div className="text-xl flex flex-col items-end text-right text-light gap-4">
                            <div className="max-w-max mb-6"><ProfileImage path="/clients/client3.webp" /></div>

                            <label className="text-light font-semibold w-4/5 text-right">
                                “They're just good people.”
                            </label>
                            <p className="text-lg font-semibold">
                                They were a pleasure to work with and I'm really
                                happy with the results. They pretty much nailed
                                it.
                            </p>
                            <label className="font-geomanist font-semibold uppercase tracking-wide text-xs">
                                ERIC WEISS
                            </label>
                            <label className="font-geomanist font-light text-xs -mt-3">
                                Founder @ Full Cycle Product Development
                            </label>
                        </div>
                    </div>
                    <div className="bg-secondary noise grid py-20 pl-12 pr-8 gap-10  rounded-b-[38%] rounded-tr-[60%] shadow-2xl shadow-secondary">
                        <div className="text-xl flex flex-col items-start text-left text-light gap-4">
                            <div className="max-w-max mb-6"><ProfileImage path="/clients/client4.webp" /></div>

                            <label className="text-light font-semibold w-4/5 text-left">
                            “The project was successful”
                            </label>
                            <p className="text-lg font-semibold">
                            They strive to come up with good design, and they focus on all the right things. The quality of their work is high, and all the deliverables are very well-organized and professional.
                            </p>
                            <label className="font-geomanist font-semibold uppercase tracking-wide text-xs">
                            MICHAEL WEISFELD
                            </label>
                            <label className="font-geomanist font-light text-xs -mt-3">
                                Director of Digital Marketing @ National Funding
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
