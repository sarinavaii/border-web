export const Routes = {
    // Static routes
    HOME: "/",
    ABOUT: "/about-us",
    CONTACT: "/contact-us",
    SERVICES: "/services",
    PROJECTS: "/projects",
    CLIENTS: "/clients",
    SOLUTIONS: "/solutions",

    // Dynamic routes
    project: (slug: string) => `/projects/${slug}`,
} as const;

export type Route = typeof Routes;
