import { About, Approach, Hero, Projects, Statistics, Video } from "@organisms/home";

const HomeTemplate = () => {
    return (
        <>
            <Hero />
            <About />
            <Approach />
            <Projects />
            <Video />
            <Statistics />
        </>
    );
};

export default HomeTemplate;
