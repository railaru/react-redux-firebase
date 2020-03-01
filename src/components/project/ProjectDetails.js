import React from "react";

const ProjectDetails = props => {
  const id = props.match.params.id;

  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <h3 className="card-title">Project title - {id}</h3>
        <p className="card-content">lorem ipsum</p>
        <div className="card-action grey-text">
          <p>Posted by Rutenis Raila</p>
          <p>September 2nd, 2am</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
