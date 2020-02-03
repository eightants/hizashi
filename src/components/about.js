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
        <section id="about" data-aos="fade-in">
            <h1>About Me</h1>
            <div className="about-div">
                <p>
Hi, I'm Anthony. I'm a Computer Science student at Texas A&M University. This website is a collection of my projects and interests.
<br></br>
<br></br>
I am passionate about the process of creation and like to build digital experiences. During my free time, I enjoy composing music on my piano. Occasionally you can also find me cooking, watching Formula 1, or playing football.
<br></br>
<br></br>
Having already moved around the world multiple times, I don't know what the future will bring. Nonetheless, I plan to keep working on meaningful projects during my time in college and make a few dents in the universe along the way!
</p>
            </div>
            <div id="pfp"><img src="https://anthonyteo.com/images/pfp2.jpg"></img><div className="circle accent"></div></div>
        </section>
    );
  }
}

export default About;