// main-page.types.ts

/* =========================
   Root Response
========================= */

export interface MainPageResponse {
    sections: Section[];
    seo: Seo;
}

/* =========================
     Sections (Union)
  ========================= */

export type Section =
    | SliderSection
    | TransformSection
    | ConstructionSection
    | ProjectSection
    | BuildingSection
    | StructureSection;

interface BaseSection {
    sort: number;
    type: string;
}

/* =========================
     Slider
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
     Transform
  ========================= */

export interface TransformSection extends BaseSection {
    type: "transform";
    data: {
        title: string;
        description: string;
        file_url: string;
        facilities: TransformFacility[];
    };
}

export interface TransformFacility {
    type: "transform_facility";
    data: {
        title: string;
        description: string;
    };
}

/* =========================
     Construction
  ========================= */

export interface ConstructionSection extends BaseSection {
    type: "construction";
    data: {
        title: string;
        description: string;
        variant: ConstructionVariant[];
    };
}

export interface ConstructionVariant {
    type: "construction_description";
    data: {
        title: string;
        description: string;
        image_url: string;
    };
}

/* =========================
     Project
  ========================= */

export interface ProjectSection extends BaseSection {
    type: "project";
    data: {
        id: number;
        project_name: string;
        country: string;
        project_date: string; // ISO date
        variants: ProjectVariant[];
    };
}

export interface ProjectVariant {
    type: "project_variant";
    data: {
        variant_type: string;
        description: string;
        image_url: string;
    };
}

/* =========================
     Building
  ========================= */

export interface BuildingSection extends BaseSection {
    type: "building";
    data: {
        file_url: string;
        title: string;
    };
}

/* =========================
     Structure
  ========================= */

export interface StructureSection extends BaseSection {
    type: "structure";
    data: {
        title: string;
        description: string;
        variants: StructureVariant[];
    };
}

export interface StructureVariant {
    type: "structure_variant";
    data: {
        amount: string;
        title: string;
        description: string;
    };
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
