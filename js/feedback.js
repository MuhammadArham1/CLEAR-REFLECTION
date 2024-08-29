var stars = document.getElementsByClassName("fa-solid");
var emoji = document.getElementById("emoji");

stars[0].onclick = function()
{
     stars[0].style.color = "#ffd93b";
     stars[1].style.color = "#e4e4e4";
     stars[2].style.color = "#e4e4e4";
     stars[3].style.color = "#e4e4e4";
     stars[4].style.color = "#e4e4e4";
    emoji.style.transform = "translateX(0)"; 
}


