import { ClientsPageResponse } from "@services/types/clients-page.types";
import { ContactUsPageResponse } from "@services/types/contact-us-page.types";
import { FooterResponse } from "@services/types/footer.types";
import { LogoResponse } from "@services/types/logo.types";
import { MainPageResponse } from "@services/types/main-page.types";
import { ServicesPageResponse } from "@services/types/services-page.types";

const API_BASE = "http://89.42.199.146/v1";

async function fetchAPI<T>(
    endpoint: string,
    method: "GET" | "POST" = "GET",
    body?: Record<string, unknown>,
): Promise<T> {
    console.log({
        body,
        method,
    });
    const url = `${API_BASE}${endpoint}`;
    let res: Response;
    try {
        res = await fetch(url, {
            method,
            body: body ? JSON.stringify(body) : undefined,
            headers: { "Content-Type": "application/json", Accept: "application/json" },
        });
    } catch (networkError) {
        throw new Error(`Network error while fetching "${url}": ${networkError}`);
    }

    let data: unknown;
    try {
        data = await res.json();
    } catch (parseError) {
        throw new Error(`Failed to parse JSON from API response at "${url}" (status ${res.status}): ${parseError}`);
    }

    if (!res.ok) {
        throw new Error(
            `API Error at "${url}": status ${res.status} (${res.statusText})\nResponse: ${JSON.stringify(data)}`,
        );
    }
    return data as T;
}

export const api = {
    getLogo: () => fetchAPI<LogoResponse>("/core/site_logo"),
    getFooter: () => fetchAPI<FooterResponse>("/core/site_footer"),
    getMainPage: () => fetchAPI<MainPageResponse>("/home/main_page"),
    getClients: () => fetchAPI<ClientsPageResponse>("/client/client_page"),
    getServicesPage: () => fetchAPI<ServicesPageResponse>("/services/services_page"),
    getContactPage: () => fetchAPI<ContactUsPageResponse>("/contact_us/contact_us_page"),
    postContactForm: (body: Record<string, unknown>) => fetchAPI<void>("/contact_us/create_contact_us/", "POST", body),
};
