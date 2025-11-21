import XButton from "@atoms/XButton";
import XContainer from "@atoms/XContainer";
import XLink from "@atoms/XLink";
import Image from "next/image";

const Footer = () => {
    return (
        <div className="bg-dark text-light pt-24 pb-8">
            <XContainer>
                <div className="relative mb-16 px-8 pb-24 pt-[126px] bg-[url('/images/footer-bg.webp')] bg-cover bg-center">
                    <div className="absolute inset-0 bg-black/64"></div>
                    <div className="relative z-10">
                        <h3 className="header-3 font-semibold mb-8">Let’s Build Something Great Together</h3>
                        <div className="paragraph-3 max-w-[720px] mb-14">
                            Looking for expert guidance for your next project? Our team is ready to listen, advise, and
                            deliver solutions tailored to your needs.
                        </div>
                        <XButton as={"link"} href="/">
                            Get a Free Consultation
                        </XButton>
                    </div>
                </div>

                <div className="flex lg:flex-row flex-col lg:border-2 border border-light">
                    <div className="lg:px-[60px] flex items-center justify-center lg:border-r-2 max-lg:border-b gap-2 py-8">
                        <Image src="/images/logo.jpg" width={28} height={28} alt="BordarPlus" />
                        <h2 className="paragraph-2">Bordar Plus.</h2>
                    </div>
                    <div className="grow grid lg:grid-cols-6 grid-cols-1">
                        <div className="col-span-3 py-6 flex items-center justify-center lg:border-r-2 max-lg:border-b">
                            <div className="link flex items-center justify-center xl:gap-10 gap-4">
                                <XLink className="hover:text-sand link transition" href="/">
                                    Services
                                </XLink>
                                <XLink className="hover:text-sand link transition" href="/">
                                    Portfolio
                                </XLink>
                                <XLink className="hover:text-sand link transition" href="/">
                                    About Us
                                </XLink>
                                <XLink className="hover:text-sand link transition" href="/">
                                    Contact Us
                                </XLink>
                            </div>
                        </div>
                        <div className="col-span-3 paragraph-2 py-9 text-center">
                            <a href="mailto:BordarPlus@info.io">BordarPlus@info.io</a>
                        </div>
                        <div className="col-span-2 lg:border-t-2 border-t lg:border-r-2 py-6 text-center">
                            <XLink className="link" href="/">
                                Get a Free Consultation
                            </XLink>
                        </div>
                        <div className="col-span-2 lg:border-t-2 border-t lg:border-r-2 py-6 text-center">
                            <div className="link flex items-center justify-center gap-[18px]">
                                <XLink
                                    href="/"
                                    className="size-8 rounded-full bg-light hover:bg-sand flex items-center justify-center transition"
                                >
                                    <svg
                                        width={10}
                                        height={15}
                                        viewBox="0 0 10 15"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M0.5625 5.8125V8.8125H2.8125V14.0625H5.8125V8.8125H8.0625L8.8125 5.8125H5.8125V4.3125C5.8125 4.11359 5.89152 3.92282 6.03217 3.78217C6.17282 3.64152 6.36359 3.5625 6.5625 3.5625H8.8125V0.5625H6.5625C5.56794 0.5625 4.61411 0.957588 3.91085 1.66085C3.20759 2.36411 2.8125 3.31794 2.8125 4.3125V5.8125H0.5625Z"
                                            stroke="#1C1C1C"
                                            strokeWidth={1.125}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </XLink>
                                <XLink
                                    href="/"
                                    className="size-8 rounded-full bg-light hover:bg-sand flex items-center justify-center transition"
                                >
                                    <svg
                                        width={14}
                                        height={14}
                                        viewBox="0 0 14 14"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M9.5625 0C11.5299 3.2853e-05 13.1249 1.59512 13.125 3.5625V9.5625C13.125 11.53 11.53 13.125 9.5625 13.125H3.5625C1.59499 13.125 0 11.53 0 9.5625V3.5625C0.000132197 1.5951 1.59507 1.28846e-07 3.5625 0H9.5625ZM3.5625 1.125C2.21639 1.125 1.12513 2.21642 1.125 3.5625V9.5625C1.125 10.9087 2.21631 12 3.5625 12H9.5625C10.9087 12 12 10.9087 12 9.5625V3.5625C11.9999 2.21644 10.9086 1.12503 9.5625 1.125H3.5625ZM6.5625 3.75C8.11569 3.75003 9.37487 5.00933 9.375 6.5625C9.375 8.11578 8.11577 9.37497 6.5625 9.375C5.0092 9.375 3.75 8.1158 3.75 6.5625C3.75013 5.00931 5.00928 3.75 6.5625 3.75ZM6.5625 4.875C5.6306 4.875 4.87513 5.63063 4.875 6.5625C4.875 7.49448 5.63052 8.25 6.5625 8.25C7.49445 8.24997 8.25 7.49446 8.25 6.5625C8.24987 5.63065 7.49437 4.87503 6.5625 4.875ZM9.9375 2.625C10.2481 2.62503 10.4999 2.87697 10.5 3.1875V3.18848C10.5 3.49912 10.2481 3.75094 9.9375 3.75098C9.62684 3.75098 9.375 3.49914 9.375 3.18848V3.1875C9.37513 2.87695 9.62692 2.625 9.9375 2.625Z"
                                            fill="#1C1C1C"
                                        />
                                    </svg>
                                </XLink>
                                <XLink
                                    href="/"
                                    className="size-8 rounded-full bg-light hover:bg-sand flex items-center justify-center transition"
                                >
                                    <svg
                                        width={17}
                                        height={14}
                                        viewBox="0 0 17 14"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M15.5625 0.644473C14.8125 1.01197 14.0775 1.16122 13.3125 1.38697C12.4718 0.438223 11.2253 0.385723 10.0275 0.834223C8.82975 1.28272 8.04525 2.37922 8.0625 3.63697V4.38697C5.62875 4.44922 3.46125 3.34072 2.0625 1.38697C2.0625 1.38697 -1.074 6.96172 5.0625 9.63697C3.6585 10.5722 2.25825 11.203 0.5625 11.137C3.0435 12.4892 5.74725 12.9542 8.088 12.2747C10.773 11.4947 12.9795 9.48247 13.8263 6.46822C14.0788 5.55148 14.2043 4.60437 14.199 3.65347C14.1975 3.46672 15.3315 1.57447 15.5625 0.643723V0.644473Z"
                                            stroke="#1C1C1C"
                                            strokeWidth={1.125}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </XLink>
                                <XLink
                                    href="/"
                                    className="size-8 rounded-full bg-light hover:bg-sand flex items-center justify-center transition"
                                >
                                    <svg
                                        width={15}
                                        height={12}
                                        viewBox="0 0 15 12"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M12.5625 0C13.7016 0 14.625 0.923413 14.625 2.0625V9.5625C14.6247 10.7014 13.7014 11.625 12.5625 11.625H2.0625C0.923575 11.625 0.000263681 10.7014 0 9.5625V2.0625C6.44266e-08 0.923413 0.923413 1.61103e-07 2.0625 0H12.5625ZM7.625 7.03027C7.43616 7.15604 7.18884 7.15604 7 7.03027L1.125 3.11328V9.5625C1.12526 10.08 1.5449 10.5 2.0625 10.5H12.5625C13.0801 10.5 13.4997 10.08 13.5 9.5625V3.11328L7.625 7.03027ZM2.0625 1.125C1.63997 1.125 1.28216 1.40387 1.16504 1.78809L7.3125 5.88574L13.459 1.78809C13.3418 1.40401 12.9849 1.125 12.5625 1.125H2.0625Z"
                                            fill="#1C1C1C"
                                        />
                                    </svg>
                                </XLink>
                            </div>
                        </div>
                        <div className="col-span-2 lg:border-t-2 border-t lg:border-r-2 py-6 text-center paragraph-5">
                            BordarPlus Studios© <br />
                            2025 All Rights Reserved
                        </div>
                    </div>
                </div>
            </XContainer>
        </div>
    );
};

export default Footer;
