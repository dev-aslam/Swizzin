function darkLightToggler(){
    var navbar = document.querySelector('.navbar');
    if(navbar.classList.contains('navbar-dark')){
        navbar.classList.remove('navbar-dark');
        document.querySelectorAll(".github-light").forEach.classList.remove('github-display');
        document.querySelectorAll(".github-dark").forEach.classList.add('github-display');
    }
    else{
        navbar.classList.add('navbar-dark');
        document.querySelectorAll(".github-light").forEach.classList.add('github-display');
        document.querySelectorAll(".github-dark").forEach.classList.remove('github-display');
    }
}