$(function() {
    $('a').click(function() {
        $(this).find('i').toggleClass('fa-toggle-off fa-toggle-on');
    });
});
// function toggleOn(){
//     document.getElementById("on").style.display = "block";
// }
// function toggleOff(){
//     document.getElementById("off").style.display = "none";
// }

function openNav() {
document.getElementById("mySidenav").style.width = "250px";
document.getElementById("x-button").style.display = "block";
document.getElementById("ham-menu").style.display = "none";
}
function closeNav() {
document.getElementById("mySidenav").style.width = "0";
document.getElementById("x-button").style.display = "none";
document.getElementById("ham-menu").style.display = "block";
}

function openSettings() {
document.getElementById("mySettings").style.width = "250px";
document.getElementById("s-button").style.display = "block";
document.getElementById("cog").style.display = "none";
}
function closeSettings() {
document.getElementById("mySettings").style.width = "0";
document.getElementById("s-button").style.display = "none";
document.getElementById("cog").style.display = "block";
}
