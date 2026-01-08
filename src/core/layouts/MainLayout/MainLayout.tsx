import Footer from "@organisms/common/Footer";
import Header from "@organisms/common/Header";
import { api } from "@services/api/endpoints";
import { PropsWithChildren } from "react";

const MainLayout = async ({ children }: PropsWithChildren) => {
    const logo = await api.getLogo();
    const footer = await api.getFooter();
    return (
        <>
            <Header data={logo} />
            {children}
            <Footer data={footer} />
        </>
    );
};

export default MainLayout;
