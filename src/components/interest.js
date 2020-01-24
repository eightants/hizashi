import React, { Component } from 'react';



class Interest extends Component {
    constructor(props){
        super(props);
        this.setclr = this.setclr.bind(this);
    }

    componentDidMount() {
        this.getclr();
    }

    getclr() {
        var acc_arr = document.getElementsByClassName("accent");
        for (var i = 0; i < acc_arr.length; i++) {
            acc_arr[i].style["background-color"] = sessionStorage.getItem('clr');
        }
    }

    setclr() {
      sessionStorage.setItem("clr", this.clr.value);
      this.getclr();
    }

  render() {
    return (
        <section id="interest">
            <div>
                <h1>What I Do</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc posuere lorem vel condimentum auctor. Vestibulum sed mi dui. Proin et scelerisque enim. Praesent viverra faucibus luctus. Nullam a ornare leo. Phasellus id ornare enim, sit amet consectetur ipsum. Phasellus vel mauris venenatis, aliquam ipsum a, mollis turpis. Suspendisse volutpat aliquam mi et mattis. Mauris a finibus sem. Integer leo nisl, dictum sit amet magna et, dignissim viverra mi. Nulla sed risus ut sapien aliquam tempus. Suspendisse at odio convallis, imperdiet tortor vitae, tincidunt est. Phasellus eu facilisis ante.</p>
                <div className="content-block">
                    <div className="info-block">
                        <div>
                            <img></img>
                            <h4>Interaction</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc posuere lorem vel condimentum auctor. </p>
                        </div>
                        <div>
                            <img></img>
                            <h4>User Experience</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc posuere lorem vel condimentum auctor. </p>
                        </div>
                    </div>
                    <div class="code-block">
                        <pre>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc posuere lorem vel condimentum auctor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            <br></br><br></br>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc posuere lorem vel condimentum auctor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc posuere lorem vel condimentum auctor. 
                        </pre>
                        <input type="text" ref={(inp)=> this.clr = inp} placeholder="Enter a color... (pink, #F3F3F3)"></input>
                        <input type="submit" value="Submit" className="accent" onClick={this.setclr}></input>
                        <button class="reset">Reset</button>
                    </div>
                </div>
            </div>
        </section>
    );
  }
}

export default Interest;