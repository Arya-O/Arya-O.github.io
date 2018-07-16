// JavaScript Document

/*model / pop-up window*/

// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

/*continue reading*/

$(document).ready(function() {
    $("#toggle").click(function() {
        var elem = $("#toggle").text();
        if (elem == "Continue reading..") {
            //function to do when btn is in the Continue readinge state
            $("#toggle").text("Show less..");
            $("#text").slideDown();
        } else {
            //function to do when btn is in the Show less state
            $("#toggle").text("Continue reading..");
            $("#text").slideUp();
        }
    });
});