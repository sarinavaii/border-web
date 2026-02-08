import XContainer from "@atoms/XContainer";
import { ClientMemberSection } from "@services/types/clients-page.types";
import Image from "next/image";

const Testimonials = ({ data }: { data: ClientMemberSection }) => {
    const testimonialsData = data.data;

    return (
        <>
            <XContainer className="py-8">
                <h3 className="header-3 mb-8">What Our Clients Say About Us</h3>
                <div className="paragraph-2 max-w-[466px]">
                    Authentic feedback from partners who experienced our commitment
                </div>
            </XContainer>
            <XContainer className="py-8">
                <div className="flex max-lg:flex-col max-lg:gap-6">
                    {testimonialsData.map((item) => (
                        <div
                            className="flex-1 lg:hover:flex-[1.5] transition-all duration-500 ease-in-out group w-full max-lg:border max-lg:border-gray"
                            key={item.full_name}
                        >
                            <div className="flex max-lg:flex-col">
                                <Image
                                    src={item.image_url}
                                    alt={item.full_name}
                                    width={400}
                                    height={400}
                                    className="w-full lg:group-hover:w-2/5 h-80 object-cover grayscale lg:group-hover:grayscale-0 max-lg:grayscale-0 transition-all duration-500 ease-in-out"
                                />
                                <div className="lg:w-0 lg:group-hover:w-3/5 lg:bg-black lg:text-light overflow-hidden transition-all duration-500 ease-in-out">
                                    <div className="capitalize p-6 opacity-0 flex h-full flex-col lg:group-hover:opacity-100 max-lg:opacity-100 transition-opacity duration-500 delay-200">
                                        <div className="header-4 mb-4">{item.full_name}</div>
                                        <div className="paragraph-4 lg:grow max-lg:mb-8">{item.job_title}</div>
                                        <div className="paragraph-4">{item.job_position}</div>
                                    </div>
                                </div>
                            </div>
                            <div className="relative min-h-[200px] bg-light lg:group-hover:bg-dark max-lg:bg-dark lg:group-hover:text-light max-lg:text-light transition-all duration-500 ease-in-out">
                                <div className="capitalize p-6 transition-opacity min-h-[200px] flex flex-col justify-center duration-300 ease-in-out lg:group-hover:opacity-0 max-lg:opacity-0 lg:group-hover: max-lg:invisible lg:group-hover:min-h-0 max-lg:min-h-0 lg:group-hover: max-lg:h-0">
                                    <div className="header-4 mb-4">{item.full_name}</div>
                                    <div className="paragraph-4 grow">{item.job_title}</div>
                                    <div className="paragraph-4">{item.job_position}</div>
                                </div>
                                <div className="absolute flex items-center justify-center inset-0 p-6 opacity-0 invisible lg:group-hover:opacity-100 max-lg:opacity-100 lg:group-hover:visible max-lg:visible transition-all duration-300 delay-200 ease-in-out paragraph-4">
                                    {item.description}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </XContainer>
        </>
    );
};

export default Testimonials;
