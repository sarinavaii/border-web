// contact-us-page.types.ts

/* =========================
   Root Response
========================= */

export interface ContactUsPageResponse {
    sections: ContactUsSection[];
    seo: ContactUsSeo;
}

/* =========================
     Sections (Union)
  ========================= */

export type ContactUsSection =
    | SliderSection
    | GetInTouchSection
    | MapSection
    | GetInTouchContactUsImageSection
    | OurServicesSection;

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
    };
}

/* =========================
     2. Get In Touch Section
  ========================= */

export interface GetInTouchSection extends BaseSection {
    type: "get_in_touch";
    data: {
        title: string;
        description: string;
        touch_variants: TouchVariant[];
    };
}

export interface TouchVariant {
    title: string;
    link: string;
    image_url: string;
}

/* =========================
     3. Map Section
  ========================= */

export interface MapSection extends BaseSection {
    type: "map";
    data: {
        lat: number;
        long: number;
        title: string;
    };
}

/* =========================
     4. Get In Touch Contact Us Image Section
  ========================= */

export interface GetInTouchContactUsImageSection extends BaseSection {
    type: "get_in_touch_contact_us_image";
    data: {
        image_url: string;
    };
}

/* =========================
     5. Our Services Section
  ========================= */

export interface OurServicesSection extends BaseSection {
    type: "our_services";
    data: OurServicesImage[];
}

export interface OurServicesImage {
    image_url: string;
}

/* =========================
     SEO
  ========================= */

export interface ContactUsSeo {
    title: string;
    description: string;
    kwargs: string[];
    canonical: string;
    robots: {
        index: boolean;
        follow: boolean;
    };
    open_graph: ContactUsOpenGraph;
}

export interface ContactUsOpenGraph {
    title: string;
    description: string;
    image: string;
    url: string;
    type: string;
}
