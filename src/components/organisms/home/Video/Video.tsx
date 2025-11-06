import XContainer from "@atoms/XContainer";

const Video = () => {
    return (
        <div className="bg-dark">
            <XContainer>
                <h3 className="lg:header-3 header-4 lg:pt-[126px] pt-16 pb-16 text-light">
                    What defines us is not only what we build, but how we build it
                </h3>
            </XContainer>
            <video playsInline muted autoPlay loop className="w-full">
                <source src="/video/watermarked_preview.mp4" type="video/mp4" />
            </video>
        </div>
    );
};

export default Video;
