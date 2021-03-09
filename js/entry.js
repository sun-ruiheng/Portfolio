let lastScroll = 0;
const nav = document.getElementById('nav');
function changeNav() {
    var newScroll = document.scrollingElement.scrollTop;
    if (newScroll > lastScroll) {
        nav.style.transform = 'translateY(-110px)';
    } else {
        nav.style.transform = 'translateY(0)';
    };
    lastScroll = newScroll;
};