// projects-page.types.ts

/* =========================
   Root Response
========================= */

export interface ProjectsPageResponse {
    sections: ProjectsSection[];
    seo: ProjectsSeo;
}

/* =========================
     Sections (Union)
  ========================= */

export type ProjectsSection = ProjectSliderSection | ProjectSection;

interface BaseProjectSection {
    sort: number;
    type: string;
}

/* =========================
     1. Slider Section
  ========================= */

export interface ProjectSliderSection extends BaseProjectSection {
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
     2. Project Section
  ========================= */

export interface ProjectSection extends BaseProjectSection {
    type: "project";
    data: ProjectItem[];
}

export interface ProjectItem {
    id: number;
    title: string;
    company: string;
    location: string;
    start_date: string;
    end_date: string | null;
    result: ProjectAspect;
    solution: ProjectAspect;
    challenge: ProjectAspect;
}

export interface ProjectAspect {
    description: string;
    image_url: string;
}

/* =========================
     SEO
  ========================= */

export interface ProjectsSeo {
    title: string;
    description: string;
    kwargs: string[];
    canonical: string;
    robots: {
        index: boolean;
        follow: boolean;
    };
    open_graph: ProjectsOpenGraph;
}

export interface ProjectsOpenGraph {
    title: string;
    description: string;
    image: string;
    url: string;
    type: string;
}
