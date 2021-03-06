import React, { Component } from "react";

import { connect } from "react-redux";
import { compose } from "redux";

import { firestoreConnect, reactReduxFirebase } from "react-redux-firebase";

import Notifications from "./Notifications";
import ProjectList from "../project/ProjectList";

class Dashboard extends Component {
    render() {
        const { projects } = this.props;

        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <ProjectList projects={projects} />
                    </div>
                    <div className="col s12 m5 offset-m1">
                        <Notifications />
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        projects: state.firestore.ordered.projects
    };
};

export default compose(
    firestoreConnect([{ collection: "projects" }]),
    connect(mapStateToProps)
)(Dashboard);
