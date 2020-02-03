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
        <section id="service" data-aos="fade-in">
            <h1>Service</h1>
            <div className="service-div">
                <p>
                Cras faucibus risus eu tellus ultricies consectetur. Nullam in est vel dui convallis accumsan quis ut nulla. Aenean ultricies faucibus enim a venenatis. Sed et ante pharetra, lacinia dolor quis, feugiat arcu. Cras euismod a neque rhoncus pellentesque. 
                </p>
                <p>
                Nunc ornare sodales magna, eget vulputate risus. Mauris velit dui, lacinia nec ipsum sit amet, rhoncus sodales orci. Suspendisse ut finibus nisl. Suspendisse eget est tortor. Ut tristique lacus nec tortor rutrum aliquam. Aliquam id nisi quis nisl aliquet consectetur. Aenean suscipit venenatis lectus et dignissim. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus aliquet mattis ipsum ut pretium. Aliquam accumsan nisi eu eros pellentesque, at aliquam metus pulvinar. 
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