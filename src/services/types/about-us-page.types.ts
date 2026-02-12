// about-us-page.types.ts

/* =========================
   Root Response
========================= */

export interface AboutUsPageResponse {
    sections: AboutUsSection[];
    seo: AboutUsSeo;
}

/* =========================
     Sections (Union)
  ========================= */

export type AboutUsSection =
    | AboutUsSliderSection
    | AboutUsDescriptionSection
    | AboutUsHistorySection
    | OurVisionSection
    | OurMissionSection
    | PrincipleSection
    | AboutUsTeamSection;

interface BaseSection {
    sort: number;
    type: string;
}

/* =========================
     1. Slider Section
  ========================= */

export interface AboutUsSliderSection extends BaseSection {
    type: "slider";
    data: {
        title: string;
        description: string;
        button_name: string;
        file_url: string;
        button_url: string;
    };
}

/* =========================
     2. Description Section
  ========================= */

export interface AboutUsDescriptionSection extends BaseSection {
    type: "about_us_description";
    data: {
        description: string;
    };
}

/* =========================
     3. History Section
  ========================= */

export interface AboutUsHistorySection extends BaseSection {
    type: "about_us_history";
    data: AboutUsHistoryItem[];
}

export interface AboutUsHistoryItem {
    title: string;
    description: string;
    image_url: string | null;
    year: number;
}

/* =========================
     4. Our Vision Section
  ========================= */

export interface OurVisionSection extends BaseSection {
    type: "our vission";
    data: {
        title: string;
        description: string;
        image_url: string;
        variant: OurVisionVariant[];
    };
}

export interface OurVisionVariant {
    description: string;
    image_url: string | null;
}

/* =========================
     5. Our Mission Section
  ========================= */

export interface OurMissionSection extends BaseSection {
    type: "our mission";
    data: {
        title: string;
        description: string;
        image_url: string;
        variant: OurMissionVariant[];
    };
}

export interface OurMissionVariant {
    description: string;
    image_url: string | null;
}

/* =========================
     6. Principle Section
  ========================= */

export interface PrincipleSection extends BaseSection {
    type: "principle";
    data: {
        title: string;
        description: string;
        variant: PrincipleVariant[];
    };
}

export interface PrincipleVariant {
    title: string;
    description: string;
    image_url: string;
}

/* =========================
     7. Team Section
  ========================= */

export interface AboutUsTeamSection extends BaseSection {
    type: "about_us_team";
    data: {
        title: string;
        description: string;
        teams: AboutUsTeamMember[];
    };
}

export interface AboutUsTeamMember {
    full_name: string;
    description: string;
    job_title: string;
    image_url: string;
    social: AboutUsTeamSocial[];
}

export interface AboutUsTeamSocial {
    url: string;
    name: string;
}

/* =========================
     SEO
  ========================= */

export interface AboutUsSeo {
    title: string;
    description: string;
    kwargs: string[];
    canonical: string;
    robots: {
        index: boolean;
        follow: boolean;
    };
    open_graph: AboutUsOpenGraph;
}

export interface AboutUsOpenGraph {
    title: string;
    description: string;
    image: string;
    url: string;
    type: string;
}
