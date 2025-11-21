import XContainer from "@atoms/XContainer";
import XTimeline from "@molecules/XTimeline";

const Timeline = () => {
    return (
        <XContainer className="pt-12">
            <XTimeline
                items={[
                    {
                        year: "2020",
                        title: "The Beginning",
                        description:
                            "Our journey started with a simple idea and a passionate team ready to make a difference.",
                        image: "/images/services-bg.webp",
                    },
                    {
                        year: "2021",
                        title: "First Milestone",
                        description:
                            "We reached our first major milestone, expanding our reach to thousands of users worldwide.",
                    },
                    {
                        year: "2022",
                        title: "Innovation Era",
                        description:
                            "Launched groundbreaking features that transformed how people interact with our platform.",
                    },
                    {
                        year: "2023",
                        title: "Global Expansion",
                        description:
                            "Opened offices in five new countries, bringing our vision to a truly global audience.",
                        image: "/images/services-bg.webp",
                    },
                ]}
            />
        </XContainer>
    );
};

export default Timeline;
