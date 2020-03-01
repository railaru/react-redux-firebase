import React from "react";

const ProjectSummary = ({ title }) => {
    return (
        <div className="card z-depth-0 project-summary">
            <div className="card-content grey-text text-darken-3">
                <h3 className="card-title">{title}</h3>
                <p>Posted by Rutenis Raila</p>
                <p className="grey-text">3rd September, 2am</p>
            </div>
        </div>
    );
};

export default ProjectSummary;
