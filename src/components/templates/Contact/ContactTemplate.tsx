import { Form, Hero, Info, Logos, Map } from "@organisms/contact";
import { api } from "@services/api/endpoints";
import {
    ContactUsSection,
    GetInTouchContactUsImageSection,
    GetInTouchSection,
    MapSection,
    OurServicesSection,
    SliderSection,
} from "@services/types/contact-us-page.types";

const ContactTemplate = async () => {
    const data = await api.getContactPage();
    const sortedSections = [...data.sections].sort((a, b) => a.sort - b.sort);

    const renderSection = (section: ContactUsSection) => {
        switch (section.type) {
            case "slider":
                return <Hero key={section.type} data={section as SliderSection} />;
            case "get_in_touch":
                return <Info key={section.type} data={section as GetInTouchSection} />;
            case "map":
                return <Map key={section.type} data={section as MapSection} />;
            case "get_in_touch_contact_us_image":
                return <Form key={section.type} data={section as GetInTouchContactUsImageSection} />;
            case "our_services":
                return <Logos key={section.type} data={section as OurServicesSection} />;
        }
    };
    return <>{sortedSections.map(renderSection)}</>;
};

export default ContactTemplate;
