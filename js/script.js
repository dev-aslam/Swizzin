const navbar = document.querySelector('.navbar');
const navbarCollapsed = document.querySelector('.offcanvas');

const gitdark = document.querySelectorAll('.github-dark');
const gitlight = document.querySelectorAll('.github-light');

const crosslight = document.querySelector('.cross-light');
const crossdark = document.querySelector('.cross-dark');

const lightMode = document.querySelectorAll('.lightToggleIcon');
const darkMode = document.querySelectorAll('.darkToggleIcon');

function darkLightToggler(){
    if(navbar.classList.contains('navbar-dark')){

        navbar.classList.remove('navbar-dark');
        navbarCollapsed.classList.remove('navbar-dark');
        crosslight.classList.remove('display-none');
        crossdark.classList.add('display-none');

        gitlight.forEach(element => {
            element.classList.remove('display-none');
        });
        gitdark.forEach(element=>{
            element.classList.add('display-none');
        });
        
        lightMode.forEach(element => {
            element.classList.remove('display-none');
        });

        darkMode.forEach(element => {
            element.classList.add('display-none');
        });
    }
    else{
        navbar.classList.add('navbar-dark');
        navbarCollapsed.classList.add('navbar-dark');
        crosslight.classList.add('display-none');
        crossdark.classList.remove('display-none');

        gitlight.forEach(element => {
            element.classList.add('display-none');
        });
        gitdark.forEach(element=>{
            element.classList.remove('display-none');
        });

        lightMode.forEach(element => {
            element.classList.add('display-none');
        });

        darkMode.forEach(element => {
            element.classList.remove('display-none');
        });
    }
}