import XContainer from "@atoms/XContainer";
import { ServicesDeliverProjectSection } from "@services/types/services-page.types";

const Benefits = ({ data }: { data: ServicesDeliverProjectSection }) => {
    return (
        <div className="lg:border-b border-gray relative">
            <XContainer className="flex max-lg:flex-col px-0!">
                <div className="lg:w-1/2 lg:p-12 lg:pt-24 p-6 pt-12">
                    <h2 className="lg:header-3 header-4 mb-4">{data.data.title}</h2>
                    <div className="lg:paragraph-2 paragraph-4 lg:mb-20 mb-10">{data.data.description}</div>
                    <div className="flex flex-col gap-6">
                        {data.data.variants.map((item, index) => (
                            <div key={item.title + index} className="flex items-center">
                                <div className="size-24 bg-smoke shrink-0 header-2 grid place-items-center font-encode-sans-expanded text-dark/10">
                                    {String(index + 1).padStart(2, "0")}
                                </div>
                                <div className="p-6">
                                    <div className="header-4 mb-2.5">{item.title}</div>
                                    <div className="paragraph-5">{item.description}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="lg:w-1/2 w-full h-auto">
                    <video
                        playsInline
                        muted
                        autoPlay
                        loop
                        className="h-full object-cover lg:absolute lg:left-1/2 lg:right-0 lg:w-1/2 w-full"
                    >
                        <source src={data.data.file_url} type="video/mp4" />
                    </video>
                </div>
            </XContainer>
        </div>
    );
};

export default Benefits;
