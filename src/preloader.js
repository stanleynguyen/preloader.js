'use strict';

window.preloader = function(){
    var preloader = {};
    var defaults = {
        overlay: '#ffffff',
        loader: './src/assets/loader.gif',
        elements: ['body']
    };
    //load user options
    if (arguments[0] && typeof arguments === 'object') {
        this.options = this.extendDefaults(defaults, arguments[0]);
    } else {
        this.options = defaults;
    }
}
//initialize the preloader
window.preloader.prototype.start = function(){
    //check options validity
    var $options = this.options;
    if (typeof $options.elements !== 'object') $options.elements = ['body'];
    //render loader
    var $body = document.querySelector('body');
    $body.innerHTML = '<div class="preloaderJS"></div>' + $body.innerHTML;
    var $preloader = document.querySelector('.preloaderJS');
    $preloader.style.position = 'absolute';
    $preloader.style['z-index'] = 999999;
    $preloader.style.height = '100vh';
    $preloader.style.width = '100vw';
    $preloader.style.background = $options.overlay +' url(' + $options.loader + ')' + ' no-repeat center center';
    //listen to loading
    var $itemsLoaded = 0;
    for (var index in $options.elements) {
        document.querySelector($options.elements[index]).onload = function(){
            $itemsLoaded++;
            if ($itemsLoaded === $options.elements.length) $preloader.style.display = "none";
        };
    }
}

window.preloader.prototype.extendDefaults = function(defaults, input){
    for (var option in input) {
        defaults[option] = input[option];
    }
    return defaults;
}
