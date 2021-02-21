const linkedin = document.getElementById('linkedin');
const github = document.getElementById('github');
const resume = document.getElementById('resume');

function openPage(link) {
    window.open(link, '_blank');
};

linkedin.onclick = () => {
    openPage('https://www.linkedin.com/in/sunruiheng');
};

github.onclick = () => {
    openPage('https://github.com/sun-ruiheng');
};

resume.onclick = () => {
    openPage('https://resume.io/r/rV3vTzYF1');
};
