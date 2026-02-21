"use client";

import XContainer from "@atoms/XContainer";

import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lightgallery.css";
import LightGallery from "lightgallery/react";
import Image from "next/image";

import { ProjectPageItem } from "@services/types/project-page.types";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

const ProjectDetail = ({ data }: { data: ProjectPageItem }) => {
    return (
        <>
            <div className="h-20 bg-black mb-8"></div>
            <XContainer>
                <h1 className="lg:header-3 header-4 mb-4">{data.title}</h1>
                <div className="flex justify-between items-center mb-8">
                    <div className="lg:paragraph-4 paragraph-5">{data.company}</div>
                    <div className="flex gap-4 text-green paragraph-5 justify-center items-center lg:mb-4 max-lg:grow">
                        <span>{data.location}</span>
                        <span>
                            {data.start_date} - {data.end_date ? data.end_date : "Present"}
                        </span>
                    </div>
                </div>
                <div className="flex gap-4 max-md:flex-col mb-8">
                    {data.challenge && (
                        <div className="bg-smoke flex-1 hover:flex-[1.25] transition-all delay-100 duration-500">
                            <Image
                                src={data.challenge.image_url}
                                height={360}
                                width={360}
                                alt="placeholder"
                                className="w-full h-[360px] object-cover"
                            />
                            <div className="p-6 bg-smoke h-[200px] flex flex-col justify-between">
                                <div className="header-4">Challenge</div>
                                <div className="paragraph-4">{data.challenge.description}</div>
                            </div>
                        </div>
                    )}
                    {data.solution && (
                        <div className="bg-smoke flex-1 hover:flex-[1.25] transition-all delay-100 duration-500">
                            <div className="p-6 bg-smoke h-[200px] flex flex-col justify-between">
                                <div className="header-4">Solution</div>
                                <div className="paragraph-4">{data.solution.description}</div>
                            </div>
                            <Image
                                src={data.solution.image_url}
                                height={360}
                                width={360}
                                alt="placeholder"
                                className="w-full h-[360px] object-cover"
                            />
                        </div>
                    )}
                    {data.result && (
                        <div className="bg-smoke flex-1 hover:flex-[1.25] transition-all delay-100 duration-500">
                            <Image
                                src={data.result.image_url}
                                height={360}
                                width={360}
                                alt="placeholder"
                                className="w-full h-[360px] object-cover"
                            />
                            <div className="p-6 bg-smoke h-[200px] flex flex-col justify-between">
                                <div className="header-4">Result</div>
                                <div className="paragraph-4">{data.result.description}</div>
                            </div>
                        </div>
                    )}
                </div>
            </XContainer>
            <div className="border-y border-gray my-12">
                <XContainer className="lg:p-0!">
                    <div className="grid grid-cols-4 h-24">
                        <div className="h-full border-r border-gray"></div>
                        <div className="h-full"></div>
                        <div className="h-full"></div>
                        <div className="h-full border-l border-gray"></div>
                    </div>
                </XContainer>
            </div>
            <XContainer>
                <div className="paragraph-4" dangerouslySetInnerHTML={{ __html: data.description }}></div>
            </XContainer>
            <div className="border-y border-gray my-12">
                <XContainer className="lg:p-0!">
                    <div className="grid grid-cols-4 h-24">
                        <div className="h-full border-r border-gray"></div>
                        <div className="h-full"></div>
                        <div className="h-full"></div>
                        <div className="h-full border-l border-gray"></div>
                    </div>
                </XContainer>
            </div>
            <XContainer>
                <h1 className="lg:header-3 header-4 mb-8">Gallery</h1>
                <LightGallery
                    elementClassNames="grid md:grid-cols-4 grid-cols-2 gap-4 mb-20"
                    speed={500}
                    plugins={[lgThumbnail, lgZoom]}
                >
                    {data.gallery_image.map((image) => (
                        <a href={image.image_url} key={image.image_url}>
                            <img className="aspect-square object-cover" src={image.image_url} />
                        </a>
                    ))}
                </LightGallery>
            </XContainer>
        </>
    );
};

export default ProjectDetail;
