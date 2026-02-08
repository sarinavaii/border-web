export interface FooterSocialLink {
    title: string;
    image_url: string;
    social_link: string;
}

export interface FooterData {
    email: string;
    description: string;
    copyright: string;
    social_links: FooterSocialLink[];
}

export interface FooterMainResponse {
    type: "footer";
    data: FooterData;
}

export interface FooterImageResponse {
    type: "footer_image";
    data: {
        image_url: string;
        title: string;
        description: string;
        button_name: string;
        button_url: string;
    };
}

export interface FooterResponse {
    footer: FooterMainResponse;
    footer_image: FooterImageResponse;
}
