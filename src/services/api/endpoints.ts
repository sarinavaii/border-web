import { FooterResponse } from "@services/types/footer.types";
import { LogoResponse } from "@services/types/logo.types";
import { MainPageResponse } from "@services/types/main-page.types";

const API_BASE = "http://89.42.199.146/v1/core";

async function fetchAPI<T>(endpoint: string): Promise<T> {
    const res = await fetch(`${API_BASE}${endpoint}`);
    if (!res.ok) throw new Error(`API Error: ${res.status}`);
    return res.json();
}

export const api = {
    getLogo: () => fetchAPI<LogoResponse>("/site_logo"),
    getFooter: () => fetchAPI<FooterResponse>("/site_footer"),
    getMainPage: () => fetchAPI<MainPageResponse>("/main_page"),
};
