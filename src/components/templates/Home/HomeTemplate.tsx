import { About, Approach, Hero, Projects, Statistics, Video } from "@organisms/home";
import { api } from "@services/api/endpoints";
import {
    BuildingSection,
    ConstructionSection,
    ProjectSection,
    Section,
    SliderSection,
    StructureSection,
    TransformSection,
} from "@services/types/main-page.types";

const HomeTemplate = async () => {
    const data = await api.getMainPage();

    // Sort sections by their sort key
    const sortedSections = [...data.sections].sort((a, b) => a.sort - b.sort);

    const renderSection = (section: Section) => {
        switch (section.type) {
            case "slider":
                return <Hero key={section.sort} data={section as SliderSection} />;
            case "transform":
                return <About key={section.sort} data={section as TransformSection} />;
            case "construction":
                return <Approach key={section.sort} data={section as ConstructionSection} />;
            case "project":
                return <Projects key={section.sort} data={section as ProjectSection} />;
            case "building":
                return <Video key={section.sort} data={section as BuildingSection} />;
            case "structure":
                return <Statistics key={section.sort} data={section as StructureSection} />;
            default:
                return null;
        }
    };

    return <>{sortedSections.map(renderSection)}</>;
};

export default HomeTemplate;
