import XContainer from "@atoms/XContainer";

const Benefits = () => {
    return (
        <div className="lg:border-b border-gray relative">
            <XContainer className="flex max-lg:flex-col px-0!">
                <div className="lg:w-1/2 lg:p-12 lg:pt-24 p-6 pt-12">
                    <h2 className="lg:header-3 header-4 mb-4">We don’t just deliver projects</h2>
                    <div className="lg:paragraph-2 paragraph-4 lg:mb-20 mb-10">we craft lasting legacies</div>
                    <div className="flex flex-col gap-6">
                        {[
                            {
                                title: "Unmatched Excellence",
                                description:
                                    "Every detail is executed with precision, setting new benchmarks in engineering and design.",
                            },
                            {
                                title: "Elite Expertise",
                                description:
                                    "Our multidisciplinary teams bring together world-class knowledge, innovation, and craftsmanship.",
                            },
                            {
                                title: "Sustainable Vision",
                                description:
                                    "We build with tomorrow in mind — combining luxury, functionality, and responsibility.",
                            },
                            {
                                title: "Proven Legacy",
                                description:
                                    "From landmark developments to iconic infrastructures, our work defines skylines and communities.",
                            },
                        ].map((item, index) => (
                            <div key={item.title} className="flex items-center">
                                <div className="size-24 bg-smoke shrink-0 header-2 grid place-items-center font-encode-sans-expanded text-dark/10">
                                    {String(index + 1).padStart(2, "0")}
                                </div>
                                <div className="p-6">
                                    <div className="header-4 mb-2.5">{item.title}</div>
                                    <div className="paragraph-5">{item.description}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="lg:w-1/2 w-full h-auto">
                    <video
                        playsInline
                        muted
                        autoPlay
                        loop
                        className="h-full object-cover lg:absolute lg:left-1/2 lg:right-0 lg:w-1/2 w-full"
                    >
                        <source src="/video/about.mp4" type="video/mp4" />
                    </video>
                </div>
            </XContainer>
        </div>
    );
};

export default Benefits;
