// localStorage.setItem("myKey", "myValue")

// alert(localStorage.getItem("myKey"))

var currentTime = document.getElementById("currentDay");
var day = moment();


currentTime.textContent = day.format('MMMM Do YYYY, h:mm:ss a');

function clickHandler(event) {
    // console.log(event.target.previousElementSibling.value);
    console.log(event.target.previousElementSibling.previousElementSibling.textContent);

    var key = event.target.previousElementSibling.previousElementSibling.textContent;
    var value = event.target.previousElementSibling.value;

    localStorage.setItem(key, value);
}

 var buttons = document.querySelectorAll("button");
 console.log(buttons);
 for(var i =0; i < buttons.length; i++) {
     buttons[i].addEventListener("click", clickHandler );
 }

 var textAreas = document.querySelectorAll("textarea");
 for(var i = 0; i < textAreas.length; i++) {
     var savedKey = textAreas[i].previousElementSibling.textContent;
     var savedText = localStorage.getItem(savedKey)
     textAreas[i].value = savedText;


     // load color
     if(color) {
        textAreas[i].classList.add("present")

     } else if(color) {
        textAreas[i].classList.add("future")

     } else {
        textAreas[i].classList.add("past")

     }

 }

 