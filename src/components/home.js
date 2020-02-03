import React, { Component } from 'react';
import {
    HashRouter, 
    Link
  } from "react-router-dom";
import githubimg from "../assets/github.svg"
import linkedinimg from "../assets/linkedin.svg"
import resumeimg from "../assets/file.svg"
import emailimg from "../assets/mail.svg"
import resume from "../assets/resume.pdf"


class Home extends Component {

  componentDidMount() {
      var acc_arr = document.getElementsByClassName("accent");
      for (var i = 0; i < acc_arr.length; i++) {
          acc_arr[i].style["background-color"] = sessionStorage.getItem('clr');
      }
  }
  render() {
    return (
        <section id="home">
          <div className="anchor"  data-aos="fade-in" data-aos-duration="1000">
              <h1 className='anchor-txt'>Hi, I'm Anthony. </h1>
              <p>Welcome to Hizashi, an interactive portfolio website with bright colours and bold lines. The goal of this portfolio theme was to encapsulate the feeling of sunshine and the corporate vibe of Tokyo, two elements in the movie Tenki no Ko. </p>
              <a href={resume}><button class="btn social-btn accent"><img alt="" src={resumeimg}></img></button></a>
              <a href="mailto:yihonganthony@gmail.com"><button class="btn social-btn accent"><img alt="" src={emailimg}></img></button></a>
              <a href="https://github.com/eightants"><button class="btn social-btn accent"><img alt="" src={githubimg}></img></button></a>
              <a href="https://www.linkedin.com/in/anthonyteo/"><button class="btn social-btn accent"><img alt="" src={linkedinimg}></img></button></a>
          </div>
          <div data-aos="fade-up" className="anchor align-right">
              <div className="main-img">
                  <svg id="e557b204-1bfc-4f91-8d35-03414f04ca70" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 949 836.09513"><title></title><polygon points="214 219.205 27 219.205 27 96.205 198.889 96.205 214 219.205" fill="#efefef"/><circle cx="141.5" cy="134.04757" r="17" fill="#3f3d56"/><path d="M314.45,93.40106c1.61169-1.82887,3.28094-3.64879,4.96184-5.40977l1.7601,1.67991c-1.65995,1.73773-3.30725,3.53352-4.89714,5.3377Z" transform="translate(-125.5 -31.95243)" fill="#3f3d56"/><path d="M330.18119,77.61075c3.717-3.29835,7.61542-6.47946,11.58771-9.45459l1.45874,1.94609c-3.91865,2.936-7.76508,6.07414-11.43164,9.32807Zm23.91925-17.916c4.207-2.63673,8.57785-5.12954,12.98992-7.40972l1.11712,2.16138c-4.35331,2.24894-8.66486,4.70792-12.81488,7.309Zm26.549-13.717c4.577-1.90337,9.29688-3.642,14.02944-5.16924l.74727,2.31531c-4.67,1.506-9.327,3.22217-13.84258,5.09975ZM409.64189,39.166l-.55706-2.36725c4.841-1.13876,9.77987-2.09,14.67858-2.82778l.36211,2.4057C419.29168,37.10424,414.4188,38.04266,409.64189,39.166Zm29.14653-4.3827-.16268-2.42692c4.954-.33179,9.98245-.46019,14.94573-.38142l-.03834,2.43259C448.63625,34.32925,443.67551,34.456,438.78842,34.78326Zm29.47031.47215.24041-2.42012c4.94231.49106,9.92687,1.19634,14.81476,2.09613l-.44031,2.39236C478.05135,36.43575,473.13429,35.73991,468.25873,35.25541Zm91.16375,320.4982c3.885-2.97573,7.69647-6.15385,11.329-9.44678l1.63365,1.8024c-3.68218,3.33777-7.54552,6.55945-11.48328,9.5753ZM497.2659,40.59326l.63606-2.34757c4.79046,1.29885,9.5889,2.81468,14.26284,4.50527l-.82734,2.28689C506.726,43.37028,501.99167,41.87458,497.2659,40.59326ZM581.263,335.95656c3.34443-3.577,6.58251-7.33855,9.62365-11.18022l1.90741,1.51026c-3.08284,3.89363-6.36481,7.70592-9.75443,11.33083ZM524.99548,50.624l1.01242-2.21232c4.51609,2.06732,9.00078,4.34653,13.33121,6.77572l-1.18959,2.121C533.87673,54.91206,529.45137,52.66281,524.99548,50.624ZM599.56235,312.8444c2.71752-4.07838,5.29838-8.3188,7.67126-12.6039l2.12793,1.17859c-2.40517,4.34258-5.02077,8.64052-7.77436,12.7737ZM550.71128,65.04645l1.35912-2.01658c4.11653,2.77448,8.16935,5.75455,12.04545,8.85729L562.596,73.786C558.77115,70.72456,554.77287,67.7843,550.71128,65.04645Zm63.13623,222.005c2.01507-4.4669,3.86951-9.07241,5.511-13.68754l2.29225.8149c-1.66434,4.67815-3.54325,9.34526-5.58555,13.87262ZM573.72147,83.4681l1.67062-1.7675c3.61,3.41252,7.119,7.01456,10.42992,10.70679L584.01088,94.031C580.74479,90.38852,577.28279,86.835,573.72147,83.4681Zm50.00519,175.80176c1.25781-4.743,2.33142-9.59018,3.19084-14.40683l2.39512.42732c-.87176,4.88244-1.96014,9.79548-3.23434,14.60284ZM593.39212,105.40528l1.93851-1.469c2.99687,3.95682,5.86374,8.08614,8.52059,12.27379l-2.05417,1.30276C599.17647,113.382,596.34858,109.30818,593.39212,105.40528Zm35.51461,124.83587c.458-4.876.71673-9.834.76858-14.73565l2.4319.02625c-.05237,4.96808-.31434,9.99376-.77875,14.93711Zm-19.73215-99.95648,2.15495-1.12772c2.3003,4.39272,4.44683,8.942,6.38061,13.52034l-2.2408.94633C613.56135,139.10673,611.44379,134.61921,609.17458,130.28467Zm20.04429,70.47258c-.35322-4.876-.916-9.8074-1.6734-14.6568l2.40356-.37506c.76713,4.915,1.33816,9.91354,1.69577,14.85594Zm-8.57547-43.32144,2.31087-.75962c1.54815,4.70932,2.92584,9.563,4.0873,14.38277l-2.36511.57C623.53055,166.869,622.17065,162.08367,620.6434,157.43581Z" transform="translate(-125.5 -31.95243)" fill="#3f3d56"/><path d="M541.01188,368.11384c2.07621-1.21338,4.156-2.486,6.18158-3.78317l1.31221,2.048c-2.05348,1.31485-4.16178,2.60532-6.26635,3.83468Z" transform="translate(-125.5 -31.95243)" fill="#3f3d56"/><polygon points="27 180.742 64.268 143.474 98 177.205 162 113.205 214.5 166.705 214.5 219.205 27 219.205 27 180.742" fill={this.props.themeclr} className="accent-svg"/><path d="M762.5,555.15778v241h310v-241Zm269.51929,64.44946h-24.00946V595.59772h24.00946Z" transform="translate(-125.5 -31.95243)" fill="#3f3d56"/><rect x="135" y="428.20535" width="20" height="26" fill="#3f3d56"/><rect x="567.5" y="621.15778" width="20" height="26" transform="translate(492.0631 -254.56609) rotate(45)" fill="#3f3d56"/><rect x="508.5" y="167.15778" width="20" height="26" transform="translate(153.75592 -345.82031) rotate(45)" fill="#3f3d56"/><path d="M785.50278,718.40132c-1.107,2.17185-2.27191,4.34933-3.46278,6.4726l-2.12218-1.19012c1.17635-2.09555,2.326-4.24421,3.418-6.38673Z" transform="translate(-125.5 -31.95243)" fill="#3f3d56"/><path d="M774.18622,737.60392c-2.78133,4.11816-5.76755,8.16783-8.87647,12.0363l-1.89636-1.52282c3.06667-3.81726,6.01318-7.81236,8.7567-11.875Zm-18.72013,23.29525c-3.42032,3.599-7.03509,7.09924-10.74261,10.40377l-1.61892-1.81622c3.65835-3.25967,7.22409-6.71243,10.59807-10.26267Zm-22.31034,19.88095c-3.96086,2.98049-8.101,5.83692-12.306,8.49166l-1.29889-2.05717c4.14961-2.61866,8.23446-5.43768,12.14225-8.37794ZM706.76351,794.5792l1.12754,2.15473c-4.40649,2.3054-8.95435,4.45351-13.51634,6.38479l-.94825-2.24039C697.92814,798.973,702.41526,796.85372,706.76351,794.5792Zm-27.14478,11.4843.76033,2.31047c-4.71639,1.55179-9.55537,2.925-14.3827,4.08143l-.567-2.3659C670.19222,808.94911,674.966,807.59427,679.61873,806.0635Zm-28.66419,6.862.3682,2.404c-4.90942.7518-9.913,1.3066-14.87118,1.649l-.16766-2.42676C641.1756,814.21423,646.11141,813.66705,650.95454,812.92547ZM483.04739,525.11109c-3.02421,3.84738-5.92693,7.87255-8.62776,11.96448l-2.03012-1.34018c2.73783-4.14771,5.68-8.228,8.74533-12.1273ZM621.53052,814.95916l-.03307,2.432c-4.96295-.06838-9.98752-.345-14.93489-.82174l.23344-2.42072C611.67716,814.61868,616.6346,814.8917,621.53052,814.95916ZM466.80809,549.71221c-2.35126,4.2955-4.55364,8.74346-6.54537,13.22006l-2.22274-.9892c2.01922-4.5373,4.25152-9.04525,6.63465-13.39845Zm125.37044,262.4175-.43124,2.39445c-4.888-.88092-9.79828-1.97489-14.59634-3.25245l.62555-2.35C582.51057,810.18179,587.35589,811.26146,592.17853,812.12971ZM454.82227,576.64508c-1.61945,4.62553-3.06629,9.37407-4.30056,14.11424l-2.354-.61316c1.25127-4.80387,2.71747-9.61676,4.35825-14.30432ZM563.68648,804.546l-.81569,2.29095c-4.67662-1.66516-9.34259-3.54528-13.86785-5.58812l1.00061-2.21684C554.46893,801.04759,559.07218,802.90269,563.68648,804.546ZM447.39073,605.17779c-.84253,4.82741-1.495,9.74919-1.93883,14.6274l-2.42281-.22006c.45031-4.94493,1.11121-9.93246,1.96509-14.8252ZM536.822,792.41644l-1.17929,2.127c-4.34444-2.409-8.63809-5.02668-12.7623-7.78091l1.35113-2.02261C528.3,787.45719,532.53607,790.03954,536.822,792.41644ZM444.721,634.54249c-.04043,4.90675.12348,9.86873.48726,14.7479l-2.4262.18094c-.36818-4.946-.53411-9.97539-.49381-14.94859Zm67.5983,141.50958-1.51291,1.90445c-3.88569-3.08852-7.68831-6.37643-11.302-9.773l1.66625-1.77212C504.73511,769.76191,508.48617,773.00574,512.31932,776.05207ZM446.91291,663.94818c.76737,4.837,1.74812,9.70387,2.91529,14.46483l-2.36222.57856c-1.18316-4.82541-2.17759-9.75869-2.95548-14.6625ZM490.85227,755.872l-1.80735,1.62759c-3.31921-3.68377-6.52837-7.55743-9.53864-11.512l1.93556-1.47321C484.41187,748.41588,487.57762,752.23687,490.85227,755.872Zm-36.919-63.28621c1.55319,4.63553,3.32307,9.27261,5.26118,13.782l-2.23511.96026c-1.96379-4.57047-3.75838-9.27057-5.33229-13.96929ZM472.99946,732.42l-2.0498,1.30974c-2.66926-4.17725-5.20926-8.5367-7.53137-12.917l2.14943-1.13955C467.85993,723.99948,470.3657,728.2971,472.99946,732.42Z" transform="translate(-125.5 -31.95243)" fill="#3f3d56"/><path d="M497.81131,508.56564c-1.70979,1.691-3.40837,3.44031-5.0483,5.1999l-1.77975-1.658c1.66258-1.78366,3.38432-3.55732,5.11762-5.27086Z" transform="translate(-125.5 -31.95243)" fill="#3f3d56"/><path d="M1025.64648,567.67926c-.22949-.375-5.64062-9.41015-7.5166-28.17187-1.7207-17.21289-.61425-46.22656,14.43262-86.69824,28.50586-76.6709-6.56934-138.53321-6.92773-139.14942l1.73046-1.0039c.09082.15625,9.14161,15.92871,14.48829,41.04394a179.06122,179.06122,0,0,1-7.416,99.80664c-28.457,76.54-7.30078,112.77344-7.084,113.13086Z" transform="translate(-125.5 -31.95243)" fill="#3f3d56"/><circle cx="889" cy="264.20535" r="13" fill={this.props.themeclr} className="accent-svg"/><circle cx="930" cy="312.20535" r="13" fill="#3f3d56"/><circle cx="902" cy="344.20535" r="13" fill={this.props.themeclr} className="accent-svg"/><circle cx="936" cy="371.20535" r="13" fill={this.props.themeclr} className="accent-svg"/><circle cx="892" cy="413.20535" r="13" fill="#3f3d56"/><path d="M1033.5,568.15778s-13-32,26-56Z" transform="translate(-125.5 -31.95243)" fill="#3f3d56"/><path d="M1017.512,567.57731s-5.91642-34.02934-51.7085-33.73768Z" transform="translate(-125.5 -31.95243)" fill="#3f3d56"/><path d="M603.98328,770.754a12,12,0,1,1,12-12A12.01375,12.01375,0,0,1,603.98328,770.754Zm0-22a10,10,0,1,0,10,10A10.01114,10.01114,0,0,0,603.98328,748.754Z" transform="translate(-125.5 -31.95243)" fill="#2f2e41"/><path d="M735.81092,127.04382H716.06977V107.30267h19.74115Zm-18.2226-1.51855h16.70405V108.82122H717.58832Z" transform="translate(-125.5 -31.95243)" fill="#3f3d56"/><path d="M197.45479,678.1239l-13.4651-14.43621,14.43621-13.4651,13.4651,14.43622ZM186.136,663.76239l11.39354,12.21525,12.21525-11.39354L198.3512,652.36885Z" transform="translate(-125.5 -31.95243)" fill="#2f2e41"/><polygon points="602.103 515.335 244.286 515.335 244.286 370.895 541.92 370.895 602.103 515.335" fill="#efefef"/><path d="M729.23805,548.3816H326.01672v-177.267h330.099l.2789.67695ZM328.2052,546.19312h397.763L654.65069,373.30307H328.2052Z" transform="translate(-125.5 -31.95243)" fill="#3f3d56"/><rect x="303.37536" y="393.87419" width="178.36126" height="16.41361" fill={this.props.themeclr} className="accent-svg"/><rect x="303.37536" y="427.79566" width="178.36126" height="16.41361" fill={this.props.themeclr} className="accent-svg"/><rect x="303.37536" y="461.71713" width="178.36126" height="16.41361" fill={this.props.themeclr} className="accent-svg"/><path d="M424.93164,275.15778H125.5v-182H358.19824l.24072.65576Zm-297.43164-2H422.06836l-65.2666-178H127.5Z" transform="translate(-125.5 -31.95243)" fill="#3f3d56"/><path d="M340.5,252.15778h-189v-141h189Zm-187-2h185v-137h-185Z" transform="translate(-125.5 -31.95243)" fill="#3f3d56"/><circle cx="298" cy="242.20535" r="18" fill={this.props.themeclr} className="accent-svg"/><circle cx="600" cy="516.20535" r="18" fill={this.props.themeclr} className="accent-svg"/><circle cx="729.0795" cy="239.74201" r="30.28838" fill="#E5A590"/><path d="M833.75624,286.20762s10.09613,22.71629-3.78605,31.5504,22.71629,45.43256,22.71629,45.43256l40.3845-42.90853s-21.45427-13.88218-17.66822-36.59846Z" transform="translate(-125.5 -31.95243)" fill="#E5A590"/><path d="M764.34538,382.12082l-8.83411,50.48063s-15.14419,30.28837-15.14419,56.7907-2.524,31.5504-2.524,31.5504-25.24032,50.48062-7.5721,53.00465,25.24032-51.74264,25.24032-51.74264,23.9783-59.31474,23.9783-78.245l16.4062-41.64652Z" transform="translate(-125.5 -31.95243)" fill="#E5A590"/><path d="M947.33766,384.64485l2.524,44.17055s8.83411,22.71628,2.524,63.10078l-5.04806,39.12249s11.35814,44.17055,0,45.43257-25.24032-27.76435-17.66822-44.17055V518.41851s-7.5721-59.31473-5.04807-69.41086l-8.83411-47.9566Z" transform="translate(-125.5 -31.95243)" fill="#E5A590"/><polygon points="657.776 702.271 670.396 735.083 698.16 730.035 680.492 694.699 657.776 702.271" fill="#E5A590"/><polygon points="777.667 728.773 773.881 776.73 805.431 776.73 804.169 735.083 777.667 728.773" fill="#E5A590"/><path d="M803.46786,472.986l-3.786,18.93023s-7.5721,6.31008-7.5721,12.62016-2.524,8.83411-2.524,8.83411-1.262,0-2.524,2.524a15.61846,15.61846,0,0,1-2.524,3.786s-74.45893,75.72094-58.05272,113.58141S774.4415,748.10537,774.4415,748.10537,811.04,736.74723,811.04,727.91312l-35.33644-99.69924L846.3764,555.017l56.79071,76.983s-11.35815,135.03568-3.786,136.29769,49.21861,10.09613,50.48063,6.31008,7.57209-171.63413,5.04806-177.94421-39.12249-82.031-39.12249-82.031,6.31008-7.5721,2.524-10.09613S908.21517,478.034,908.21517,478.034,809.77794,461.62781,803.46786,472.986Z" transform="translate(-125.5 -31.95243)" fill="#2f2e41"/><path d="M857.73454,331.64019l-25.43806-15.68876S817.35,316.496,813.564,320.28205s-26.50233,13.88217-26.50233,13.88217,5.04806,151.44189,15.14419,146.39382,2.524-8.83411,10.09612-5.04806,97.17521,5.04806,98.43723,5.04806,2.524-2.524,2.524-2.524l5.04806-76.983,16.40621-64.3628L886.14563,314.3395Z" transform="translate(-125.5 -31.95243)" fill="#d0cde1"/><path d="M797.15779,332.9022H787.06166s-13.88217,3.786-20.19225,23.9783-8.83411,29.02636-6.31008,31.5504,36.59846,21.45426,36.59846,21.45426Z" transform="translate(-125.5 -31.95243)" fill="#d0cde1"/><path d="M917.04928,335.42624l17.66822,1.262s22.71628,53.00466,16.4062,55.52869-42.90853,21.45427-42.90853,17.66822S917.04928,335.42624,917.04928,335.42624Z" transform="translate(-125.5 -31.95243)" fill="#d0cde1"/><path d="M798.4198,750.6294l-10.29028-3.786-23.78414,31.55039s-44.17055,31.55039-3.786,30.28838c0,0,31.55039-5.04807,34.07443-13.88218,0,0,36.59845-10.09612,36.59845-16.4062s-8.41079-23.13166-11.14648-23.555S805.9919,759.46351,798.4198,750.6294Z" transform="translate(-125.5 -31.95243)" fill="#2f2e41"/><path d="M930.93145,794.8s-30.68074-.4988-30.48456.38161-8.63793,21.07266-7.37591,28.64475,12.62016,17.66822,10.09613,22.71629,7.57209,20.19225,27.76434,21.45426,17.66822-21.45426,17.66822-21.45426l-10.09612-23.9783Z" transform="translate(-125.5 -31.95243)" fill="#2f2e41"/><path d="M836.009,236.63718a57.33086,57.33086,0,0,1-4.73777,3.625,45.04056,45.04056,0,0,0-5.71151,5.67348l-1.953,2.18651c-1.662,1.8607-3.42545,3.98435-3.35532,6.47821.026.92537.3104,1.82326.42179,2.74227.44189,3.64559-1.78633,7.65254.04788,10.83393.53029.91977,1.35049,1.63893,1.93509,2.52517a5.90339,5.90339,0,0,1,.933,3.8441c1.97109.0808,3.588-1.68559,4.2062-3.559s.53458-3.89723.83565-5.84688,1.14672-4.01407,2.91826-4.88206c3.77989-1.852,8.12034,2.96312,12.15489,1.76321,2.817-.83782,4.30263-4.32993,7.1827-4.91551,2.06136-.41912,4.04577.80566,5.96184,1.67376s4.49888,1.26994,5.85371-.33919c.897-1.06537.99274-2.7726,2.18248-3.49657,1.42587-.86766,3.21152.3404,4.29108,1.61338s2.272,2.82958,3.94043,2.78325c2.21339-.06147,3.90877-3.00925,6.00968-2.30992,2.3713.78934,1.2807,4.58394,2.71947,6.62748,1.21638,1.72768,3.76367,1.62593,5.85723,1.34049a2.09782,2.09782,0,0,0,2.184-2.80119l-.87446-11.596a5.5988,5.5988,0,0,0-.51285-2.31427c-.6088-1.10293-1.86952-1.6615-2.72684-2.5846-1.80257-1.94087-1.71594-5.34342-3.95744-6.75477-1.16388-.73284-2.6863-.71084-3.84195-1.4566-1.482-.95639-1.95947-2.87178-2.99763-4.29775-1.48415-2.03857-4.0789-2.98373-6.58713-3.24307s-5.03982.05344-7.56036-.02876c-5.12423-.16717-10.24831-1.60932-15.39753-.7651C840.938,229.89285,839.05187,233.70494,836.009,236.63718Z" transform="translate(-125.5 -31.95243)" fill="#2f2e41"/></svg>
              </div>
                <a href="#interest"><button class="btn accent big-btn">Learn More</button></a>
          </div>
        </section>
    );
  }
}

export default Home;