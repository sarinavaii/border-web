"use client";

import XButton from "@atoms/XButton";
import XContainer from "@atoms/XContainer";
import { Routes } from "@core/routes/routes";
import { ProjectSection } from "@services/types/projects-page.types";
import Image from "next/image";

const Projects = ({ data }: { data: ProjectSection }) => {
    return data.data.map((project) => (
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
                                    <div className="lg:header-3 header-4 lg:mb-8 mb-2.5">{project.title}</div>
                                    <div className="lg:paragraph-4 paragraph-5">{project.company}</div>
                                </div>
                                <div className="flex lg:flex-col max-lg:items-center max-lg:border-t max-lg:border-gray">
                                    <div className="flex gap-4 text-green paragraph-5 justify-center items-center lg:mb-4 max-lg:grow">
                                        <span>{project.location}</span>
                                        <span>
                                            {project.start_date} - {project.end_date ? project.end_date : "Present"}
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
                                            <div className="paragraph-4">{project.challenge.description}</div>
                                        </div>
                                    </div>
                                )}
                                {project.solution && (
                                    <div className="bg-smoke flex-1 hover:flex-[1.25] transition-all delay-100 duration-500">
                                        <div className="p-6 bg-smoke h-[200px] flex flex-col justify-between">
                                            <div className="header-4">Solution</div>
                                            <div className="paragraph-4">{project.solution.description}</div>
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
