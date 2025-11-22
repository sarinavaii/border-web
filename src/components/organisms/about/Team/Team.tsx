import XContainer from "@atoms/XContainer";
import Image from "next/image";

const Team = () => {
    const STATIC_DATA = [
        {
            name: "Samantha Lee",
            position: "Project Manager",
            image: "/images/clients/testimonial-1.jpg",
            social: {
                facebook: "https://facebook.com/samanthalee",
                instagram: "https://instagram.com/samanthalee",
                linkedin: "https://linkedin.com/in/samanthalee",
                email: "samantha.lee@email.com",
            },
            quote: "Working with this team was a pleasure. Their dedication to project delivery and quality exceeded our expectations.",
        },
        {
            name: "Raj Patel",
            position: "Director of Operations",
            image: "/images/clients/testimonial-2.jpg",
            social: {
                facebook: "https://facebook.com/rajpatel",
                instagram: "https://instagram.com/rajpatel",
                linkedin: "https://linkedin.com/in/rajpatel",
                email: "raj.patel@email.com",
            },
            quote: "Their integrated process and transparent communication made our complex project seamless and stress-free.",
        },
        {
            name: "Emily Thompson",
            position: "Chief Executive Officer",
            image: "/images/clients/testimonial-3.jpg",
            social: {
                facebook: "https://facebook.com/emilythompson",
                instagram: "https://instagram.com/emilythompson",
                linkedin: "https://linkedin.com/in/emilythompson",
                email: "emily.thompson@email.com",
            },
            quote: "Impressed with their technical expertise and innovative approach. We highly recommend them for any construction challenge.",
        },
        {
            name: "Carlos Ramirez",
            position: "Head of Facilities",
            image: "/images/clients/testimonial-4.jpg",
            social: {
                facebook: "https://facebook.com/carlosramirez",
                instagram: "https://instagram.com/carlosramirez",
                linkedin: "https://linkedin.com/in/carlosramirez",
                email: "carlos.ramirez@email.com",
            },
            quote: "From start to finish, the team demonstrated professionalism and a genuine commitment to sustainability in our build.",
        },
    ];
    return (
        <>
            <XContainer className="pb-8 pt-24">
                <h3 className="header-3 mb-8">Meet Our Team</h3>
                <div className="paragraph-2 max-w-[465px]">
                    We believe in collaboration, creativity, and expertise. Our team members shape the future with their
                    experience and dedication.
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
                                        <div className="flex items-center gap-2">
                                            <a
                                                target="_blank"
                                                className="bg-smoke size-9 rounded-full hover:bg-sand grid place-items-center transition-colors"
                                                href={item.social.facebook}
                                            >
                                                <svg
                                                    width="18"
                                                    height="18"
                                                    viewBox="0 0 18 18"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M4.93848 7.46094V10.4609H7.18848V15.7109H10.1885V10.4609H12.4385L13.1885 7.46094H10.1885V5.96094C10.1885 5.76203 10.2675 5.57126 10.4081 5.43061C10.5488 5.28996 10.7396 5.21094 10.9385 5.21094H13.1885V2.21094H10.9385C9.94392 2.21094 8.99009 2.60603 8.28683 3.30929C7.58356 4.01255 7.18848 4.96638 7.18848 5.96094V7.46094H4.93848Z"
                                                        stroke="#1C1C1C"
                                                        stroke-width="1.125"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                    />
                                                </svg>
                                            </a>
                                            <a
                                                target="_blank"
                                                className="bg-smoke size-9 rounded-full hover:bg-sand grid place-items-center transition-colors"
                                                href={item.social.instagram}
                                            >
                                                <svg
                                                    width="18"
                                                    height="18"
                                                    viewBox="0 0 18 18"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M12.2432 2.39844C14.2106 2.39844 15.8055 3.99354 15.8057 5.96094V11.9609C15.8057 13.9285 14.2107 15.5234 12.2432 15.5234H6.24316C4.27565 15.5234 2.68066 13.9285 2.68066 11.9609V5.96094C2.6808 3.99354 4.27573 2.39844 6.24316 2.39844H12.2432ZM6.24316 3.52344C4.89705 3.52344 3.8058 4.61486 3.80566 5.96094V11.9609C3.80566 13.3071 4.89697 14.3984 6.24316 14.3984H12.2432C13.5894 14.3984 14.6807 13.3071 14.6807 11.9609V5.96094C14.6805 4.61486 13.5893 3.52344 12.2432 3.52344H6.24316ZM9.24316 6.14844C10.7964 6.14844 12.0555 7.40775 12.0557 8.96094C12.0557 10.5142 10.7965 11.7734 9.24316 11.7734C7.68986 11.7734 6.43066 10.5142 6.43066 8.96094C6.4308 7.40775 7.68994 6.14844 9.24316 6.14844ZM9.24316 7.27344C8.31127 7.27344 7.5558 8.02907 7.55566 8.96094C7.55566 9.89292 8.31118 10.6484 9.24316 10.6484C10.1751 10.6484 10.9307 9.89292 10.9307 8.96094C10.9305 8.02907 10.1751 7.27344 9.24316 7.27344ZM12.6182 5.02344C12.9287 5.02344 13.1805 5.27539 13.1807 5.58594V5.58691C13.1807 5.89757 12.9288 6.14941 12.6182 6.14941C12.3075 6.14941 12.0557 5.89757 12.0557 5.58691V5.58594C12.0558 5.27539 12.3076 5.02344 12.6182 5.02344Z"
                                                        fill="#1C1C1C"
                                                    />
                                                </svg>
                                            </a>
                                            <a
                                                target="_blank"
                                                className="bg-smoke size-9 rounded-full hover:bg-sand grid place-items-center transition-colors"
                                                href={item.social.linkedin}
                                            >
                                                <svg
                                                    width="18"
                                                    height="18"
                                                    viewBox="0 0 18 18"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M16.2275 2.92963C15.4775 3.29713 14.7425 3.44638 13.9775 3.67213C13.1368 2.72338 11.8903 2.67088 10.6925 3.11938C9.49479 3.56788 8.71029 4.66438 8.72754 5.92213V6.67213C6.29379 6.73438 4.12629 5.62588 2.72754 3.67213C2.72754 3.67213 -0.408961 9.24688 5.72754 11.9221C4.32354 12.8574 2.92329 13.4881 1.22754 13.4221C3.70854 14.7744 6.41229 15.2394 8.75304 14.5599C11.438 13.7799 13.6445 11.7676 14.4913 8.75338C14.7439 7.83663 14.8693 6.88952 14.864 5.93863C14.8625 5.75188 15.9965 3.85963 16.2275 2.92888V2.92963Z"
                                                        stroke="#1C1C1C"
                                                        stroke-width="1.125"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                    />
                                                </svg>
                                            </a>
                                            <a
                                                target="_blank"
                                                className="bg-smoke size-9 rounded-full hover:bg-sand grid place-items-center transition-colors"
                                                href={item.social.email}
                                            >
                                                <svg
                                                    width="18"
                                                    height="18"
                                                    viewBox="0 0 18 18"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M14.4541 3.11035C15.5932 3.11035 16.5166 4.03376 16.5166 5.17285V12.6729C16.5163 13.8117 15.593 14.7354 14.4541 14.7354H3.9541C2.81529 14.7352 1.89187 13.8116 1.8916 12.6729V5.17285C1.8916 4.03385 2.81513 3.11048 3.9541 3.11035H14.4541ZM9.5166 10.1406C9.32773 10.2663 9.08041 10.2665 8.8916 10.1406L3.0166 6.22363V12.6729C3.01687 13.1903 3.43661 13.6102 3.9541 13.6104H14.4541C14.9717 13.6104 15.3913 13.1904 15.3916 12.6729V6.22363L9.5166 10.1406ZM3.9541 4.23535C3.53165 4.23546 3.17372 4.51426 3.05664 4.89844L9.2041 8.99609L15.3506 4.89844C15.2334 4.51439 14.8765 4.23535 14.4541 4.23535H3.9541Z"
                                                        fill="#1C1C1C"
                                                    />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="relative min-h-[200px] bg-light lg:group-hover:bg-dark max-lg:bg-dark lg:group-hover:text-light max-lg:text-light transition-all duration-500 ease-in-out">
                                <div className="p-6 transition-opacity min-h-[200px] flex flex-col justify-center duration-300 ease-in-out lg:group-hover:opacity-0 max-lg:opacity-0 max-lg:invisible max-lg:min-h-0 max-lg:h-0">
                                    <div className="header-4 mb-4">{item.name}</div>
                                    <div className="paragraph-4 grow">{item.position}</div>
                                    <div className="flex items-center gap-2">
                                        <a
                                            target="_blank"
                                            className="bg-smoke size-9 rounded-full hover:bg-sand grid place-items-center transition-colors"
                                            href={item.social.facebook}
                                        >
                                            <svg
                                                width={18}
                                                height={18}
                                                viewBox="0 0 18 18"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M4.93848 7.46094V10.4609H7.18848V15.7109H10.1885V10.4609H12.4385L13.1885 7.46094H10.1885V5.96094C10.1885 5.76203 10.2675 5.57126 10.4081 5.43061C10.5488 5.28996 10.7396 5.21094 10.9385 5.21094H13.1885V2.21094H10.9385C9.94392 2.21094 8.99009 2.60603 8.28683 3.30929C7.58356 4.01255 7.18848 4.96638 7.18848 5.96094V7.46094H4.93848Z"
                                                    stroke="#1C1C1C"
                                                    strokeWidth={1.125}
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </a>
                                        <a
                                            target="_blank"
                                            className="bg-smoke size-9 rounded-full hover:bg-sand grid place-items-center transition-colors"
                                            href={item.social.instagram}
                                        >
                                            <svg
                                                width={18}
                                                height={18}
                                                viewBox="0 0 18 18"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M12.2432 2.39844C14.2106 2.39844 15.8055 3.99354 15.8057 5.96094V11.9609C15.8057 13.9285 14.2107 15.5234 12.2432 15.5234H6.24316C4.27565 15.5234 2.68066 13.9285 2.68066 11.9609V5.96094C2.6808 3.99354 4.27573 2.39844 6.24316 2.39844H12.2432ZM6.24316 3.52344C4.89705 3.52344 3.8058 4.61486 3.80566 5.96094V11.9609C3.80566 13.3071 4.89697 14.3984 6.24316 14.3984H12.2432C13.5894 14.3984 14.6807 13.3071 14.6807 11.9609V5.96094C14.6805 4.61486 13.5893 3.52344 12.2432 3.52344H6.24316ZM9.24316 6.14844C10.7964 6.14844 12.0555 7.40775 12.0557 8.96094C12.0557 10.5142 10.7965 11.7734 9.24316 11.7734C7.68986 11.7734 6.43066 10.5142 6.43066 8.96094C6.4308 7.40775 7.68994 6.14844 9.24316 6.14844ZM9.24316 7.27344C8.31127 7.27344 7.5558 8.02907 7.55566 8.96094C7.55566 9.89292 8.31118 10.6484 9.24316 10.6484C10.1751 10.6484 10.9307 9.89292 10.9307 8.96094C10.9305 8.02907 10.1751 7.27344 9.24316 7.27344ZM12.6182 5.02344C12.9287 5.02344 13.1805 5.27539 13.1807 5.58594V5.58691C13.1807 5.89757 12.9288 6.14941 12.6182 6.14941C12.3075 6.14941 12.0557 5.89757 12.0557 5.58691V5.58594C12.0558 5.27539 12.3076 5.02344 12.6182 5.02344Z"
                                                    fill="#1C1C1C"
                                                />
                                            </svg>
                                        </a>
                                        <a
                                            target="_blank"
                                            className="bg-smoke size-9 rounded-full hover:bg-sand grid place-items-center transition-colors"
                                            href={item.social.linkedin}
                                        >
                                            <svg
                                                width="18"
                                                height="18"
                                                viewBox="0 0 18 18"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M16.2275 2.92963C15.4775 3.29713 14.7425 3.44638 13.9775 3.67213C13.1368 2.72338 11.8903 2.67088 10.6925 3.11938C9.49479 3.56788 8.71029 4.66438 8.72754 5.92213V6.67213C6.29379 6.73438 4.12629 5.62588 2.72754 3.67213C2.72754 3.67213 -0.408961 9.24688 5.72754 11.9221C4.32354 12.8574 2.92329 13.4881 1.22754 13.4221C3.70854 14.7744 6.41229 15.2394 8.75304 14.5599C11.438 13.7799 13.6445 11.7676 14.4913 8.75338C14.7439 7.83663 14.8693 6.88952 14.864 5.93863C14.8625 5.75188 15.9965 3.85963 16.2275 2.92888V2.92963Z"
                                                    stroke="#1C1C1C"
                                                    stroke-width="1.125"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                />
                                            </svg>
                                        </a>
                                        <a
                                            target="_blank"
                                            className="bg-smoke size-9 rounded-full hover:bg-sand grid place-items-center transition-colors"
                                            href={item.social.email}
                                        >
                                            <svg
                                                width={18}
                                                height={18}
                                                viewBox="0 0 18 18"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M14.4541 3.11035C15.5932 3.11035 16.5166 4.03376 16.5166 5.17285V12.6729C16.5163 13.8117 15.593 14.7354 14.4541 14.7354H3.9541C2.81529 14.7352 1.89187 13.8116 1.8916 12.6729V5.17285C1.8916 4.03385 2.81513 3.11048 3.9541 3.11035H14.4541ZM9.5166 10.1406C9.32773 10.2663 9.08041 10.2665 8.8916 10.1406L3.0166 6.22363V12.6729C3.01687 13.1903 3.43661 13.6102 3.9541 13.6104H14.4541C14.9717 13.6104 15.3913 13.1904 15.3916 12.6729V6.22363L9.5166 10.1406ZM3.9541 4.23535C3.53165 4.23546 3.17372 4.51426 3.05664 4.89844L9.2041 8.99609L15.3506 4.89844C15.2334 4.51439 14.8765 4.23535 14.4541 4.23535H3.9541Z"
                                                    fill="#1C1C1C"
                                                />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                                <div className="absolute flex items-center justify-center inset-0 p-6 opacity-0 invisible lg:group-hover:opacity-100 max-lg:opacity-100 lg:group-hover:visible max-lg:visible transition-all duration-300 delay-200 ease-in-out paragraph-4">
                                    {'"' + item.quote + '"'}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
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
                                        <div className="flex items-center gap-2">
                                            <a
                                                target="_blank"
                                                className="bg-smoke size-9 rounded-full hover:bg-sand grid place-items-center transition-colors"
                                                href={item.social.facebook}
                                            >
                                                <svg
                                                    width="18"
                                                    height="18"
                                                    viewBox="0 0 18 18"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M4.93848 7.46094V10.4609H7.18848V15.7109H10.1885V10.4609H12.4385L13.1885 7.46094H10.1885V5.96094C10.1885 5.76203 10.2675 5.57126 10.4081 5.43061C10.5488 5.28996 10.7396 5.21094 10.9385 5.21094H13.1885V2.21094H10.9385C9.94392 2.21094 8.99009 2.60603 8.28683 3.30929C7.58356 4.01255 7.18848 4.96638 7.18848 5.96094V7.46094H4.93848Z"
                                                        stroke="#1C1C1C"
                                                        stroke-width="1.125"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                    />
                                                </svg>
                                            </a>
                                            <a
                                                target="_blank"
                                                className="bg-smoke size-9 rounded-full hover:bg-sand grid place-items-center transition-colors"
                                                href={item.social.instagram}
                                            >
                                                <svg
                                                    width="18"
                                                    height="18"
                                                    viewBox="0 0 18 18"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M12.2432 2.39844C14.2106 2.39844 15.8055 3.99354 15.8057 5.96094V11.9609C15.8057 13.9285 14.2107 15.5234 12.2432 15.5234H6.24316C4.27565 15.5234 2.68066 13.9285 2.68066 11.9609V5.96094C2.6808 3.99354 4.27573 2.39844 6.24316 2.39844H12.2432ZM6.24316 3.52344C4.89705 3.52344 3.8058 4.61486 3.80566 5.96094V11.9609C3.80566 13.3071 4.89697 14.3984 6.24316 14.3984H12.2432C13.5894 14.3984 14.6807 13.3071 14.6807 11.9609V5.96094C14.6805 4.61486 13.5893 3.52344 12.2432 3.52344H6.24316ZM9.24316 6.14844C10.7964 6.14844 12.0555 7.40775 12.0557 8.96094C12.0557 10.5142 10.7965 11.7734 9.24316 11.7734C7.68986 11.7734 6.43066 10.5142 6.43066 8.96094C6.4308 7.40775 7.68994 6.14844 9.24316 6.14844ZM9.24316 7.27344C8.31127 7.27344 7.5558 8.02907 7.55566 8.96094C7.55566 9.89292 8.31118 10.6484 9.24316 10.6484C10.1751 10.6484 10.9307 9.89292 10.9307 8.96094C10.9305 8.02907 10.1751 7.27344 9.24316 7.27344ZM12.6182 5.02344C12.9287 5.02344 13.1805 5.27539 13.1807 5.58594V5.58691C13.1807 5.89757 12.9288 6.14941 12.6182 6.14941C12.3075 6.14941 12.0557 5.89757 12.0557 5.58691V5.58594C12.0558 5.27539 12.3076 5.02344 12.6182 5.02344Z"
                                                        fill="#1C1C1C"
                                                    />
                                                </svg>
                                            </a>
                                            <a
                                                target="_blank"
                                                className="bg-smoke size-9 rounded-full hover:bg-sand grid place-items-center transition-colors"
                                                href={item.social.linkedin}
                                            >
                                                <svg
                                                    width="18"
                                                    height="18"
                                                    viewBox="0 0 18 18"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M16.2275 2.92963C15.4775 3.29713 14.7425 3.44638 13.9775 3.67213C13.1368 2.72338 11.8903 2.67088 10.6925 3.11938C9.49479 3.56788 8.71029 4.66438 8.72754 5.92213V6.67213C6.29379 6.73438 4.12629 5.62588 2.72754 3.67213C2.72754 3.67213 -0.408961 9.24688 5.72754 11.9221C4.32354 12.8574 2.92329 13.4881 1.22754 13.4221C3.70854 14.7744 6.41229 15.2394 8.75304 14.5599C11.438 13.7799 13.6445 11.7676 14.4913 8.75338C14.7439 7.83663 14.8693 6.88952 14.864 5.93863C14.8625 5.75188 15.9965 3.85963 16.2275 2.92888V2.92963Z"
                                                        stroke="#1C1C1C"
                                                        stroke-width="1.125"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                    />
                                                </svg>
                                            </a>
                                            <a
                                                target="_blank"
                                                className="bg-smoke size-9 rounded-full hover:bg-sand grid place-items-center transition-colors"
                                                href={item.social.email}
                                            >
                                                <svg
                                                    width="18"
                                                    height="18"
                                                    viewBox="0 0 18 18"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M14.4541 3.11035C15.5932 3.11035 16.5166 4.03376 16.5166 5.17285V12.6729C16.5163 13.8117 15.593 14.7354 14.4541 14.7354H3.9541C2.81529 14.7352 1.89187 13.8116 1.8916 12.6729V5.17285C1.8916 4.03385 2.81513 3.11048 3.9541 3.11035H14.4541ZM9.5166 10.1406C9.32773 10.2663 9.08041 10.2665 8.8916 10.1406L3.0166 6.22363V12.6729C3.01687 13.1903 3.43661 13.6102 3.9541 13.6104H14.4541C14.9717 13.6104 15.3913 13.1904 15.3916 12.6729V6.22363L9.5166 10.1406ZM3.9541 4.23535C3.53165 4.23546 3.17372 4.51426 3.05664 4.89844L9.2041 8.99609L15.3506 4.89844C15.2334 4.51439 14.8765 4.23535 14.4541 4.23535H3.9541Z"
                                                        fill="#1C1C1C"
                                                    />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="relative min-h-[200px] bg-light lg:group-hover:bg-dark max-lg:bg-dark lg:group-hover:text-light max-lg:text-light transition-all duration-500 ease-in-out">
                                <div className="p-6 transition-opacity min-h-[200px] flex flex-col justify-center duration-300 ease-in-out lg:group-hover:opacity-0 max-lg:opacity-0 max-lg:invisible max-lg:min-h-0 max-lg:h-0">
                                    <div className="header-4 mb-4">{item.name}</div>
                                    <div className="paragraph-4 grow">{item.position}</div>
                                    <div className="flex items-center gap-2">
                                        <a
                                            target="_blank"
                                            className="bg-smoke size-9 rounded-full hover:bg-sand grid place-items-center transition-colors"
                                            href={item.social.facebook}
                                        >
                                            <svg
                                                width={18}
                                                height={18}
                                                viewBox="0 0 18 18"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M4.93848 7.46094V10.4609H7.18848V15.7109H10.1885V10.4609H12.4385L13.1885 7.46094H10.1885V5.96094C10.1885 5.76203 10.2675 5.57126 10.4081 5.43061C10.5488 5.28996 10.7396 5.21094 10.9385 5.21094H13.1885V2.21094H10.9385C9.94392 2.21094 8.99009 2.60603 8.28683 3.30929C7.58356 4.01255 7.18848 4.96638 7.18848 5.96094V7.46094H4.93848Z"
                                                    stroke="#1C1C1C"
                                                    strokeWidth={1.125}
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </a>
                                        <a
                                            target="_blank"
                                            className="bg-smoke size-9 rounded-full hover:bg-sand grid place-items-center transition-colors"
                                            href={item.social.instagram}
                                        >
                                            <svg
                                                width={18}
                                                height={18}
                                                viewBox="0 0 18 18"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M12.2432 2.39844C14.2106 2.39844 15.8055 3.99354 15.8057 5.96094V11.9609C15.8057 13.9285 14.2107 15.5234 12.2432 15.5234H6.24316C4.27565 15.5234 2.68066 13.9285 2.68066 11.9609V5.96094C2.6808 3.99354 4.27573 2.39844 6.24316 2.39844H12.2432ZM6.24316 3.52344C4.89705 3.52344 3.8058 4.61486 3.80566 5.96094V11.9609C3.80566 13.3071 4.89697 14.3984 6.24316 14.3984H12.2432C13.5894 14.3984 14.6807 13.3071 14.6807 11.9609V5.96094C14.6805 4.61486 13.5893 3.52344 12.2432 3.52344H6.24316ZM9.24316 6.14844C10.7964 6.14844 12.0555 7.40775 12.0557 8.96094C12.0557 10.5142 10.7965 11.7734 9.24316 11.7734C7.68986 11.7734 6.43066 10.5142 6.43066 8.96094C6.4308 7.40775 7.68994 6.14844 9.24316 6.14844ZM9.24316 7.27344C8.31127 7.27344 7.5558 8.02907 7.55566 8.96094C7.55566 9.89292 8.31118 10.6484 9.24316 10.6484C10.1751 10.6484 10.9307 9.89292 10.9307 8.96094C10.9305 8.02907 10.1751 7.27344 9.24316 7.27344ZM12.6182 5.02344C12.9287 5.02344 13.1805 5.27539 13.1807 5.58594V5.58691C13.1807 5.89757 12.9288 6.14941 12.6182 6.14941C12.3075 6.14941 12.0557 5.89757 12.0557 5.58691V5.58594C12.0558 5.27539 12.3076 5.02344 12.6182 5.02344Z"
                                                    fill="#1C1C1C"
                                                />
                                            </svg>
                                        </a>
                                        <a
                                            target="_blank"
                                            className="bg-smoke size-9 rounded-full hover:bg-sand grid place-items-center transition-colors"
                                            href={item.social.linkedin}
                                        >
                                            <svg
                                                width="18"
                                                height="18"
                                                viewBox="0 0 18 18"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M16.2275 2.92963C15.4775 3.29713 14.7425 3.44638 13.9775 3.67213C13.1368 2.72338 11.8903 2.67088 10.6925 3.11938C9.49479 3.56788 8.71029 4.66438 8.72754 5.92213V6.67213C6.29379 6.73438 4.12629 5.62588 2.72754 3.67213C2.72754 3.67213 -0.408961 9.24688 5.72754 11.9221C4.32354 12.8574 2.92329 13.4881 1.22754 13.4221C3.70854 14.7744 6.41229 15.2394 8.75304 14.5599C11.438 13.7799 13.6445 11.7676 14.4913 8.75338C14.7439 7.83663 14.8693 6.88952 14.864 5.93863C14.8625 5.75188 15.9965 3.85963 16.2275 2.92888V2.92963Z"
                                                    stroke="#1C1C1C"
                                                    stroke-width="1.125"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                />
                                            </svg>
                                        </a>
                                        <a
                                            target="_blank"
                                            className="bg-smoke size-9 rounded-full hover:bg-sand grid place-items-center transition-colors"
                                            href={item.social.email}
                                        >
                                            <svg
                                                width={18}
                                                height={18}
                                                viewBox="0 0 18 18"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M14.4541 3.11035C15.5932 3.11035 16.5166 4.03376 16.5166 5.17285V12.6729C16.5163 13.8117 15.593 14.7354 14.4541 14.7354H3.9541C2.81529 14.7352 1.89187 13.8116 1.8916 12.6729V5.17285C1.8916 4.03385 2.81513 3.11048 3.9541 3.11035H14.4541ZM9.5166 10.1406C9.32773 10.2663 9.08041 10.2665 8.8916 10.1406L3.0166 6.22363V12.6729C3.01687 13.1903 3.43661 13.6102 3.9541 13.6104H14.4541C14.9717 13.6104 15.3913 13.1904 15.3916 12.6729V6.22363L9.5166 10.1406ZM3.9541 4.23535C3.53165 4.23546 3.17372 4.51426 3.05664 4.89844L9.2041 8.99609L15.3506 4.89844C15.2334 4.51439 14.8765 4.23535 14.4541 4.23535H3.9541Z"
                                                    fill="#1C1C1C"
                                                />
                                            </svg>
                                        </a>
                                    </div>
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

export default Team;
