# Hizashi
Interactive portfolio website with bright colours and bold lines. The goal of this portfolio theme was to encapsulate the feeling of sunshine and the corporate vibe of Tokyo, two elements in the movie Tenki no Ko. The bright theme and the accent color ![#FCF3B0](https://placehold.it/15/FCF3B0/000000?text=+)*#FCF3B0* represents sunshine, and the high contrast post-it note aesthetic captures the office atmosphere. This design concept works well as a concise and interactive portfolio template. 

The interactive component is in `interest.js` where the accent color can be changed by submitting a new color name or code. 
```
getclr() {
    var acc_arr = document.getElementsByClassName("accent");
    for (var i = 0; i < acc_arr.length; i++) {
        acc_arr[i].style["background-color"] = sessionStorage.getItem('clr');
    }
    document.getElementById('comment').style["color"] = sessionStorage.getItem('clr');
}
```

Check out the website [here](https://hizashi.netlify.com). 

## Setup
To set up Hizashi and customise it for your use, clone the repository and install dependencies. 
```
git clone https://github.com/eightants/hizashi.git
npm install
```
Then run the app with `npm start`. 
Customise the theme through the `components` directory. All the `.js` files in the directory are each section of the page. To change the default accent color, find and modify `background-color` in the snippet below in `App.css`. 
```
.accent {
  background-color: #FCF3B0;
  transition: all 0.2s ease;
}

.accent:hover {
  background-color: #FCF3B0;
}
```
You also have to modify `interest.js`. 
```
resetclr() {
  // change #FCF3B3 to the default color you want
  sessionStorage.setItem("clr", "#FCF3B3");
  this.getclr();
}
```

## Alternate Version
This theme is also available as a multi-page website on the branch `anthony`. 

> Anthony Teo