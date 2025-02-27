import React from "react";
import projects from "./ProjectData";
import { Link } from "react-router";

export default function ProjectCard() {
  return (
    <>
    <h1 className="text-3xl  font-bold text-center">Projects</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {projects.map((project) => (
        <Link key={project.id} className="bg-white shadow-md rounded-lg overflow-hidden p-5 border border-black" to={`/projects-data/${project.name}`}>
          <h3 className="text-xl font-semibold text-gray-900">{project.name}</h3>
          <p className="text-gray-600 mt-2">{project.description}</p>
          <p className="mt-3 text-gray-500">
            <strong>Start Date:</strong> {project.startDate}
          </p>
          <p className={`mt-2 font-semibold ${project.status === "Completed" ? "text-green-600" : "text-yellow-600"}`}>
            {project.status}
          </p>
        </Link>
      ))}
    </div>
    </>
  );
}
