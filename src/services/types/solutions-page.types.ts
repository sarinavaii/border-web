// solutions-page.types.ts

/* =========================
   Root Response
========================= */

export interface SolutionsPageResponse {
    sections: SolutionsSection[];
    seo: SolutionsSeo;
}

/* =========================
     Sections (Union)
  ========================= */

export type SolutionsSection =
    | SolutionsSliderSection
    | InnovationSection
    | SolutionProjectSection
    | StageConstructionSection
    | DigitalInfrastructureSection;

interface BaseSection {
    sort: number;
    type: string;
}

/* =========================
     1. Slider Section
  ========================= */

export interface SolutionsSliderSection extends BaseSection {
    type: "slider";
    data: {
        file_url: string;
        title: string;
        button_name: string;
        button_url: string;
    };
}

/* =========================
     2. Innovation Section
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
     3. Solution Project Section
  ========================= */

export interface SolutionProjectSection extends BaseSection {
    type: "solution_project";
    data: {
        title: string;
        description: string;
        file_url: string;
        variants: SolutionProjectVariant[];
    };
}

export interface SolutionProjectVariant {
    title: string;
    description: string;
    image_url: string | null;
}

/* =========================
     4. Stage Construction Section
  ========================= */

export interface StageConstructionSection extends BaseSection {
    type: "stage_construction";
    data: {
        title: string;
        description: string;
        variants: StageConstructionVariant[];
    };
}

export interface StageConstructionVariant {
    title: string;
    description: string;
    image_url: string;
}

/* =========================
     5. Digital Infrastructure Section
  ========================= */

export interface DigitalInfrastructureSection extends BaseSection {
    type: "digital_infrastructure";
    data: {
        title: string;
        description: string;
        variants: DigitalInfrastructureVariant[];
    };
}

export interface DigitalInfrastructureVariant {
    title: string;
    description: string;
    image_url: string;
}

/* =========================
     SEO
  ========================= */

export interface SolutionsSeo {
    title: string;
    description: string;
    kwargs: string[];
    canonical: string;
    robots: {
        index: boolean;
        follow: boolean;
    };
    open_graph: SolutionsOpenGraph;
}

export interface SolutionsOpenGraph {
    title: string;
    description: string;
    image: string;
    url: string;
    type: string;
}
