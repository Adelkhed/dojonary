function logout(){
   document.getElementById("btn1").innerHTML="Logout";
}
function removeDefinition(){
  document.getElementById("btn3").remove();
}
function alertLikes(){
  alert("Ninja was liked when clicking a like button")
}
function over(element) {
  alert("mouseover");    
}
  
function out(element) {
  alert("mouseout");    
}

var colors = document.querySelectorAll(".color");
    
function applyColors(){
    for(var i=0; i<colors.length; i++) {
        colors[i].style.color = colors[i].innerText;
    }
}
