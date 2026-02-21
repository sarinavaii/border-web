"use client";

import XButton from "@atoms/XButton";
import XContainer from "@atoms/XContainer";
import { Routes } from "@core/routes/routes";
import { ProjectSection } from "@services/types/main-page.types";
import Image from "next/image";
import { useRef } from "react";
import "swiper/css";
import "swiper/css/effect-creative";
import { EffectCreative } from "swiper/modules";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";

const Projects = ({ data }: { data: ProjectSection }) => {
    const swiperRef = useRef<SwiperRef | null>(null);

    return (
        <div>
            <XContainer className="lg:p-0! max-lg:hidden">
                <div className="grid grid-cols-4 h-24">
                    <div className="h-full border-r border-gray"></div>
                    <div className="h-full"></div>
                    <div className="h-full"></div>
                    <div className="h-full border-l border-gray"></div>
                </div>
            </XContainer>
            <div className="border-y border-gray">
                <XContainer className="lg:p-0!">
                    <Swiper
                        effect={"creative"}
                        creativeEffect={{
                            prev: {
                                shadow: false,
                                translate: ["-20%", 0, -1],
                            },
                            next: {
                                shadow: false,
                                translate: ["100%", 0, 0],
                            },
                        }}
                        slidesPerView={1}
                        ref={swiperRef}
                        loop={true}
                        modules={[EffectCreative]}
                    >
                        {data.data.map((project) => (
                            <SwiperSlide key={project.id}>
                                <div className="grid lg:grid-cols-4 grid-cols-1 bg-light">
                                    <div className="col-span-1 lg:border-r max-lg:border-x border-gray py-6 lg:pr-6 max-lg:px-6">
                                        <div className="lg:bg-smoke bg-light max-lg:border max-lg:border-gray p-6 lg:pt-[72px] max-lg:p-0 flex flex-col justify-between lg:gap-12 h-full">
                                            <Image
                                                src={
                                                    project.result?.image_url ||
                                                    project.challenge?.image_url ||
                                                    project.solution?.image_url ||
                                                    ""
                                                }
                                                height={360}
                                                width={360}
                                                alt="placeholder"
                                                className="w-full h-[360px] object-cover lg:hidden"
                                            />
                                            <div className="max-lg:p-4">
                                                <div className="lg:header-3 header-4 lg:mb-8 mb-2.5">
                                                    {project.title}
                                                </div>
                                                <div className="lg:paragraph-4 paragraph-5">{project.company}</div>
                                            </div>
                                            <div className="flex lg:flex-col max-lg:items-center max-lg:border-t max-lg:border-gray">
                                                <div className="flex gap-4 text-green paragraph-5 justify-center items-center lg:mb-4 max-lg:grow">
                                                    <span>{project.location}</span>
                                                    <span>
                                                        {project.start_date} -{" "}
                                                        {project.end_date ? project.end_date : "Present"}
                                                    </span>
                                                </div>
                                                <XButton
                                                    as="link"
                                                    mode="book"
                                                    href={Routes.project(project.id.toString())}
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
                                            {project.challenge && (
                                                <div className="bg-smoke flex-1 hover:flex-[1.25] transition-all delay-100 duration-500">
                                                    <Image
                                                        src={project.challenge.image_url}
                                                        height={360}
                                                        width={360}
                                                        alt="placeholder"
                                                        className="w-full h-[360px] object-cover"
                                                    />
                                                    <div className="p-6 bg-smoke h-[200px] flex flex-col justify-between">
                                                        <div className="header-4">Challenge</div>
                                                        <div className="paragraph-4">
                                                            {project.challenge.description}
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                            {project.solution && (
                                                <div className="bg-smoke flex-1 hover:flex-[1.25] transition-all delay-100 duration-500">
                                                    <div className="p-6 bg-smoke h-[200px] flex flex-col justify-between">
                                                        <div className="header-4">Solution</div>
                                                        <div className="paragraph-4">
                                                            {project.solution.description}
                                                        </div>
                                                    </div>
                                                    <Image
                                                        src={project.solution.image_url}
                                                        height={360}
                                                        width={360}
                                                        alt="placeholder"
                                                        className="w-full h-[360px] object-cover"
                                                    />
                                                </div>
                                            )}
                                            {project.result && (
                                                <div className="bg-smoke flex-1 hover:flex-[1.25] transition-all delay-100 duration-500">
                                                    <Image
                                                        src={project.result.image_url}
                                                        height={360}
                                                        width={360}
                                                        alt="placeholder"
                                                        className="w-full h-[360px] object-cover"
                                                    />
                                                    <div className="p-6 bg-smoke h-[200px] flex flex-col justify-between">
                                                        <div className="header-4">Result</div>
                                                        <div className="paragraph-4">{project.result.description}</div>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </XContainer>
            </div>
            <XContainer className="lg:p-0!">
                <div className="grid lg:grid-cols-4 grid-cols-1 h-24">
                    <div className="h-full lg:border-r max-lg:border-x max-lg:ps-6 border-gray flex items-center gap-4 py-6 lg:ps-4">
                        <XButton
                            onClick={() => swiperRef.current?.swiper.slidePrev()}
                            classNames={{ inner: "cursor-pointer p-0! size-12! flex items-center justify-center" }}
                        >
                            <svg
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M9.57 5.93018L3.5 12.0002L9.57 18.0702"
                                    stroke="#1C1C1C"
                                    strokeWidth={1.5}
                                    strokeMiterlimit={10}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M20.5 12H3.67004"
                                    stroke="#1C1C1C"
                                    strokeWidth={1.5}
                                    strokeMiterlimit={10}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </XButton>
                        <XButton
                            onClick={() => swiperRef.current?.swiper.slideNext()}
                            classNames={{ inner: "cursor-pointer p-0! size-12! flex items-center justify-center" }}
                        >
                            <svg
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M14.4301 5.93018L20.5001 12.0002L14.4301 18.0702"
                                    stroke="#1C1C1C"
                                    strokeWidth={1.5}
                                    strokeMiterlimit={10}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M3.5 12H20.33"
                                    stroke="#1C1C1C"
                                    strokeWidth={1.5}
                                    strokeMiterlimit={10}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </XButton>
                    </div>
                    <div className="h-full max-lg:hidden"></div>
                    <div className="h-full max-lg:hidden"></div>
                    <div className="h-full max-lg:hidden border-l border-gray p-6">
                        <XButton
                            as="link"
                            mode="book"
                            href={Routes.PROJECTS}
                            classNames={{
                                inner: "block text-center",
                            }}
                        >
                            View All Projects
                        </XButton>
                    </div>
                </div>
            </XContainer>
        </div>
    );
};

export default Projects;
