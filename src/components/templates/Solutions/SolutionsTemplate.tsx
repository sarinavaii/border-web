import { Approach, Benefits, Hero, Portfolio, Steps } from "@organisms/solutions";
import { api } from "@services/api/endpoints";
import {
    DigitalInfrastructureSection,
    InnovationSection,
    SolutionProjectSection,
    SolutionsSection,
    SolutionsSliderSection,
    StageConstructionSection,
} from "@services/types/solutions-page.types";

const SolutionsTemplate = async () => {
    const data = await api.getSolutionsPage();
    const sortedSections = [...data.sections].sort((a, b) => a.sort - b.sort);

    const renderSection = (section: SolutionsSection) => {
        switch (section.type) {
            case "slider":
                return <Hero key={section.type} data={section as SolutionsSliderSection} />;
            case "innovation":
                return <Approach key={section.type} data={section as InnovationSection} />;
            case "solution_project":
                return <Benefits key={section.type} data={section as SolutionProjectSection} />;
            case "stage_construction":
                return <Steps key={section.type} data={section as StageConstructionSection} />;
            case "digital_infrastructure":
                return <Portfolio key={section.type} data={section as DigitalInfrastructureSection} />;
        }
    };

    return <>{sortedSections.map(renderSection)}</>;
};

export default SolutionsTemplate;
