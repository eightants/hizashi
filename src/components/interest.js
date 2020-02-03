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
        var svg_arr = document.getElementsByClassName("accent-svg");
        for (var i = 0; i < svg_arr.length; i++) {
            svg_arr[i].setAttribute("fill", sessionStorage.getItem('clr'));
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam venenatis risus eros, dignissim faucibus dui imperdiet vitae. Quisque convallis orci in nibh congue, nec mollis nisi porttitor. In interdum mi scelerisque, tincidunt erat sed, ultricies risus. Nulla hendrerit sodales sapien, accumsan faucibus dui pellentesque et. Suspendisse varius ornare erat in ullamcorper. Sed ut euismod est. Nunc eget magna ut lectus ultricies tempor. Suspendisse blandit interdum finibus.
                </p>
                <p>
                    Nulla lacinia dictum eros, a porta est gravida vel. Vestibulum est nisl, vehicula quis lobortis et, suscipit ut leo. Aenean vitae finibus elit. Proin pellentesque condimentum dui at porta. Proin pharetra interdum libero eget sollicitudin. Maecenas sed faucibus enim. Sed sit amet diam urna. Nulla facilisi. Quisque leo erat, porttitor ut dignissim vitae, dapibus ut purus. Vestibulum suscipit, metus eu varius tempus, metus dolor tincidunt nunc, quis tincidunt arcu ante eu leo. Nunc eget cursus nibh, vitae mollis eros. Nam venenatis rhoncus elementum. 
                </p>
                <div className="content-block">
                    <div className="info-block">
                        <div className="accent">
                            <h4>Interaction</h4>
                            <p>Interactive elements can go a long way in making your website memorable and connect with users better. I make it my goal to give experiences beyond just reading a document. Type a color in the input field to change the accent color of this site!</p>
                        </div>
                        <div className="accent">
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
                </div>
        </section>
    );
  }
}

export default Interest;