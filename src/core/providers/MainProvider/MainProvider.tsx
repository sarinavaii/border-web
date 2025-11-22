import "@mantine/core/styles.css";
import "@mantine/nprogress/styles.css";
import { PropsWithChildren } from "react";

import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";

import XNavigationProgress from "@atoms/XNavigationProgress";
import theme from "@core/themes/MantineTheme/theme";

const MainProvider = ({ children }: PropsWithChildren) => {
    return (
        <MantineProvider theme={theme} defaultColorScheme="light">
            <Notifications />
            <XNavigationProgress />
            {children}
        </MantineProvider>
    );
};

export default MainProvider;
