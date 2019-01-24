import React, { Component } from 'react'

const ProjectDetails = (props) => {
    const id = props.match.params.id;
    return(
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title - {id}</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias commodi omnis iste mollitia! Perspiciatis sit necessitatibus blanditiis ipsa et, sunt ipsum sed quia? Sequi, molestiae debitis. Cumque culpa iusto sint.</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by Yoonju Seo</div>
                    <div>Jan 24 2019 18:07</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails