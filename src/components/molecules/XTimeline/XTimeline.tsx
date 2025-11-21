import Image from "next/image";
import React from "react";

interface TimelineItem {
    year: string;
    title: string;
    description: string;
    image?: string;
}

interface XTimelineProps {
    items?: TimelineItem[];
}

const XTimeline: React.FC<XTimelineProps> = ({ items }) => {
    return (
        <div className="relative">
            <div className="absolute lg:left-1/2 right-0 transform lg:-translate-x-1/2 w-0.5 h-full bg-gray"></div>
            {items &&
                items.map((item, index) => (
                    <div key={index} className="lg:pb-16 pb-8 relative">
                        {index % 2 === 1 ? (
                            <div className="flex items-start max-lg:pr-8">
                                <div className="lg:w-1/2 max-lg:hidden pr-12 flex justify-end">
                                    {item.image && (
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            width={1280}
                                            height={720}
                                            className="w-full h-[250px] object-cover"
                                        />
                                    )}
                                </div>

                                <div className="absolute lg:left-1/2 right-0 transform lg:-translate-x-1/2 translate-x-1/2 w-5 h-5 top-8 bg-green rounded-full z-10"></div>

                                <div className="lg:w-1/2 w-full lg:pl-12">
                                    <div className="bg-white pt-6 lg:text-left text-right">
                                        <div className="header-3 mb-2">{item.year}</div>
                                        <h3 className="header-5 text-green mb-3">{item.title}</h3>
                                        <p className="paragraph-3">{item.description}</p>
                                        {item.image && (
                                            <Image
                                                src={item.image}
                                                alt={item.title}
                                                width={1280}
                                                height={720}
                                                className="lg:hidden w-full lg:h-[250px] h-[200px] object-cover mt-2"
                                            />
                                        )}
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="flex items-start max-lg:pr-8">
                                <div className="lg:w-1/2 w-full lg:pr-12">
                                    <div className="bg-white pt-6 text-right">
                                        <div className="header-3 mb-2">{item.year}</div>
                                        <h3 className="header-5 text-green mb-3">{item.title}</h3>
                                        <p className="paragraph-3">{item.description}</p>
                                        {item.image && (
                                            <Image
                                                src={item.image}
                                                alt={item.title}
                                                width={1280}
                                                height={720}
                                                className="lg:hidden w-full lg:h-[250px] h-[200px] object-cover mt-2"
                                            />
                                        )}
                                    </div>
                                </div>
                                <div className="absolute lg:left-1/2 right-0 transform lg:-translate-x-1/2 translate-x-1/2 w-5 h-5 top-8 bg-green rounded-full z-10"></div>
                                <div className="lg:w-1/2 max-lg:hidden pl-12 flex justify-end">
                                    {item.image && (
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            width={1280}
                                            height={720}
                                            className="w-full h-[250px] object-cover"
                                        />
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                ))}
        </div>
    );
};

export default XTimeline;
