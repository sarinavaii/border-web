import { Hero, Logos, Testimonials } from "@organisms/clients";
import { api } from "@services/api/endpoints";
import {
    ClientMemberSection,
    ClientsSection,
    ClientsSliderSection,
    OurServicesSection,
} from "@services/types/clients-page.types";

const ClientsTemplate = async () => {
    const data = await api.getClients();

    const sortedSections = [...data.sections].sort((a, b) => a.sort - b.sort);

    const renderSection = (section: ClientsSection) => {
        switch (section.type) {
            case "slider":
                return <Hero key={section.type} data={section as ClientsSliderSection} />;
            case "client_member":
                return <Testimonials key={section.type} data={section as ClientMemberSection} />;
            case "our_services":
                return <Logos key={section.type} data={section as OurServicesSection} />;
            default:
                return null;
        }
    };

    return <>{sortedSections.map(renderSection)}</>;
};

export default ClientsTemplate;
