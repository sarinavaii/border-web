// clients-page.types.ts

/* =========================
   Root Response
========================= */

export interface ClientsPageResponse {
    sections: ClientsSection[];
    seo: Seo;
}

/* =========================
     Sections (Union)
  ========================= */

export type ClientsSection = ClientsSliderSection | OurServicesSection | ClientMemberSection;

interface ClientsBaseSection {
    sort: number;
    type: string;
}

/* =========================
     Slider
  ========================= */

export interface ClientsSliderSection extends ClientsBaseSection {
    type: "slider";
    sort: number;
    data: {
        file_url: string;
        title: string;
        button_name: string;
        button_url: string;
        description: string;
    };
}

/* =========================
     Our Services
  ========================= */

export interface OurServicesSection extends ClientsBaseSection {
    type: "our_services";
    sort: number;
    data: OurServiceImage[];
}

export interface OurServiceImage {
    image_url: string;
}

/* =========================
     Client Member (Testimonials)
  ========================= */

export interface ClientMemberSection extends ClientsBaseSection {
    type: "client_member";
    sort: number;
    data: ClientMember[];
}

export interface ClientMember {
    full_name: string;
    description: string;
    image_url: string;
    job_title: string;
    job_position: string;
}

/* =========================
     SEO
  ========================= */

export interface Seo {
    title: string;
    description: string;
    kwargs: string[];
    canonical: string;
    robots: {
        index: boolean;
        follow: boolean;
    };
    open_graph: OpenGraph;
}

/* =========================
     Open Graph
  ========================= */

export interface OpenGraph {
    sort: number;
    type: "open_graph";
    data: {
        title: string;
        description: string;
        image: string;
        url: string;
        type: string;
    };
}
