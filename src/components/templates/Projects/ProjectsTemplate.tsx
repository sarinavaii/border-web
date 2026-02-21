import { Filters, Hero, Projects } from "@organisms/projects";
import { api } from "@services/api/endpoints";
import { ProjectSection, ProjectSliderSection, ProjectsSection } from "@services/types/projects-page.types";
import { Fragment } from "react/jsx-runtime";

type ProjectsTemplateProps = {
    searchParams?: { q_name?: string; q_location?: string; q_year?: string };
};

const ProjectsTemplate = async ({ searchParams }: ProjectsTemplateProps) => {
    const params = searchParams
        ? {
              ...(searchParams.q_name && { q_name: searchParams.q_name }),
              ...(searchParams.q_location && { q_location: searchParams.q_location }),
              ...(searchParams.q_year &&
                  !Number.isNaN(Number(searchParams.q_year)) && {
                      q_year: Number(searchParams.q_year),
                  }),
          }
        : undefined;
    const data = await api.getProjects(params);
    const sortedSections = [...data.sections].sort((a, b) => a.sort - b.sort);

    const renderSection = (section: ProjectsSection) => {
        switch (section.type) {
            case "slider":
                return <Hero key={section.type} data={section as ProjectSliderSection} />;
            case "project":
                return (
                    <Fragment key={section.type}>
                        <Filters searchParams={searchParams} />
                        <Projects data={section as ProjectSection} />;
                    </Fragment>
                );
        }
    };

    return <>{sortedSections.map(renderSection)}</>;
};

export default ProjectsTemplate;
