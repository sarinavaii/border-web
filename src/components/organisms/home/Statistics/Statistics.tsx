import XContainer from "@atoms/XContainer";
import { cn } from "@core/utils";
import { StructureSection } from "@services/types/main-page.types";

const Statistics = ({ data }: { data: StructureSection }) => {
    return (
        <div className="bg-smoke lg:pt-[120px] lg:pb-[168px] py-16">
            <XContainer>
                <h2 className="lg:header-3 header-4 text-center mb-8">{data.data.title}</h2>
                <div className="lg:paragraph-2 paragraph-4 text-center">{data.data.description}</div>
                <div className="mt-12 grid lg:grid-cols-2 grid-cols-1 max-lg:gap-4 max-w-[1152px] mx-auto border-t border-l lg:border-gray border-transparent">
                    {data.data.variants.map((item, index) => (
                        <div
                            key={item.data.title + index}
                            className={cn(
                                "text-center flex flex-col gap-12 items-center justify-center p-8 border-b border-r lg:border-gray border-transparent bg-light",
                            )}
                        >
                            <h4 className="header-4">{item.data.title}</h4>
                            <div className="lg:header-1-mono header-2 opacity-10">{item.data.amount}</div>
                            <div className="paragraph-4 max-w-[400px]">{item.data.description}</div>
                        </div>
                    ))}
                </div>
            </XContainer>
        </div>
    );
};

export default Statistics;
