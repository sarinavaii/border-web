import { Approach, Benefits, Hero, Message, Portfolio, Projects } from "@organisms/service";
import { api } from "@services/api/endpoints";
import {
    InnovationSection,
    ProjectSection,
    ServicesDeliverProjectSection,
    ServicesDescriptionSection,
    ServicesFavorSection,
    ServicesSection,
    SliderSection,
} from "@services/types/services-page.types";

const ServicesTemplate = async () => {
    const data = await api.getServicesPage();
    const sortedSections = [...data.sections].sort((a, b) => a.sort - b.sort);

    const renderSection = (section: ServicesSection) => {
        switch (section.type) {
            case "slider":
                return <Hero key={section.type} data={section as SliderSection} />;
            case "services_description":
                return <Message key={section.type} data={section as ServicesDescriptionSection} />;
            case "services_favor":
                return <Approach key={section.type} data={section as ServicesFavorSection} />;
            case "innovation":
                return <Portfolio key={section.type} data={section as InnovationSection} />;
            case "project":
                return <Projects key={section.type} data={section as ProjectSection} />;
            case "services_deliver_project":
                return <Benefits key={section.type} data={section as ServicesDeliverProjectSection} />;
        }
    };
    return <>{sortedSections.map(renderSection)}</>;
};

export default ServicesTemplate;
