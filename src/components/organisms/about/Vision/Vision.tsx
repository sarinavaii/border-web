import XContainer from "@atoms/XContainer";
import Image from "next/image";

const Vision = () => {
    return (
        <div className="bg-smoke">
            <XContainer className="flex flex-row-reverse max-lg:flex-col px-0! ">
                <div className="lg:w-1/2 lg:p-12 lg:pt-24 p-6 pt-12">
                    <h2 className="lg:header-3 header-4 mb-4">Our Vision</h2>
                    <div className="lg:paragraph-2 paragraph-4 lg:mb-20 mb-10">
                        Shaping tomorrow’s communities with creativity and impact.
                    </div>
                    <div className="flex flex-col gap-6">
                        {[
                            "Every detail is executed with precision, setting new benchmarks in engineering and design.",
                            "Our multidisciplinary teams bring together world-class knowledge, innovation, and craftsmanship.",
                            "We build with tomorrow in mind — combining luxury, functionality, and responsibility.",
                            "From landmark developments to iconic infrastructures, our work defines skylines and communities.",
                        ].map((description, index) => (
                            <div key={description} className="flex items-center">
                                <div className="size-24 bg-smoke shrink-0 header-2 grid place-items-center font-encode-sans-expanded">
                                    {String(index + 1).padStart(2, "0")}
                                </div>
                                <div className="paragraph-3">{description}</div>
                            </div>
                        ))}
                    </div>
                </div>
                <Image
                    className="lg:w-1/2 h-auto object-cover"
                    src="/images/about/vision.webp"
                    alt="vision"
                    width={1000}
                    height={1000}
                />
            </XContainer>
            <XContainer className="flex max-lg:flex-col px-0!">
                <div className="lg:w-1/2 lg:p-12 lg:pt-24 p-6 pt-12">
                    <h2 className="lg:header-3 header-4 mb-4">Our Mission</h2>
                    <div className="lg:paragraph-2 paragraph-4 lg:mb-20 mb-10">
                        Driven by purpose, we build with passion and responsibility
                    </div>
                    <div className="flex flex-col gap-6">
                        {[
                            "Every detail is executed with precision, setting new benchmarks in engineering and design.",
                            "Our multidisciplinary teams bring together world-class knowledge, innovation, and craftsmanship.",
                            "We build with tomorrow in mind — combining luxury, functionality, and responsibility.",
                            "From landmark developments to iconic infrastructures, our work defines skylines and communities.",
                        ].map((description, index) => (
                            <div key={description} className="flex items-center">
                                <div className="size-24 bg-smoke shrink-0 header-2 grid place-items-center font-encode-sans-expanded">
                                    {String(index + 1).padStart(2, "0")}
                                </div>
                                <div className="paragraph-3">{description}</div>
                            </div>
                        ))}
                    </div>
                </div>
                <Image
                    className="lg:w-1/2 h-auto object-cover"
                    src="/images/about/mission.webp"
                    alt="mission"
                    width={1000}
                    height={1000}
                />
            </XContainer>
        </div>
    );
};

export default Vision;
