import XContainer from "@atoms/XContainer";
import Image from "next/image";

const Testimonials = () => {
    const STATIC_DATA = [
        {
            name: "Samantha Lee",
            position: "Project Manager",
            image: "/images/clients/testimonial-1.jpg",
            company: "Acme Construction",
            quote: "Working with this team was a pleasure. Their dedication to project delivery and quality exceeded our expectations.",
        },
        {
            name: "Raj Patel",
            position: "Director of Operations",
            image: "/images/clients/testimonial-2.jpg",
            company: "Skyline Developers",
            quote: "Their integrated process and transparent communication made our complex project seamless and stress-free.",
        },
        {
            name: "Emily Thompson",
            position: "Chief Executive Officer",
            image: "/images/clients/testimonial-3.jpg",
            company: "Urban Solutions",
            quote: "Impressed with their technical expertise and innovative approach. We highly recommend them for any construction challenge.",
        },
        {
            name: "Carlos Ramirez",
            position: "Head of Facilities",
            image: "/images/clients/testimonial-4.jpg",
            company: "GreenSpaces Ltd",
            quote: "From start to finish, the team demonstrated professionalism and a genuine commitment to sustainability in our build.",
        },
    ];
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
                    {STATIC_DATA.map((item) => (
                        <div
                            className="flex-1 lg:hover:flex-[1.5] transition-all duration-500 ease-in-out group w-full max-lg:border max-lg:border-gray"
                            key={item.name}
                        >
                            <div className="flex max-lg:flex-col">
                                <Image
                                    src={item.image}
                                    alt={item.name}
                                    width={400}
                                    height={400}
                                    className="w-full lg:group-hover:w-2/5 h-80 object-cover grayscale lg:group-hover:grayscale-0 max-lg:grayscale-0 transition-all duration-500 ease-in-out"
                                />
                                <div className="lg:w-0 lg:group-hover:w-3/5 lg:bg-black lg:text-light overflow-hidden transition-all duration-500 ease-in-out">
                                    <div className="p-6 opacity-0 flex h-full flex-col lg:group-hover:opacity-100 max-lg:opacity-100 transition-opacity duration-500 delay-200">
                                        <div className="header-4 mb-4">{item.name}</div>
                                        <div className="paragraph-4 lg:grow max-lg:mb-8">{item.position}</div>
                                        <div className="paragraph-4">{item.company}</div>
                                    </div>
                                </div>
                            </div>
                            <div className="relative min-h-[200px] bg-light lg:group-hover:bg-dark max-lg:bg-dark lg:group-hover:text-light max-lg:text-light transition-all duration-500 ease-in-out">
                                <div className="p-6 transition-opacity min-h-[200px] flex flex-col justify-center duration-300 ease-in-out lg:group-hover:opacity-0 max-lg:opacity-0 lg:group-hover: max-lg:invisible lg:group-hover:min-h-0 max-lg:min-h-0 lg:group-hover: max-lg:h-0">
                                    <div className="header-4 mb-4">{item.name}</div>
                                    <div className="paragraph-4 grow">{item.position}</div>
                                    <div className="paragraph-4">{item.company}</div>
                                </div>
                                <div className="absolute flex items-center justify-center inset-0 p-6 opacity-0 invisible lg:group-hover:opacity-100 max-lg:opacity-100 lg:group-hover:visible max-lg:visible transition-all duration-300 delay-200 ease-in-out paragraph-4">
                                    {'"' + item.quote + '"'}
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
