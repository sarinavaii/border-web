import XContainer from "@atoms/XContainer";
import { ScrollArea } from "@mantine/core";
import { StageConstructionSection } from "@services/types/solutions-page.types";
import Image from "next/image";

const Steps = ({ data }: { data: StageConstructionSection }) => {
    const firstRow = data.data.variants.filter((_, index) => index % 2 === 0);
    const secondRow = data.data.variants.filter((_, index) => index % 2 !== 0);
    return (
        <div className="pb-16">
            <XContainer className="lg:pt-24 pt-16 lg:pb-16 pb-12 text-dark">
                <h3 className="lg:header-3 header-4 lg:mb-4 mb-4">{data.data.title}</h3>
                <div className="lg:paragraph-2 paragraph-4 max-w-[465px]">{data.data.description}</div>
            </XContainer>
            <ScrollArea
                type="hover"
                classNames={{
                    root: "relative after:content-[''] after:h-0.5 after:bg-gray after:absolute after:left-0 after:top-1/2 after:-translate-y-1/2 after:right-0",
                }}
            >
                <XContainer>
                    <div className="flex *:shrink-0 lg:gap-[180px] gap-[120px] *:after:absolute *:after:rounded-full *:after:content-[''] *:after:size-4 *:after:z-10 *:relative *:after:bg-gray *:after:left-0 *:after:bottom-0 *:after:translate-y-2 *:after:block *:after:-translate-x-2">
                        {firstRow.map((item) => (
                            <div key={item.title} className="border-l-2 pt-8 pb-12 pl-6 w-[420px] border-gray">
                                <Image src={item.image_url} alt={item.title} width={96} height={96} className="mb-12" />
                                <h4 className="lg:header-3 header-4 mb-2">{item.title}</h4>
                                <div className="paragraph-4">{item.description}</div>
                            </div>
                        ))}
                    </div>
                </XContainer>
                <XContainer>
                    <div className="flex *:shrink-0 lg:gap-[180px] gap-[120px] *:after:absolute *:after:rounded-full *:after:content-[''] *:after:size-4 *:after:z-10 *:relative *:after:bg-gray *:after:left-0 *:after:top-0 *:after:-translate-y-2 *:after:block *:after:-translate-x-2">
                        {secondRow.map((item) => (
                            <div
                                key={item.title}
                                className="border-l-2 pt-8 pb-12 pl-6 w-[420px] border-gray first:lg:ml-[290px] first:ml-[290px]"
                            >
                                <Image src={item.image_url} alt={item.title} width={96} height={96} className="mb-12" />
                                <h4 className="lg:header-3 header-4 mb-2">{item.title}</h4>
                                <div className="paragraph-4">{item.description}</div>
                            </div>
                        ))}
                    </div>
                </XContainer>
            </ScrollArea>
        </div>
    );
};

export default Steps;
