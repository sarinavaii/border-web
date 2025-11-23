import XContainer from "@atoms/XContainer";
import Image from "next/image";

const Logos = () => {
    return (
        <div className="border-b border-gray">
            <XContainer className="lg:px-0! lg:border-l border-gray">
                <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1">
                    {[
                        { src: "/images/clients/logo-1.svg", title: "Client 1" },
                        { src: "/images/clients/logo-2.svg", title: "Client 2" },
                        { src: "/images/clients/logo-3.svg", title: "Client 3" },
                        { src: "/images/clients/logo-4.svg", title: "Client 4" },
                        { src: "/images/clients/logo-5.svg", title: "Client 5" },
                        { src: "/images/clients/logo-6.svg", title: "Client 6" },
                        { src: "/images/clients/logo-7.svg", title: "Client 7" },
                        { src: "/images/clients/logo-8.svg", title: "Client 8" },
                    ].map((logo) => (
                        <div
                            className="lg:px-16 px-12 lg:py-36 py-20 flex items-center justify-center relative overflow-hidden group max-lg:border-x border-r border-t border-gray"
                            key={logo.src}
                        >
                            <span className="absolute inset-0 left-0 top-0 h-full w-0 bg-dark transition-all duration-150 group-hover:w-full z-0" />
                            <span className="relative z-10 flex justify-center items-center h-full">
                                <Image
                                    src={logo.src}
                                    alt={logo.title}
                                    width={232}
                                    height={58}
                                    className="transition-all w-full max-w-60 h-auto duration-150 group-hover:filter group-hover:brightness-0 group-hover:invert"
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
