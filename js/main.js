let projects = document.getElementsByClassName("project-content");

const prev = () => {
  for (let i = projects.length - 1; i >= 0; i--) {
    let display = window
      .getComputedStyle(projects[i])
      .getPropertyValue("display");
    if (display === "flex") {
      projects[i].style.display = "none";
      if (i - 1 < 0) {
        i = projects.length;
      }
      projects[i - 1].style.display = "flex";
      break;
    }
  }
};

const next = () => {
  for (let i = 0; i < projects.length; i++) {
    let display = window
      .getComputedStyle(projects[i])
      .getPropertyValue("display");
    if (display === "flex") {
      projects[i].style.display = "none";
      if (i + 1 >= projects.length) {
        i = -1;
      }
      projects[i + 1].style.display = "flex";
      break;
    }
  }
};

const goTo = (event) => {
  var eventId = event.currentTarget.id;
  let destination;
  console.log(eventId);

  const isHome = eventId.includes('home');
  const isProfile = eventId.includes('profile');
  const isSkills = eventId.includes('skills');
  const isProjects = eventId.includes('projects');
  const isContact = eventId.includes('contact');
  const isGitHub = eventId.includes('gitHub');
  
  if (isHome) {
    destination = "home";
  }

  if (isProfile) {
    destination = "profile";
  }

  if (isSkills) {
    destination = "skills";
  }

  if (isProjects) {
    destination = "projects";
  }

  if (isContact) {
    destination = "contact";
  }
  document.getElementById(destination).scrollIntoView({ behavior: "smooth" });

  if (isGitHub) {
    window.location.href = 'https://github.com/PaiiPai';
  }
}

const scrollFade = () => {
  const scrollFades = document.getElementsByClassName('scrollFade');
  const viewportHeight = window.innerHeight;
  const revealThreshold = 150;
  for (let fade of scrollFades) {
    const fadePosition = fade.getBoundingClientRect().top;
    if (fadePosition < viewportHeight - revealThreshold) {
      fade.classList.add('reveal');
    } else {
      fade.classList.remove('reveal');
    }
  }
}

window.addEventListener('scroll', scrollFade);