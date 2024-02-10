//function to toggle dark mode
function toggleDarkMode() {
    const isDarkMode = document.body.classList.toggle('dark-mode');
    const stylesheet = isDarkMode ? './css/dark.css' : './css/light.css';
    document.getElementById('theme-style').setAttribute('href', stylesheet);
}

//function to copy text
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


//function to show check mark after pressing copy
function showCopySuccessIcon(buttonId) {
    var button = document.querySelector(`button[onclick="copyCode('${buttonId}')"`);
    var successIcon = button.querySelector(".copyButtonSuccessIcon");
    var copyIcon = button.querySelector(".copyButtonIcon")
    successIcon.style.display = "inline-block";
    copyIcon.style.display="none";
    setTimeout(function() {
        successIcon.style.display = "none";
        copyIcon.style.display = "inline-block";
    }, 1000);
}