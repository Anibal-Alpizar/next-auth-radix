import HeaderDashboard from "@/components/dashboard/HeaderDashboard";
import { Container } from "@radix-ui/themes";
import prisma from "@/libs/prisma";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]/route";
import ProjectCard from "@/components/projects/ProjectCard";

async function loadProjects(userId: number) {
  return await prisma.project.findMany({
    where: {
      userId: userId,
    },
  });
}

async function page() {
  const session = await getServerSession(authOptions);
  const projects = await loadProjects(+(session?.user.id as string));
  console.log(projects);
  return (
    <Container className="mt-10 px-10 md:px-0">
      <HeaderDashboard />

      <div className="grid md:grid-cols-3 gap-4">
        {projects.map((project) => (
          <ProjectCard project={project} key={project.id} />
        ))}
      </div>
    </Container>
  );
}

export default page;
