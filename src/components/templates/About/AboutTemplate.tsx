import { Approach, Hero, Message, Misson, Team, Timeline, Vision } from "@organisms/about";
import { api } from "@services/api/endpoints";
import {
    AboutUsDescriptionSection,
    AboutUsHistorySection,
    AboutUsSection,
    AboutUsSliderSection,
    AboutUsTeamSection,
    OurMissionSection,
    OurVisionSection,
    PrincipleSection,
} from "@services/types/about-us-page.types";

const AboutTemplate = async () => {
    const data = await api.getAboutUsPage();
    const sortedSections = [...data.sections].sort((a, b) => a.sort - b.sort);

    const renderSection = (section: AboutUsSection) => {
        switch (section.type) {
            case "slider":
                return <Hero key={section.type} data={section as AboutUsSliderSection} />;
            case "about_us_description":
                return <Message key={section.type} data={section as AboutUsDescriptionSection} />;
            case "about_us_history":
                return <Timeline key={section.type} data={section as AboutUsHistorySection} />;
            case "our mission":
                return <Misson key={section.type} data={section as OurMissionSection} />;
            case "our vission":
                return <Vision key={section.type} data={section as OurVisionSection} />;
            case "principle":
                return <Approach key={section.type} data={section as PrincipleSection} />;
            case "about_us_team":
                return <Team key={section.type} data={section as AboutUsTeamSection} />;
        }
    };

    return <>{sortedSections.map(renderSection)}</>;
};

export default AboutTemplate;
