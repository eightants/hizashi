import React, { Component } from 'react';

class Projects extends Component {
    componentDidMount() {
        var acc_arr = document.getElementsByClassName("accent");
        for (var i = 0; i < acc_arr.length; i++) {
            acc_arr[i].style["background-color"] = sessionStorage.getItem('clr');
        }
    }
  render() {
    return (
        <section id="portfolio" data-aos="fade-in">
            <div>
                <h1>Portfolio</h1>
                <p className="service-div">Nulla facilisi. Morbi eleifend volutpat lacus a vestibulum. Aliquam erat volutpat. Maecenas ut gravida dui, non egestas nibh. Phasellus sed sapien sed arcu lobortis venenatis at sit amet nisl. Sed vitae rutrum nulla, sed luctus nisl. Duis in rutrum augue. </p>
                <div className="projects">
                    <div className="project-card accent">
                        <h3>Whisperify</h3>
                        <button class="tag">In Progress</button>
                        <p className="project-desc">An interactive way to learn about your favourite songs. Inspired by the opening drum riff in Careless Whisper. </p>
                    </div>
                    <a className="clr-b" href="https://tamuhack.com">
                    <div className="project-card accent">
                        <h3>TAMUhack</h3>
                        <button class="tag">In Progress</button>
                        <p className="project-desc">Organizing Texas A&M University's largest annual hackathon (and a smaller one). </p>
                    </div>
                    </a>
                    <a className="clr-b" href="https://github.com/eightants/terminna">
                    <div className="project-card accent">
                        <h3>Terminna</h3>
                        <button class="tag">React</button>
                        <p className="project-desc">Modern personal website theme with a novelty terminal navigation. </p>
                    </div>
                    </a>
                    <a className="clr-b" href="https://devpost.com/software/fullhouse">
                    <div className="project-card accent">
                        <h3>Full House</h3>
                        <button class="tag">Hackathon Project</button>
                        <p className="project-desc">Communal inventory management for social service centers designed to reduce waste and give each community their specific needs. </p>
                    </div>
                    </a>
                    <a className="clr-b" href="https://github.com/eightants/reddit-post-alerts">
                    <div className="project-card accent">
                        <h3>Reddit Post Alerts</h3>
                        <button class="tag">Python</button>
                        <p className="project-desc">A Discord bot that alerts you of new posts in a subreddit matching your keywords. </p>
                    </div>
                    </a>
                    <a className="clr-b" href="https://anthonyteo.com/rps-ai/">
                    <div className="project-card accent">
                        <h3>PARIS</h3>
                        <button class="tag">Javascript</button>
                        <p className="project-desc">A rock, paper, scissors AI. </p>
                    </div>
                    </a>
                </div>
            </div>
        </section>
    );
  }
}

export default Projects;