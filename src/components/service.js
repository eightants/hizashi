import React, { Component } from 'react';

class Service extends Component {

    componentDidMount() {
        var acc_arr = document.getElementsByClassName("accent");
        for (var i = 0; i < acc_arr.length; i++) {
            acc_arr[i].style["background-color"] = sessionStorage.getItem('clr');
        }
    }
  render() {
    return (
        <section id="service">
            <h1>Service</h1>
            <div className="service-div">
                <p>
                    In terms of contribution to the computer science community, there is still much left for me to do. I have participated in many events related to computer science and also hosted a few to help connect the coding community. I hope to continue to do so while working on purposeful projects in my own time and through internships. 
                </p>
                <p>
                    As a student, I aim to continue learning about various aspects of computer science, learn new languages and tools in software development, and continue to refine my design skills. I also hope to continue to deepen my understanding of research in machine learning and data science through my lab. 
                </p>
            </div>
            <div className="project-card accent">
                <h3>500+ commits</h3>
                <p>on Github over the past year</p>
            </div>
            <div className="project-card accent">
                <h3>900+ people</h3>
                <p>hosted at 2 hackathons</p>
            </div>
        </section>
    );
  }
}

export default Service;