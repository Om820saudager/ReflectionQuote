const themeToggle = document.getElementById("themeToggle");
const hamburgerMenu = document.querySelector(".hamburgerMenu");
const menu = document.querySelector(".menu");

hamburgerMenu.addEventListener('click', () =>{
    menu.classList.toggle("show");
})
  
themeToggle.addEventListener('click', function(){
    document.body.classList.toggle('lightTheme');

    if(document.body.classList.contains('lightTheme')){
        lightIcon.style.display = 'inline'
        darkIcon.style.display = 'none'
    }
    else{
        lightIcon.style.display = 'none'
        darkIcon.style.display = 'inline'
        }
});

