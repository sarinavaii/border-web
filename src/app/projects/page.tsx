import ProjectsTemplate from "@templates/Projects";

type PageProps = {
    searchParams: Promise<{ q_name?: string; q_location?: string; q_year?: string }>;
};

const page = async ({ searchParams }: PageProps) => {
    const params = await searchParams;
    return <ProjectsTemplate searchParams={params} />;
};

export default page;
