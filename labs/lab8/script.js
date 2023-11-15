function toggleTheme(){
    let bodyDarkmode = document.body;
    bodyDarkmode.classList.toggle("dark-mode");

}

let darkBotton = document.getElementById("toggleButton");
darkBotton.onclick = toggleTheme;