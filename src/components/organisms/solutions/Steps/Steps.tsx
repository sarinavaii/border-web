import XContainer from "@atoms/XContainer";
import { ScrollArea } from "@mantine/core";
import Image from "next/image";

const Steps = () => {
    return (
        <div className="pb-16">
            <XContainer className="lg:pt-24 pt-16 lg:pb-16 pb-12 text-dark">
                <h3 className="lg:header-3 header-4 lg:mb-4 mb-4">Innovation at Every Stage of Construction </h3>
                <div className="lg:paragraph-2 paragraph-4 max-w-[465px]">
                    Our solutions are designed to transform every part of the construction lifecycle into an
                    intelligent, data-driven process.
                </div>
            </XContainer>
            <ScrollArea
                type="hover"
                classNames={{
                    root: "relative after:content-[''] after:h-0.5 after:bg-gray after:absolute after:left-0 after:top-1/2 after:-translate-y-1/2 after:right-0",
                }}
            >
                <XContainer>
                    <div className="flex *:shrink-0 lg:gap-[180px] gap-[120px] *:after:absolute *:after:rounded-full *:after:content-[''] *:after:size-4 *:after:z-10 *:relative *:after:bg-gray *:after:left-0 *:after:bottom-0 *:after:translate-y-2 *:after:block *:after:-translate-x-2">
                        <div className="border-l-2 pt-8 pb-12 pl-6 w-[420px] border-gray">
                            <Image
                                src={"/images/solutions/discover.png"}
                                alt={"solutions"}
                                width={96}
                                height={96}
                                className="mb-12"
                            />
                            <h4 className="lg:header-3 header-4 mb-2">Discovery</h4>
                            <div className="paragraph-4">Identifying project needs and challenges</div>
                        </div>
                        <div className="border-l-2 pt-8 pb-12 pl-6 w-[420px] border-gray">
                            <Image
                                src={"/images/solutions/code.png"}
                                alt={"solutions"}
                                width={96}
                                height={96}
                                className="mb-12"
                            />
                            <h4 className="lg:header-3 header-4 mb-2">Develop</h4>
                            <div className="paragraph-4">Building and integrating digital systems</div>
                        </div>
                        <div className="border-l-2 pt-8 pb-12 pl-6 w-[420px] border-gray">
                            <Image
                                src={"/images/solutions/3square.png"}
                                alt={"solutions"}
                                width={96}
                                height={96}
                                className="mb-12"
                            />
                            <h4 className="lg:header-3 header-4 mb-2">Design</h4>
                            <div className="paragraph-4">Identifying project needs and challenges</div>
                        </div>
                        <div className="border-l-2 pt-8 pb-12 pl-6 w-[420px] border-gray">
                            <Image
                                src={"/images/solutions/3d-rotate.png"}
                                alt={"solutions"}
                                width={96}
                                height={96}
                                className="mb-12"
                            />
                            <h4 className="lg:header-3 header-4 mb-2">Deliver</h4>
                            <div className="paragraph-4">Identifying project needs and challenges</div>
                        </div>
                    </div>
                </XContainer>
                <XContainer>
                    <div className="flex *:shrink-0 lg:gap-[180px] gap-[120px] *:after:absolute *:after:rounded-full *:after:content-[''] *:after:size-4 *:after:z-10 *:relative *:after:bg-gray *:after:left-0 *:after:top-0 *:after:-translate-y-2 *:after:block *:after:-translate-x-2">
                        <div className="border-l-2 pt-8 pb-12 pl-6 w-[420px] border-gray lg:ml-[290px] ml-[290px]">
                            <Image
                                src={"/images/solutions/discover.png"}
                                alt={"solutions"}
                                width={96}
                                height={96}
                                className="mb-12"
                            />
                            <h4 className="lg:header-3 header-4 mb-2">Discovery</h4>
                            <div className="paragraph-4">Identifying project needs and challenges</div>
                        </div>
                        <div className="border-l-2 pt-8 pb-12 pl-6 w-[420px] border-gray">
                            <Image
                                src={"/images/solutions/code.png"}
                                alt={"solutions"}
                                width={96}
                                height={96}
                                className="mb-12"
                            />
                            <h4 className="lg:header-3 header-4 mb-2">Develop</h4>
                            <div className="paragraph-4">Building and integrating digital systems</div>
                        </div>
                        <div className="border-l-2 pt-8 pb-12 pl-6 w-[420px] border-gray">
                            <Image
                                src={"/images/solutions/3square.png"}
                                alt={"solutions"}
                                width={96}
                                height={96}
                                className="mb-12"
                            />
                            <h4 className="lg:header-3 header-4 mb-2">Design</h4>
                            <div className="paragraph-4">Identifying project needs and challenges</div>
                        </div>
                        <div className="border-l-2 pt-8 pb-12 pl-6 w-[420px] border-gray">
                            <Image
                                src={"/images/solutions/3d-rotate.png"}
                                alt={"solutions"}
                                width={96}
                                height={96}
                                className="mb-12"
                            />
                            <h4 className="lg:header-3 header-4 mb-2">Deliver</h4>
                            <div className="paragraph-4">Identifying project needs and challenges</div>
                        </div>
                    </div>
                </XContainer>
            </ScrollArea>
        </div>
    );
};

export default Steps;
