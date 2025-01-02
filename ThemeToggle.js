const themeToggle = document.getElementById("themeToggle");

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

