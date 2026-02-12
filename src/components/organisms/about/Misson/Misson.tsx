import XContainer from "@atoms/XContainer";
import { OurMissionSection } from "@services/types/about-us-page.types";
import Image from "next/image";

const Misson = ({ data }: { data: OurMissionSection }) => {
    return (
        <div className="bg-smoke">
            <XContainer className="flex max-lg:flex-col px-0!">
                <div className="lg:w-1/2 lg:p-12 lg:py-24 p-6 py-12">
                    <h2 className="lg:header-3 header-4 mb-4">Our Mission</h2>
                    <div className="lg:paragraph-2 paragraph-4 lg:mb-20 mb-10">{data.data.description}</div>
                    <div className="flex flex-col gap-6">
                        {data.data.variant.map((variant, index) => (
                            <div key={variant.description} className="flex items-center">
                                <div className="size-24 bg-smoke shrink-0 header-2 grid place-items-center font-encode-sans-expanded">
                                    {String(index + 1).padStart(2, "0")}
                                </div>
                                <div className="paragraph-3">{variant.description}</div>
                            </div>
                        ))}
                    </div>
                </div>
                <Image
                    className="lg:w-1/2 h-auto object-cover"
                    src={data.data.image_url}
                    alt="mission"
                    width={1000}
                    height={1000}
                />
            </XContainer>
        </div>
    );
};

export default Misson;
