import React, { Component } from "react";

class CreateProject extends Component {
    state = { title: "", content: "" };

    handleChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };

    handleSubmit = e => {
        e.preventDefault();
        console.log(this.state);
    };

    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">
                        Create a new project
                    </h5>
                    <div className="input-field">
                        <label htmlFor="title">Title</label>
                        <input
                            type="text"
                            name="title"
                            id="title"
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="input-field">
                        <label htmlFor="content">Content</label>
                        <textarea
                            type="text"
                            name="content"
                            id="content"
                            className="materialize-textarea"
                            onChange={this.handleChange}
                        ></textarea>
                    </div>
                    <div className="input-field">
                        <button
                            type="submit"
                            className="btn pink-lighten-1-z-depth-0"
                        >
                            Create
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default CreateProject;
