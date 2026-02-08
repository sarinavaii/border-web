import { FooterResponse } from "@services/types/footer.types";
import { LogoResponse } from "@services/types/logo.types";
import { MainPageResponse } from "@services/types/main-page.types";

const API_BASE = "http://89.42.199.146/v1";

async function fetchAPI<T>(endpoint: string): Promise<T> {
    const res = await fetch(`${API_BASE}${endpoint}`);
    if (!res.ok) throw new Error(`API Error: ${res.status}`);
    return res.json();
}

export const api = {
    getLogo: () => fetchAPI<LogoResponse>("/core/site_logo"),
    getFooter: () => fetchAPI<FooterResponse>("/core/site_footer"),
    getMainPage: () => fetchAPI<MainPageResponse>("/home/main_page"),
};
