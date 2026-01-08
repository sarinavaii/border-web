import XContainer from "@atoms/XContainer";
import { BuildingSection } from "@services/types/main-page.types";

const Video = ({ data }: { data: BuildingSection }) => {
    return (
        <div className="bg-dark">
            <XContainer>
                <h3 className="lg:header-3 header-4 lg:pt-[126px] pt-16 pb-16 text-light">{data.data.title}</h3>
            </XContainer>
            <div className="relative w-full">
                <video playsInline muted autoPlay loop className="w-full block">
                    <source src={data.data.file_url} type="video/mp4" />
                </video>
                <div
                    className="pointer-events-none absolute inset-0"
                    style={{
                        background: "linear-gradient(to right, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0) 100%)",
                    }}
                ></div>
            </div>
        </div>
    );
};

export default Video;
