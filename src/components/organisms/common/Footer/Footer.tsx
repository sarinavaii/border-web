import XButton from "@atoms/XButton";
import XContainer from "@atoms/XContainer";
import XLink from "@atoms/XLink";
import { Routes } from "@core/routes/routes";
import { FooterResponse } from "@services/types/footer.types";
import Image from "next/image";

const Footer = ({ data }: { data: FooterResponse }) => {
    const footerBackgroundSrc = data.footer_image.data.image_url ?? "/images/footer-bg.webp";
    return (
        <div className="bg-dark text-light pt-24 pb-8">
            <XContainer>
                <div
                    className="relative mb-16 px-8 pb-24 pt-[126px] bg-cover bg-center"
                    style={{ backgroundImage: `url('${footerBackgroundSrc}')` }}
                >
                    <div className="absolute inset-0 bg-black/64"></div>
                    <div className="relative z-10">
                        <h3 className="header-3 font-semibold mb-8">{data.footer_image.data.title}</h3>
                        <div className="paragraph-3 max-w-[720px] mb-14">{data.footer_image.data.description}</div>
                        <XButton as={"link"} href={data.footer_image.data.button_url}>
                            {data.footer_image.data.button_name}
                        </XButton>
                    </div>
                </div>

                <div className="flex lg:flex-row flex-col lg:border-2 border border-light">
                    <div className="lg:px-[60px] flex items-center justify-center lg:border-r-2 max-lg:border-b gap-2 py-8">
                        <Image src="/images/logo.png" width={50} height={36} alt="BordarPlus" />
                        <h2 className="paragraph-2">Bordar Plus.</h2>
                    </div>
                    <div className="grow grid lg:grid-cols-6 grid-cols-1">
                        <div className="col-span-3 py-6 flex items-center justify-center lg:border-r-2 max-lg:border-b">
                            <div className="link flex items-center justify-center xl:gap-10 gap-4">
                                <XLink className="hover:text-sand link transition" href={Routes.SERVICES}>
                                    Services
                                </XLink>
                                <XLink className="hover:text-sand link transition" href={Routes.PROJECTS}>
                                    Portfolio
                                </XLink>
                                <XLink className="hover:text-sand link transition" href={Routes.ABOUT}>
                                    About Us
                                </XLink>
                                <XLink className="hover:text-sand link transition" href={Routes.CONTACT}>
                                    Contact Us
                                </XLink>
                            </div>
                        </div>
                        <div className="col-span-3 paragraph-2 py-9 text-center">
                            <a href={`mailto:${data.footer.data.email}`}>{data.footer.data.email}</a>
                        </div>
                        <div className="col-span-2 flex items-center justify-center lg:border-t-2 border-t lg:border-r-2 p-3 text-center">
                            <div className="font-medium">{data.footer.data.description}</div>
                        </div>
                        <div className="col-span-2 lg:border-t-2 border-t lg:border-r-2 py-6 text-center">
                            <div className="link flex items-center justify-center gap-[18px]">
                                {data.footer.data.social_links.map((item) => (
                                    <XLink
                                        key={item.data.title}
                                        href="/"
                                        className="size-8 rounded-full bg-light hover:scale-105 flex items-center justify-center transition"
                                    >
                                        <Image src={item.data.image_url} width={15} height={15} alt={item.data.title} />
                                    </XLink>
                                ))}
                            </div>
                        </div>
                        <div className="col-span-2 lg:border-t-2 border-t lg:border-r-2 p-3 flex items-center justify-center text-center paragraph-5">
                            {data.footer.data.copyright}
                        </div>
                    </div>
                </div>
            </XContainer>
        </div>
    );
};

export default Footer;
