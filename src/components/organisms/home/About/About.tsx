import XContainer from "@atoms/XContainer";

const About = () => {
    return (
        <div className="bg-smoke lg:pt-[126px] lg:pb-[120px] py-16">
            <XContainer>
                <h2 className="lg:header-3 header-4 max-w-[900px] mx-auto text-center lg:mb-8 mb-4">
                    Cities are growing, challenges are rising, and infrastructure must keep pace with the future.
                </h2>
                <div className="lg:paragraph-2 paragraph-4 text-center mb-14">
                    We exist to transform these challenges into opportunities.
                </div>
                <div className="flex max-xl:flex-col gap-12 items-center">
                    <div className="lg:max-w-[275px] w-full flex flex-col lg:gap-16 gap-8">
                        <div className="bg-light min-h-[200px] flex flex-col justify-between p-6">
                            <h4 className="header-4">Urban Growth</h4>
                            <div className="paragraph-4">
                                Cities are expanding faster than ever, demanding infrastructure that can keep pace with
                                tomorrow
                            </div>
                        </div>
                        <div className="bg-light min-h-[200px] flex flex-col justify-between p-6">
                            <h4 className="header-4">Complex Projects</h4>
                            <div className="paragraph-4">
                                We manage large-scale, complex projects with precision and expertise
                            </div>
                        </div>
                    </div>
                    <div className="grow lg:h-[560px]">
                        <video playsInline muted autoPlay loop className="h-full w-full object-cover">
                            <source src="/video/about.mp4" type="video/mp4" />
                        </video>
                    </div>
                    <div className="lg:max-w-[275px] w-full flex flex-col lg:gap-16 gap-8">
                        <div className="bg-light min-h-[200px] flex flex-col justify-between p-6">
                            <h4 className="header-4">Sustainability Needs</h4>
                            <div className="paragraph-4">
                                Every project is designed with sustainability and a forward-looking vision in mind
                            </div>
                        </div>
                        <div className="bg-light min-h-[200px] flex flex-col justify-between p-6">
                            <h4 className="header-4">Innovation & Technology</h4>
                            <div className="paragraph-4">
                                We deliver innovative solutions powered by advanced technology and creative engineering
                            </div>
                        </div>
                    </div>
                </div>
            </XContainer>
        </div>
    );
};

export default About;
