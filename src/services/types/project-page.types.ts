// project-page.types.ts

/* =========================
   Root Response
========================= */

export interface ProjectPageResponse {
    sort: number;
    type: "project";
    data: ProjectPageItem;
}

export interface ProjectPageItem {
    id: number;
    title: string;
    company: string;
    location: string;
    start_date: string;
    end_date?: string;
    description: string; // HTML string
    gallery_image: ProjectGalleryImage[];
    challenge?: ProjectPageAspect;
    result?: ProjectPageAspect;
    solution?: ProjectPageAspect;
}

export interface ProjectGalleryImage {
    image_url: string;
}

export interface ProjectPageAspect {
    description: string;
    image_url: string;
}
