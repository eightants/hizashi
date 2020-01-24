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
            <div className="about-div">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc posuere lorem vel condimentum auctor. Vestibulum sed mi dui. Proin et scelerisque enim. Praesent viverra faucibus luctus. Nullam a ornare leo. Phasellus id ornare enim, sit amet consectetur ipsum. Phasellus vel mauris venenatis, aliquam ipsum a, mollis turpis. Suspendisse volutpat aliquam mi et mattis. Mauris a finibus sem. Integer leo nisl, dictum sit amet magna et, dignissim viverra mi. Nulla sed risus ut sapien aliquam tempus. Suspendisse at odio convallis, imperdiet tortor vitae, tincidunt est. Phasellus eu facilisis ante.</p>
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