import React, { Component } from 'react';

class About extends Component {
  componentDidMount() {
    var acc_arr = document.getElementsByClassName("accent");
    for (var i = 0; i < acc_arr.length; i++) {
        acc_arr[i].style["background-color"] = sessionStorage.getItem('clr');
    }
  }
  render() {
    return (
        <section id="about">
            <h1>About Me</h1>
            <div className="about-div">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc posuere lorem vel condimentum auctor. Vestibulum sed mi dui. Proin et scelerisque enim. Praesent viverra faucibus luctus. Nullam a ornare leo. Phasellus id ornare enim, sit amet consectetur ipsum. Phasellus vel mauris venenatis, aliquam ipsum a, mollis turpis. Suspendisse volutpat aliquam mi et mattis. Mauris a finibus sem. Integer leo nisl, dictum sit amet magna et, dignissim viverra mi. Nulla sed risus ut sapien aliquam tempus. Suspendisse at odio convallis, imperdiet tortor vitae, tincidunt est. Phasellus eu facilisis ante.</p>
            </div>
            <div id="pfp"><img src="https://anthonyteo.com/images/pfp2.jpg"></img></div>
        </section>
    );
  }
}

export default About;