import XContainer from "@atoms/XContainer";
import { cn } from "@core/utils";

const Statistics = () => {
    return (
        <div className="bg-smoke lg:pt-[120px] lg:pb-[168px] py-16">
            <XContainer>
                <h2 className="lg:header-3 header-4 text-center mb-8">
                    Every structure we build carries an impact beyond concrete and steel
                </h2>
                <div className="lg:paragraph-2 paragraph-4 text-center">
                    shaping communities, economies, and the future of generations.
                </div>
                <div className="mt-12 grid lg:grid-cols-2 grid-cols-1 max-lg:gap-4 max-w-[1152px] mx-auto border-t border-l lg:border-gray border-transparent">
                    {[
                        {
                            title: "Sustainable Urban Development",
                            percentage: "45%",
                            description: "Our projects foster smart city growth and create efficient, lasting spaces.",
                        },
                        {
                            title: "Economic Opportunities",
                            percentage: "325",
                            description:
                                "Each project is a source of jobs, economic vitality, and long-term investment.",
                        },
                        {
                            title: "Positive Social Impact",
                            percentage: "45%",
                            description:
                                "We build infrastructures that elevate quality of life and create vibrant communities.",
                        },
                        {
                            title: "Environmental Responsibility",
                            percentage: "$1.2B",
                            description:
                                "Our designs minimize ecological impact while maximizing sustainability for the future.",
                        },
                    ].map((item, idx) => (
                        <div
                            key={item.title + idx}
                            className={cn(
                                "text-center flex flex-col gap-12 items-center justify-center p-8 border-b border-r lg:border-gray border-transparent bg-light",
                            )}
                        >
                            <h4 className="header-4">{item.title}</h4>
                            <div className="lg:header-1-mono header-2 opacity-10">{item.percentage}</div>
                            <div className="paragraph-4 max-w-[400px]">{item.description}</div>
                        </div>
                    ))}
                </div>
            </XContainer>
        </div>
    );
};

export default Statistics;
