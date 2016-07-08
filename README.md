#preloaderJS
preloaderJS is an UI plugin to make sure important resource is loaded before the website is shown to visitors.

[Demo](http://stanleynguyen.github.io/preloader.js/demo.html)

##Getting Started
Include preloader.js
```
<script src="path_to_preloader/preloader.js"></script>
```
To initiate the preloader, include this script after including preloader.js
```
<script>
    var loader = new preloader();
    loader.start();
</script>
```

##Usage
TL;DR
preloader can be customized using available options
e.g.:
```
<script>
    var options = {
        overlay: '#ffffff', //this is the background color to cover the viewport
        loader: './assets/loader.gif', //path to your loader gif
        elements: ['body'] //array of important elements
    }
    var loader = new preloader(options);
    loader.start();
</script>
```
###Available options

**overlay**

*format: color code
this option is for setting the background color of your preloader.

e.g.:
```
overlay: "#ff0000"
```
```
overlay: "red"
```
```
overlay: "rgba(255, 0, 0)"
```

**loader**

*format: file path
this option is for linking to your loader gif.

e.g.:
```
loader: "./assets/loader.gif"
```

**elements**

*format: array of css selectors
this option is for quequeing important items to finish loading before presenting our website to the user

**Important Note:*
- Each of the elements array member must point to one and only one html element.
- Recommended html tags to use on are `<body`, `<img>`, `<frame>`, `<iframe>`, `<link>`, `<script>`
- By default this will be set to `['body']`

e.g.:
```
element: ['img#profile-picture', 'img#cover']
```
