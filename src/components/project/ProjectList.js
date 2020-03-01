import React from "react";

import ProjectSummary from "./ProjectSummary";

const ProjectList = ({ projects }) => {
    return (
        <div className="project-list section">
            {projects &&
                projects.map(({ id, title, content }) => (
                    <ProjectSummary key={id} title={title} content={content} />
                ))}
        </div>
    );
};

export default ProjectList;
