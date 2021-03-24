document.getElementsByClassName("carousel-button")[0].onmouseover = function() {
  mouseOver()
};
document.getElementsByClassName("carousel-button")[0].onmouseout = function() {
  mouseOut()
};

function mouseOver() {
  document.getElementsByClassName("carousel-button")[0].style.color = "red";
}

function mouseOut() {
  document.getElementsByClassName("carousel-button")[0].style.color = "black";
}

function KeyCorrect() {
  if (document.getElementById("keyword").value == "Hollow") {
    alert("Correct");
    document.getElementsByClassName("hint2")[0].style.color = "red";
    document.getElementsByClassName("hint2")[1].style.color = "red";
    var link = document.getElementById("link").innerHTML.replace("!!!", "1Bi");
    document.getElementById("link").innerHTML = link;
  } else
  if (document.getElementById("keyword").value == "Bootstrap") {
    alert("Correct");
    document.getElementsByClassName("hint3")[0].style.color = "green";
    document.getElementsByClassName("hint3")[1].style.color = "green";
    document.getElementsByClassName("hint3")[2].style.color = "green";
    var link = document.getElementById("link").innerHTML.replace("@@@", "x44");
    document.getElementById("link").innerHTML = link;
  } else
  if (document.getElementById("keyword").value == "Ooma") {
    alert("Correct");
    document.getElementsByClassName("hint4")[0].style.color = "blue";
    document.getElementsByClassName("hint4")[1].style.color = "blue";
    var link = document.getElementById("link").innerHTML.replace("###", "C1E");
    document.getElementById("link").innerHTML = link;
  } else
  if (document.getElementById("keyword").value == "Soul") {
    alert("Correct");
    var link = document.getElementById("link").innerHTML.replace("$$", "zY");
    document.getElementById("link").innerHTML = link;
    var tolink = document.getElementById("link").innerHTML.link("https://www.youtube.com/watch?v=1Bix44C1EzY");
    tolink = document.getElementById("link").innerHTML = tolink;
    var secret = Math.floor(Math.random()*10+1);
  return false;
}
