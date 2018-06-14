function ScrollToResolver(elem) {
    var jump = parseInt(elem.getBoundingClientRect().top * .2);
    if (jump === 0) {
        jump = 1;
    }
    document.body.scrollTop += jump;
    document.documentElement.scrollTop += jump;
    //lastjump detects anchor unreachable, also manual scrolling to cancel animation if scroll > jump
    if (!elem.lastjump || elem.lastjump > Math.abs(jump)) {
        elem.lastjump = Math.abs(jump);
        setTimeout(function() {
            ScrollToResolver(elem);
        }, "20");
    } else {
        elem.lastjump = null;
        if (elem.className === 'contact' && window.innerWidth > 1024) {
            document.querySelector('body').classList.add('contactOpen');
            headerOverlay.style.opacity = '';
            for (let i = 0; i < headerDots.length; i++){
                headerDots[i].style.margin = '';
            }
            headerOverlay.style.display = '';
        }
    }
}
var backTop = document.querySelector('#backtotop');
backTop.addEventListener('click', function(){
    ScrollToResolver(document.querySelector('body'));
});
