"use client";

import XButton from "@atoms/XButton";
import XContainer from "@atoms/XContainer";
import Image from "next/image";

const Projects = () => {
    const STATIC_PROJECTS = [
        {
            id: 1,
            title: "Skyline",
            company: "CKR Company",
            location: "Dubai, UAE",
            date: "May 2022, Jun 2023",
            detailsUrl: "/",
            challenge: "Minimizing energy use and environmental footprint in a 500-unit housing project",
            solution: "Applied eco-friendly materials, solar energy systems, and smart water management",
            result: "Delivered LEED-certified structure, attracting 10 multinational tenants",
            image: "/images/footer-bg.webp",
        },
        {
            id: 2,
            title: "Azure Heights",
            company: "Global Construction Ltd",
            location: "Singapore",
            date: "Jan 2023, Dec 2023",
            detailsUrl: "/",
            challenge: "Creating a mixed-use development that integrates commercial and residential spaces seamlessly",
            solution: "Implemented modular design principles with flexible spaces and advanced acoustic insulation",
            result: "Achieved 95% occupancy rate within 6 months of completion",
            image: "/images/footer-bg.webp",
        },
        {
            id: 3,
            title: "Green Valley",
            company: "EcoBuild Solutions",
            location: "London, UK",
            date: "Mar 2022, Aug 2023",
            detailsUrl: "/",
            challenge:
                "Retrofitting historic buildings with modern sustainable technology without compromising heritage",
            solution: "Integrated hidden solar panels, geothermal heating, and smart building management systems",
            result: "Reduced carbon emissions by 60% while preserving architectural integrity",
            image: "/images/footer-bg.webp",
        },
        {
            id: 4,
            title: "Sunset Residences",
            company: "Urban Innovators",
            location: "Sydney, Australia",
            date: "Feb 2021, Nov 2022",
            detailsUrl: "/",
            challenge: "Maximizing natural lighting for health and energy savings in a dense city setting",
            solution: "Designed unique window placements, rooftop gardens, and passive ventilation",
            result: "Improved resident well-being and reduced energy bills by 30%",
            image: "/images/footer-bg2.webp",
        },
        {
            id: 5,
            title: "Harbor Point Offices",
            company: "Maritime Build Co.",
            location: "Rotterdam, Netherlands",
            date: "Jul 2020, Sep 2021",
            detailsUrl: "/",
            challenge: "Constructing office space to withstand harsh port climates and fluctuating water levels",
            solution: "Leveraged water-resistant materials, flexible foundations, and green rooftops",
            result: "Zero water ingress incidents in 2 years and increased client satisfaction scores",
            image: "/images/footer-bg3.webp",
        },
        {
            id: 6,
            title: "Desert Bloom Mall",
            company: "NextGen Retail Devs",
            location: "Riyadh, Saudi Arabia",
            date: "May 2021, Dec 2022",
            detailsUrl: "/",
            challenge: "Ensuring thermal comfort in extreme heat for a large shopping complex",
            solution: "Installed advanced HVAC, reflective surfaces, and an interior oasis",
            result: "150K visitors monthly, maintaining 40% lower cooling costs",
            image: "/images/footer-bg4.webp",
        },
    ];
    return STATIC_PROJECTS.map((project) => (
        <div key={project.id}>
            <XContainer className="lg:p-0! max-lg:hidden">
                <div className="grid grid-cols-4 h-12">
                    <div className="h-full border-r border-gray"></div>
                    <div className="h-full"></div>
                    <div className="h-full"></div>
                    <div className="h-full border-l border-gray"></div>
                </div>
            </XContainer>
            <div className="border-y border-gray">
                <XContainer className="lg:p-0!">
                    <div className="grid lg:grid-cols-4 grid-cols-1 bg-light">
                        <div className="col-span-1 lg:border-r max-lg:border-x border-gray py-6 lg:pr-6 max-lg:px-6">
                            <div className="lg:bg-smoke bg-light max-lg:border max-lg:border-gray p-6 lg:pt-[72px] max-lg:p-0 flex flex-col justify-between lg:gap-12 h-full">
                                <Image
                                    src="/images/footer-bg.webp"
                                    height={360}
                                    width={360}
                                    alt="placeholder"
                                    className="w-full h-[360px] object-cover lg:hidden"
                                />
                                <div className="max-lg:p-4">
                                    <div className="lg:header-3 header-4 lg:mb-8 mb-2.5">{project.title}</div>
                                    <div className="lg:paragraph-4 paragraph-5">{project.company}</div>
                                </div>
                                <div className="flex lg:flex-col max-lg:items-center max-lg:border-t max-lg:border-gray">
                                    <div className="flex gap-4 text-green paragraph-5 justify-center items-center lg:mb-4 max-lg:grow">
                                        <span>{project.location}</span>
                                        <span>{project.date}</span>
                                    </div>
                                    <XButton
                                        as="link"
                                        mode="book"
                                        href="/"
                                        classNames={{
                                            inner: "block text-center",
                                        }}
                                    >
                                        View Details
                                    </XButton>
                                </div>
                            </div>
                        </div>
                        <div className="lg:col-span-3 max-lg:hidden py-6 pl-6">
                            <div className="flex gap-4">
                                <div className="bg-smoke flex-1 hover:flex-[1.25] transition-all delay-100 duration-500">
                                    <Image
                                        src="/images/footer-bg.webp"
                                        height={360}
                                        width={360}
                                        alt="placeholder"
                                        className="w-full h-[360px] object-cover"
                                    />
                                    <div className="p-6 bg-smoke h-[200px] flex flex-col justify-between">
                                        <div className="header-4">Challenge</div>
                                        <div className="paragraph-4">{project.challenge}</div>
                                    </div>
                                </div>
                                <div className="bg-smoke flex-1 hover:flex-[1.25] transition-all delay-100 duration-500">
                                    <div className="p-6 bg-smoke h-[200px] flex flex-col justify-between">
                                        <div className="header-4">Solution</div>
                                        <div className="paragraph-4">{project.solution}</div>
                                    </div>
                                    <Image
                                        src="/images/footer-bg.webp"
                                        height={360}
                                        width={360}
                                        alt="placeholder"
                                        className="w-full h-[360px] object-cover"
                                    />
                                </div>
                                <div className="bg-smoke flex-1 hover:flex-[1.25] transition-all delay-100 duration-500">
                                    <Image
                                        src="/images/footer-bg.webp"
                                        height={360}
                                        width={360}
                                        alt="placeholder"
                                        className="w-full h-[360px] object-cover"
                                    />
                                    <div className="p-6 bg-smoke h-[200px] flex flex-col justify-between">
                                        <div className="header-4">Result</div>
                                        <div className="paragraph-4">{project.result}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </XContainer>
            </div>
            <XContainer className="lg:p-0!">
                <div className="grid grid-cols-4 h-12">
                    <div className="h-full border-r border-gray"></div>
                    <div className="h-full"></div>
                    <div className="h-full"></div>
                    <div className="h-full border-l border-gray"></div>
                </div>
            </XContainer>
        </div>
    ));
};

export default Projects;
