var dropdown = document.querySelector(".nav .dropdown");
var button = document.querySelector(".nav .menu");

// close the dropdown when user clicks outside
var nav = document.querySelector(".nav");

function menu() {
    if (dropdown.style.display === "grid") {
        dropdown.style.display = "none";
        button.innerHTML = "menu";
    } else {
        dropdown.style.display = "grid";
        button.innerHTML = "close";
    }
}

// Close the dropdown on window resize
window.addEventListener("resize", function () {
    if (window.innerWidth > 768) {
        dropdown.style.display = "none";
        button.innerHTML = "menu";
    }
});


// If the dropdown is open and a click outside is detected, the dropdown will be closed
document.addEventListener("click", function (event) {
    var isClickInside = nav.contains(event.target);
    if (!isClickInside) {
        if (dropdown.style.display === "grid") {
            dropdown.style.display = "none";
            button.innerHTML = "menu";
        }
    }
});
