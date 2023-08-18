import Link from "next/link";
import React from "react";

const portfolioPage = () => {
  const projects = [
    { id: "1", name: "project1" },
    { id: "2", name: "project2" },
    { id: "3", name: "project3" },
    { id: "4", name: "project4" },
  ];
  return (
    <div>
      <h1>start portfolio</h1>
      {projects.map((project) => {
        return (
          <ul key={project.id}>
            <li>
              <Link href={`portfolio/${project.id}`}>{project.name}</Link>
            </li>
          </ul>
        );
      })}
    </div>
  );
};

export default portfolioPage;
