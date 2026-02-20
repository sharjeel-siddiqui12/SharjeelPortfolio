import type { Metadata } from "next";
import { ProjectsPageContent } from "./projects-content";

export const metadata: Metadata = {
  title: "Projects | Sharjeel Siddiqui",
  description:
    "View all projects by Sharjeel Siddiqui - MERN Stack Developer.",
};

export default function ProjectsPage() {
  return <ProjectsPageContent />;
}
