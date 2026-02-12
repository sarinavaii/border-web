import XContainer from "@atoms/XContainer";
import XTimeline from "@molecules/XTimeline";
import { AboutUsHistorySection } from "@services/types/about-us-page.types";

const Timeline = ({ data }: { data: AboutUsHistorySection }) => {
    return (
        <XContainer className="pt-12">
            <XTimeline
                items={data.data.map((item) => ({
                    year: item.year.toString(),
                    title: item.title,
                    description: item.description,
                    image: item.image_url ?? undefined,
                }))}
            />
        </XContainer>
    );
};

export default Timeline;
