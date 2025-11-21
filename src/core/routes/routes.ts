export const Routes = {
    // Static routes
    HOME: "/",
    ABOUT: "/about",
    CONTACT: "/contact",
    SERVICES: "/services",
    PROJECTS: "/projects",
    CLIENTS: "/clients",
    SOLUTIONS: "/solutions",

    // Dynamic routes
    project: (slug: string) => `/projects/${slug}`,
} as const;

export type Route = typeof Routes;
