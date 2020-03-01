import React from "react";

import { compose } from "redux";

import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";

const ProjectDetails = props => {
    const { project } = props;

    if (project) {
        return (
            <div className="container section project-details">
                <div className="card z-depth-0">
                    <h3 className="card-title">{project.title}</h3>
                    <p className="card-content">{project.content}</p>
                    <div className="card-action grey-text">
                        <p>
                            Posted by {project.authorFirstName}{" "}
                            {project.authorLastName}
                        </p>
                        <p>September 2nd, 2am</p>
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div className="container center">
                <p>Loading project...</p>
            </div>
        );
    }
};

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    const projects = state.firestore.data.projects;
    const project = projects ? projects[id] : null;

    return { project };
};

export default compose(
    connect(mapStateToProps),
    firestoreConnect([{ collection: "projects" }])
)(ProjectDetails);
