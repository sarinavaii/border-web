import XContainer from "@atoms/XContainer";
import { InnovationSection } from "@services/types/solutions-page.types";
import Image from "next/image";

const Approach = ({ data }: { data: InnovationSection }) => {
    return (
        <div className="bg-light">
            <XContainer className="lg:pt-[126px] pt-16 lg:pb-16 pb-12 text-dark">
                <h3 className="lg:header-3 header-4 lg:mb-8 mb-4">{data.data.title}</h3>
                <div className="lg:paragraph-2 paragraph-4 max-w-[465px]">{data.data.description}</div>
            </XContainer>
            <div className="border-t border-gray">
                <XContainer className="lg:px-0! max-lg:pb-16">
                    <div className="grid xl:grid-cols-4 lg:grid-cols-2 grid-cols-1 lg:divide-x max-lg:divide-y divide-gray">
                        {data.data.variants.map((item) => (
                            <div
                                key={item.title}
                                className="lg:text-dark max-lg:bg-light group px-12 py-[100px] min-h-[400px] flex flex-col justify-between relative overflow-hidden z-1"
                            >
                                <span
                                    aria-hidden="true"
                                    className="pointer-events-none absolute -z-10 max-lg:hidden inset-0 left-0 top-0 h-full bg-dark transition-all duration-300 group-hover:w-full w-0"
                                />
                                <Image
                                    src={item.image_url}
                                    alt={item.title}
                                    width={96}
                                    height={96}
                                    className="group-hover:block lg:hidden absolute right-4 top-4 max-lg:invert-100"
                                />
                                <h4 className="header-3 lg:group-hover:text-light max-lg:text-dark transition-colors">
                                    {item.title}
                                </h4>
                                <div className="paragraph-3 lg:hidden group-hover:block text-light max-lg:text-dark">
                                    {item.description}
                                </div>
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
                                        className="stroke-dark"
                                        strokeWidth={1.5}
                                        strokeMiterlimit={10}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M3.5 12H20.33"
                                        className="stroke-dark"
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
        </div>
    );
};

export default Approach;
