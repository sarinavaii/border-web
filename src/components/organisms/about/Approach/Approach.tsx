import XContainer from "@atoms/XContainer";
import { PrincipleSection } from "@services/types/about-us-page.types";
import Image from "next/image";

const Approach = ({ data }: { data: PrincipleSection }) => {
    const STATIC_DATA = [
        {
            id: 1,
            title: "Innovation",
            description:
                "We transform ideas into visionary designs that balance aesthetics, functionality, and sustainability.",
            image: "/images/approach/3square.png",
        },
        {
            id: 2,
            title: "Integrity",
            description: "Every decision prioritizes sustainability, innovative materials, and future-ready design.",
            image: "/images/approach/chart.png",
        },
        {
            id: 3,
            title: "Quality",
            description: "Our specialists manage construction with precision and agility, ensuring safety and quality.",
            image: "/images/approach/shapes.png",
        },
        {
            id: 4,
            title: "Sustainability",
            description: "We build structures and relationships that endure, focusing on positive, long-term impact.",
            image: "/images/approach/layer.png",
        },
    ];

    return (
        <div className="bg-dark">
            <XContainer className="lg:pt-[126px] pt-16 lg:pb-16 pb-12 text-light">
                <h3 className="lg:header-3 header-4 lg:mb-8 mb-4">{data.data.title}</h3>
                <div className="lg:paragraph-2 paragraph-4 max-w-[465px]">{data.data.description}</div>
            </XContainer>
            <XContainer className="lg:px-0! max-lg:pb-16">
                <div className="grid xl:grid-cols-4 lg:grid-cols-2 grid-cols-1 lg:divide-x max-lg:divide-y divide-gray">
                    {data.data.variant.map((item) => (
                        <div
                            key={item.title}
                            className="lg:text-light max-lg:bg-light group px-12 py-[100px] min-h-[400px] flex flex-col justify-between relative overflow-hidden z-1"
                        >
                            <span
                                aria-hidden="true"
                                className="pointer-events-none absolute -z-10 max-lg:hidden inset-0 left-0 top-0 h-full bg-light transition-all duration-300 group-hover:w-full w-0"
                            />
                            <Image
                                src={item.image_url}
                                alt={item.title}
                                width={96}
                                height={96}
                                className="group-hover:block lg:hidden absolute right-4 top-4"
                            />
                            <h4 className="header-3 group-hover:text-dark transition-colors">{item.title}</h4>
                            <div className="paragraph-3 lg:hidden group-hover:block text-dark">{item.description}</div>
                            <svg
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="self-end group-hover:hidden max-lg:hidden"
                            >
                                <path
                                    d="M14.4299 5.93005L20.4999 12.0001L14.4299 18.0701"
                                    stroke="white"
                                    strokeWidth={1.5}
                                    strokeMiterlimit={10}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M3.5 12H20.33"
                                    stroke="white"
                                    strokeWidth={1.5}
                                    strokeMiterlimit={10}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </div>
                    ))}
                </div>
            </XContainer>
        </div>
    );
};

export default Approach;
