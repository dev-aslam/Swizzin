//NavBar Selector
const navbar = document.querySelector('.navbar');
const navbarCollapsed = document.querySelector('.offcanvas');

//Github Icons(2 Icon)
const gitdark = document.querySelectorAll('.github-dark');
const gitlight = document.querySelectorAll('.github-light');

//Navbar Collapsed Cross icon
const crosslight = document.querySelector('.cross-light');
const crossdark = document.querySelector('.cross-dark');

//Dark and light mode icons
const lightMode = document.querySelectorAll('.lightToggleIcon');
const darkMode = document.querySelectorAll('.darkToggleIcon');

//Body Dark and dark mode
const bodylightShade = document.querySelectorAll('.section-light');
const bodyDarkShade = document.querySelectorAll('.section-dark');

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

        bodylightShade.forEach(element => {
            element.classList.remove('dark-mode-light');
        });

        bodyDarkShade.forEach(element => {
            element.classList.remove('dark-mode-dark');
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

        bodylightShade.forEach(element => {
            element.classList.add('dark-mode-light');
        });

        bodyDarkShade.forEach(element => {
            element.classList.add('dark-mode-dark');
        });
    }
}

function copyCode(elementId) {
    var codeElement = document.getElementById(elementId);
    var textArea = document.createElement("textarea");
    textArea.value = codeElement.textContent;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
    showCopySuccessIcon(elementId);
}

function showCopySuccessIcon(buttonId) {
    var button = document.querySelector(`button[onclick="copyCode('${buttonId}')"`);
    var successIcon = button.querySelector(".copyButtonSuccessIcon");
    var copyIcon = button.querySelector(".copyButtonIcon")
    successIcon.style.display = "inline-block";
    copyIcon.style.display="none";
    setTimeout(function() {
        successIcon.style.display = "none";
        copyIcon.style.display = "inline-block";
    }, 2000);
}