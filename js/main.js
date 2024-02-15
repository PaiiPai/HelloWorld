let projects = document.getElementsByClassName('project-content');

const prev = () => {
    for (let i = projects.length-1; i >= 0; i--) {
        let display = window.getComputedStyle(projects[i]).getPropertyValue('display');
        if (display === 'flex') {
            projects[i].style.display = 'none';
            if (i-1 < 0) {
                i = projects.length;
            }
            projects[i-1].style.display = 'flex';
            break;
        }
    }
}

const next = () => {
    for (let i = 0; i < projects.length; i++) {
        let display = window.getComputedStyle(projects[i]).getPropertyValue('display');
        if (display === 'flex') {
            projects[i].style.display = 'none';
            if (i+1 >= projects.length) {
                i = -1;
            }
            projects[i+1].style.display = 'flex';
            break;
        }
    }
}