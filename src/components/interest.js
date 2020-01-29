import React, { Component } from 'react';
import resume from '../assets/resume.pdf'



class Interest extends Component {
    constructor(props){
        super(props);
        this.setclr = this.setclr.bind(this);
        this.resetclr = this.resetclr.bind(this);
    }

    componentDidMount() {
        this.getclr();
    }

    getclr() {
        var acc_arr = document.getElementsByClassName("accent");
        for (var i = 0; i < acc_arr.length; i++) {
            acc_arr[i].style["background-color"] = sessionStorage.getItem('clr');
        }
        document.getElementById('comment').style["color"] = sessionStorage.getItem('clr');
    }

    setclr() {
      sessionStorage.setItem("clr", this.clr.value);
      this.getclr();
    }

    resetclr() {
      sessionStorage.setItem("clr", "#FCF3B3");
      this.getclr();
    }

    // since code blocks can't be copy pasted into the return function
    generateCode() {
        return ("class Interest extends Component {\n\tconstructor(props) {\n\t\tsuper(props);\n\t\tthis.setclr = this.setclr.bind(this);\n\t}\n\tgetclr() {\n\t\tvar acc = document.getElementsByClassName('accent');\n\t\tfor (var i = 0; i < acc.length; i++) {\n\t\t\tacc[i].style['background-color'] = sessionStorage.getItem('clr');\n\t\t}\n\t}\n}");
    }
    

  render() {
    return (
        <section id="interest" data-aos="fade-in">
            <div>
                <h1>What I Do</h1>
                <p>
                    I'm really interested in the process of creation, and have worked on many projects driven by that curiosity. Projects that I am currently working on include organizing events with <a href="https://tamuhack.com">TAMUhack</a> and the <a href="https://github.com/aggie-coding-club">Aggie Coding Club</a>, researching machine learning in the <a href="http://people.tamu.edu/~guangzhou92/Data_Lab/">DATA Lab</a>, and helping out on the <a href="https://cypres.engr.tamu.edu/">CYPRES project</a>. 
                </p>
                <p>
                    Through my experience in events with TAMUhack and other organizations, I found that human connections and interactions are very meaningful to me. That motivated me to look at software as experiences, and to look for ways to create digital experiences that improve our experience with software. 
                </p>
                <div className="content-block">
                    <div className="info-block">
                        <div>
                            <h4>Interaction</h4>
                            <p>Interactive elements can go a long way in making your website memorable and connect with users better. I make it my goal to give experiences beyond just reading a document. Type a color in the input field to change the accent color of this site!</p>
                        </div>
                        <div>
                            <h4>User Experience</h4>
                            <p>The experience of the software user is very important, and the uniform theme of this website can help with that. This website is accessible and responsive on all screen sizes. </p>
                        </div>
                    </div>
                    <div class="code-block">
                        <pre>
                            <span id="comment">/* React code snippet that changes the accent color of the website */</span><br></br><br></br>
                            {this.generateCode()}
                        </pre>
                        <input type="text" ref={(inp)=> this.clr = inp} placeholder="Enter a color... (pink, #F3F3F3)"></input>
                        <button className="submit-btn accent" onClick={this.setclr}>Submit</button>
                        <button class="reset" onClick={this.resetclr}>Reset Color</button>
                    </div>
                </div>
                <br></br><br></br>
                <p>Design is an area that I am really passionate about, and I am always reading articles and learning from other designers. The inspiration for designs can come from any part of daily life, and that has really helped me to discover better inspiration for my software projects. I recently worked on a <a href="https://github.com/eightants/terminna">website theme inspired by the Unix terminal</a>, and I am currently working on a web application inspired by the opening drum riff in Careless Whisper. The design and functionality of this website was also inspired by something personal. I recently <a href="https://gkids.com/films/weathering-with-you/">watched a film</a> where the theme of sunshine and the slice of life elements of Tokyo really resonated with me. </p>
                <p>My works have mostly involved design and software engineering and hope to go into full-stack software development, but I have been exploring machine learning and data science through research and personal projects as potential fields in the future. The main tools I have worked with are Python, C++, HTML/CSS, Javascript, React, and Node. </p>
                <p>No matter what I work on in the future, I hope that my impact on the world will connect people from all backgrounds, creating a community of technology users. Until then, I will keep searching for inspiration and pursuing my passions in computer science. </p>
                <iframe className="pdf" title="resume" src={resume} style={{height: "600px"}}></iframe>
            </div>
        </section>
    );
  }
}

export default Interest;