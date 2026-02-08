// services-page.types.ts

/* =========================
   Root Response
========================= */

export interface ServicesPageResponse {
    sections: ServicesSection[];
    seo: ServicesSeo;
}

/* =========================
     Sections (Union)
  ========================= */

export type ServicesSection =
    | SliderSection
    | ServicesDescriptionSection
    | ServicesFavorSection
    | ServicesDeliverProjectSection
    | ProjectSection
    | InnovationSection;

interface BaseSection {
    sort: number;
    type: string;
}

/* =========================
     1. Slider Section
  ========================= */

export interface SliderSection extends BaseSection {
    type: "slider";
    data: {
        file_url: string;
        title: string;
        button_name: string;
        button_url: string;
        description: string;
    };
}

/* =========================
     2. Services Description Section
  ========================= */

export interface ServicesDescriptionSection extends BaseSection {
    type: "services_description";
    data: {
        description: string;
    };
}

/* =========================
     3. Services Favor Section
  ========================= */

export interface ServicesFavorSection extends BaseSection {
    type: "services_favor";
    data: {
        services: ServiceFavor[];
    };
}

export interface ServiceFavor {
    description: string;
    title: string;
    image_url: string;
}

/* =========================
     4. Services Deliver Project Section
  ========================= */

export interface ServicesDeliverProjectSection extends BaseSection {
    type: "services_deliver_project";
    data: {
        title: string;
        description: string;
        file_url: string;
        variants: DeliverProjectVariant[];
    };
}

export interface DeliverProjectVariant {
    title: string;
    description: string;
    image_url: string | null;
}

/* =========================
     5. Project Section
  ========================= */

export interface ProjectSection extends BaseSection {
    type: "project";
    data: {
        id: number;
        project_name: string;
        country: string;
        project_date: string;
        variants: ProjectVariant[];
    };
}

export interface ProjectVariant {
    variant_type: string; // "challenge" | "result" etc.
    description: string;
    image_url: string;
}

/* =========================
     6. Innovation Section
  ========================= */

export interface InnovationSection extends BaseSection {
    type: "innovation";
    data: {
        title: string;
        description: string;
        variants: InnovationVariant[];
    };
}

export interface InnovationVariant {
    title: string;
    description: string;
    image_url: string;
}

/* =========================
     SEO
  ========================= */

export interface ServicesSeo {
    title: string;
    description: string;
    kwargs: string[];
    canonical: string;
    robots: {
        index: boolean;
        follow: boolean;
    };
    open_graph: ServicesOpenGraph;
}

export interface ServicesOpenGraph {
    title: string;
    description: string;
    image: string;
    url: string;
    type: string;
}
