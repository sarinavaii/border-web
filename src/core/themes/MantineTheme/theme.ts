import { colorsTuple, createTheme } from "@mantine/core";

const theme = createTheme({
    colors: {
        light: colorsTuple("#ffffff"),
        dark: colorsTuple("#1C1C1C"),
        green: colorsTuple("#046307"),
        smoke: colorsTuple("#F5F5F5"),
        sand: colorsTuple("#C8A951"),
        emerald: colorsTuple("#004B40"),
        gray: colorsTuple("#CECECE"),
    },
    primaryColor: "green",
    fontFamily: "Encode Sans Semi Condensed",
    defaultRadius: 0,
});

export default theme;
