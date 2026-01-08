import XContainer from "@atoms/XContainer";
import { TransformSection } from "@services/types/main-page.types";

const About = ({ data }: { data: TransformSection }) => {
    const facilities = data.data.facilities ?? [];
    const middleIndex = Math.ceil(facilities.length / 2);
    const leftFacilities = facilities.slice(0, middleIndex);
    const rightFacilities = facilities.slice(middleIndex);

    return (
        <div className="bg-smoke lg:pt-[126px] lg:pb-[120px] py-16">
            <XContainer>
                <h2 className="lg:header-3 header-4 max-w-[900px] mx-auto text-center lg:mb-8 mb-4">
                    {data.data.title}
                </h2>
                <div className="lg:paragraph-2 paragraph-4 text-center mb-14">{data.data.description}</div>
                <div className="flex max-xl:flex-col gap-12 items-center">
                    <div className="lg:max-w-[275px] w-full flex flex-col lg:gap-16 gap-8">
                        {leftFacilities.map((facility, idx) => (
                            <div
                                key={facility.data.title + idx}
                                className="bg-light min-h-[200px] flex flex-col justify-between p-6"
                            >
                                <h4 className="header-4">{facility.data.title}</h4>
                                <div className="paragraph-4">{facility.data.description}</div>
                            </div>
                        ))}
                    </div>
                    <div className="grow lg:h-[560px]">
                        <video playsInline muted autoPlay loop className="h-full w-full object-cover">
                            <source src={data.data.file_url} type="video/mp4" />
                        </video>
                    </div>
                    <div className="lg:max-w-[275px] w-full flex flex-col lg:gap-16 gap-8">
                        {rightFacilities.map((facility, idx) => (
                            <div
                                key={facility.data.title + idx}
                                className="bg-light min-h-[200px] flex flex-col justify-between p-6"
                            >
                                <h4 className="header-4">{facility.data.title}</h4>
                                <div className="paragraph-4">{facility.data.description}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </XContainer>
        </div>
    );
};

export default About;
