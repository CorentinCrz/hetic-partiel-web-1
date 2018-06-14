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

var oldScroll = 0;
window.addEventListener('scroll', function(){
  // var proj = document.getElementById('projects').offsetTop;
  var header = document.querySelector('.header');
  if (window.scrollY > 150) {
    backTop.style.opacity = '1';
    header.style.top = '0';
  } else {
    header.style.top = '';
  }
  if (oldScroll<window.scrollY) {
    header.style.transform ='translateY(-150%)';
  } else {
    header.style.transform ='';
  }
  oldScroll = window.scrollY;
});

var mainnav = document.querySelector('#mainav>ul');
document.querySelector('#nav-icon1').addEventListener('click', function(){
  document.querySelector('#nav-icon1').classList.toggle('open');
  if (mainnav.style.display === '') {
    mainnav.style.display = 'block';
  } else {
    mainnav.style.display = '';
  }
});
