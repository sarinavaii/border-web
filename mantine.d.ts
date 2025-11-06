import "@mantine/core";

type ExtendedCustomColors = "light" | "dark" | "green" | "smoke" | "sand" | "emerald" | "gray";

declare module "@mantine/core" {
    export interface MantineThemeColorsOverride {
        colors: Record<ExtendedCustomColors>;
    }
}
