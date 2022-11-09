import ProfileImage from "../General/ProfileImage";

export default function Testimonials() {
    return (
        <div className="bg-light">
            <div className="pt-20 pb-3 wrapper-right sm:pt-40">
                <div className="grid content-center gap-12 mb-8 justify-items-center">
                    <span className="text-2xl font-semibold sm:text-6xl text-dark">
                        ❤️ from our clients
                    </span>
                    <div className="w-10 h-1 bg-primary"></div>
                </div>
                <div className="grid gap-8 pt-8 pb-20 sm:gap-4 lg:gap-8">
                    <div className="grid items-end gap-4 sm:grid-cols-2 lg:gap-8">
                        <div className="bg-dark noise grid py-20 pl-12 pr-10 gap-10  rounded-tl-[42%] rounded-bl-[50%] rounded-tr-[44%] shadow-2xl shadow-dark ">
                            <ProfileImage />
                            <div className="grid gap-4 text-xl text-right text-light">
                                <label className="font-semibold text-primary">
                                    “One of the top design professionals…”
                                </label>
                                <p className="text-lg font-semibold">
                                    I connect with hundreds of talented folks on
                                    a regular basis, and I can say with complete
                                    confidence that Lee is one of the best UX
                                    designers in Aquent/Vitamin T's global
                                    network.
                                </p>
                                <label className="text-xs font-semibold tracking-wide uppercase font-geomanist">
                                    SUSIE POLLASKY
                                </label>
                                <label className="-mt-3 text-xs font-light font-geomanist">
                                    Now: Leadership Recruiting @ Product Design{" "}
                                    <br /> at Facebook
                                </label>
                            </div>
                        </div>
                        <div className="bg-darkSuccess noise grid py-20 px-12 gap-10  rounded-t-[50%] rounded-br-[40%] shadow-2xl shadow-darkSuccess lg:rounded-t-[80%] lg:w-10/12">
                            <ProfileImage path="/clients/client2.webp" />
                            <div className="grid gap-4 text-xl text-left text-light">
                                <label className="font-semibold text-primary">
                                    “They’re a very well-rounded organization…”
                                </label>
                                <p className="text-lg font-semibold">
                                    Cost per conversion and all of those metrics
                                    have dropped significantly. We used to pay
                                    an average of $100 per lead that converts…
                                    now we have that down to about $20. Sessions
                                    and contacts have also gone up
                                    astronomically, at least threefold. Organic
                                    search and social media referrals have all
                                    continued to skyrocket. We’re really
                                    pleased.
                                </p>
                                <label className="text-xs font-semibold tracking-wide uppercase font-geomanist">
                                    MARTIN SPRITZER
                                </label>
                                <label className="-mt-3 text-xs font-light font-geomanist">
                                    General Manager @ iQuoteXpress
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="grid items-start content-center gap-4 justify-items-center sm:grid-cols-2 lg:gap-8 ">
                        <div className="bg-tertiary noise grid py-20 pr-10 gap-10 lg:px-10 rounded-b-[38%] rounded-tl-[60%] shadow-2xl shadow-tertiary lg:ml-18">
                            <div className="flex flex-col items-end gap-4 text-xl text-right text-light">
                                <div className="mb-6 max-w-max">
                                    <ProfileImage path="/clients/client3.webp" />
                                </div>

                                <label className="w-4/5 font-semibold text-right text-light">
                                    “They're just good people.”
                                </label>
                                <p className="text-lg font-semibold">
                                    They were a pleasure to work with and I'm
                                    really happy with the results. They pretty
                                    much nailed it.
                                </p>
                                <label className="text-xs font-semibold tracking-wide uppercase font-geomanist">
                                    ERIC WEISS
                                </label>
                                <label className="-mt-3 text-xs font-light font-geomanist">
                                    Founder @ Full Cycle Product Development
                                </label>
                            </div>
                        </div>
                        <div className="bg-secondary noise grid py-20 pl-12 pr-8 gap-10  rounded-b-[38%] rounded-tr-[60%] shadow-2xl shadow-secondary lg:pl-14 ">
                            <div className="flex flex-col items-start gap-4 text-xl text-left text-light">
                                <div className="mb-6 max-w-max">
                                    <ProfileImage path="/clients/client4.webp" />
                                </div>

                                <label className="w-4/5 font-semibold text-left lg:w-full text-light">
                                    “The project was successful”
                                </label>
                                <p className="text-lg font-semibold">
                                    They strive to come up with good design, and
                                    they focus on all the right things. The
                                    quality of their work is high, and all the
                                    deliverables are very well-organized and
                                    professional.
                                </p>
                                <label className="text-xs font-semibold tracking-wide uppercase font-geomanist">
                                    MICHAEL WEISFELD
                                </label>
                                <label className="-mt-3 text-xs font-light font-geomanist">
                                    Director of Digital Marketing @ National
                                    Funding
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
