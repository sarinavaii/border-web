import XContainer from "@atoms/XContainer";
import { GetInTouchSection } from "@services/types/contact-us-page.types";
import Image from "next/image";

const Info = ({ data }: { data: GetInTouchSection }) => {
    return (
        <div>
            <XContainer className="lg:py-24 py-16">
                <h3 className="lg:header-3 header-4 lg:mb-8 mb-4">{data.data.title}</h3>
                <div className="lg:paragraph-2 paragraph-4 max-w-[465px]">{data.data.description}</div>
            </XContainer>
            <div className="border-t border-gray">
                <XContainer className="lg:px-0! max-lg:pb-16">
                    <div className="grid xl:grid-cols-4 lg:grid-cols-2 grid-cols-1 lg:divide-x max-lg:divide-y divide-gray lg:*:min-h-[400px] *:min-h-[300px]">
                        {data.data.touch_variants.map((item) => {
                            return (
                                <div key={item.title} className="p-8 relative flex flex-col gap-4 justify-center">
                                    <Image
                                        src={item.image_url}
                                        alt={item.title}
                                        width={96}
                                        height={96}
                                        className="absolute right-4 top-4 lg:size-24 size-16"
                                    />
                                    <div className="lg:header-4 header-5 capitalize">{item.title}</div>
                                    <div className="lg:header-3 header-4">{item.link}</div>
                                </div>
                            );
                        })}
                        {/* <div className="p-8 relative flex flex-col gap-4 justify-center">
                            <Image
                                src={"/images/contact/sms.png"}
                                alt={"contact"}
                                width={96}
                                height={96}
                                className="absolute right-4 top-4 lg:size-24 size-16"
                            />
                            <div className="lg:header-4 header-5">Email</div>
                            <XLink className="lg:header-3 header-4" href="mailto:info@estatein.com">
                                info@estatein.com
                            </XLink>
                        </div>
                        <div className="p-8 relative flex flex-col gap-4 justify-center">
                            <Image
                                src={"/images/contact/call.png"}
                                alt={"contact"}
                                width={96}
                                height={96}
                                className="absolute right-4 top-4 lg:size-24 size-16"
                            />
                            <div className="lg:header-4 header-5">Phone</div>
                            <XLink className="lg:header-3 header-4" href="tel:+11234567890">
                                +1 (123) 456-7890
                            </XLink>
                        </div>
                        <div className="p-8 relative flex flex-col gap-4 justify-center">
                            <Image
                                src={"/images/contact/location.png"}
                                alt={"contact"}
                                width={96}
                                height={96}
                                className="absolute right-4 top-4 lg:size-24 size-16"
                            />
                            <div className="lg:header-4 header-5">Main Headquarters</div>
                            <div className="lg:header-3 header-4">Tehran, IR</div>
                        </div> */}
                        {/* <div className="p-8 relative flex flex-col gap-4 justify-center">
                            <Image
                                src={"/images/contact/people.png"}
                                alt={"contact"}
                                width={96}
                                height={96}
                                className="absolute right-4 top-4 lg:size-24 size-16"
                            />
                            <div className="lg:header-4 header-5">Social Media</div>
                            <div className="flex flex-col gap-1">
                                <XLink className="lg:header-3 header-4 underline" href="#">
                                    LinkedIn
                                </XLink>
                                <XLink className="lg:header-3 header-4 underline" href="#">
                                    Instagram
                                </XLink>
                                <XLink className="lg:header-3 header-4 underline" href="#">
                                    Facebook
                                </XLink>
                            </div>
                        </div> */}
                    </div>
                </XContainer>
            </div>
        </div>
    );
};

export default Info;
