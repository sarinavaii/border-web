import { api } from "@services/api/endpoints";
import ProjectDetail from "@templates/ProjectDetails/ProjectDetail";
import { notFound } from "next/navigation";

const page = async ({ params }: { params: { slug: string } }) => {
    const { slug } = await params;
    const data = await api.getProject(slug);

    if (!data) {
        notFound();
    }

    return <ProjectDetail data={data.data} />;
};

export default page;
