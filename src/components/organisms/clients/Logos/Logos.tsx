import XContainer from "@atoms/XContainer";
import { OurServicesSection } from "@services/types/clients-page.types";
import Image from "next/image";

const Logos = ({ data }: { data: OurServicesSection }) => {
    const logosData = data.data;

    return (
        <div className="border-b border-gray">
            <XContainer className="lg:px-0! lg:border-l border-gray">
                <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1">
                    {logosData.map((logo, index) => (
                        <div
                            className="lg:px-16 px-12 lg:py-36 py-20 flex items-center justify-center relative overflow-hidden group max-lg:border-x border-r border-t border-gray"
                            key={index}
                        >
                            <span className="absolute inset-0 left-0 top-0 h-full w-0 bg-dark transition-all duration-150 group-hover:w-full z-0" />
                            <span className="relative z-10 flex justify-center items-center h-full">
                                <Image
                                    src={logo.image_url}
                                    alt="Client Logo"
                                    width={232}
                                    height={58}
                                    className="transition-all w-full max-w-60 h-auto duration-150"
                                />
                            </span>
                        </div>
                    ))}
                </div>
            </XContainer>
        </div>
    );
};

export default Logos;
