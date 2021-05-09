// Smooth scroll

var navMenuAnchorTags = document.querySelectorAll(".nav-menu a");
var interval;
for (var i = 0; i < navMenuAnchorTags.length; i++) {
    navMenuAnchorTags[i].addEventListener("click", function (event) {
        event.preventDefault();
        var targetSectionId = this.textContent.trim().toLowerCase();
        var targetSection = document.getElementById(targetSectionId);

        // interval = setInterval(scrollVerticslly, 20 , targetSection);
        interval = setInterval(function () {
            scrollVerticslly(targetSection);
        }, 20);
        console.log(targetSection);
    });
}

function scrollVerticslly(targetSection) {
    var targetSectionCoordinates = targetSection.getBoundingClientRect();
    if (targetSectionCoordinates.top <= 0) {
        clearInterval(interval);
        return;
    }
    window.scrollBy(0, 50);
}

// Add Animation to the skill section

var progressBar = document.querySelector(".skills-progress > div");
var skillContainer = document.getElementById("skills-container");
window.addEventListener("scroll", checkScroll);
var animationDone = false;

function initaliseBar() {
    for (let bar of progressBar) {
        console.log("Bar Initalised");
        bar.style.width = 0 + '%';
    }
}

initaliseBar();

function fillBar() {
    for (let bar of progressBar) {
        let targetWidth = bar.getAttribte("data-bar-width");
        let currentWidth = 0;
        let inetrval = setInterval(function () {
            if (currentWidth > targetWidth) {
                clearInterval(inetrval);
                return;
            }
            currentWidth++;
            bar.style.width = currentWidth + '%';
        }, 5);
    }
}

function checkScroll() {

    // We have to check whether skill section is visible or not
    var coordinates = skillContainer.getBoundingClientRect();
    if (!animationDone && coordinates.top < window.innerHeight) {
        animationDone = true;
        console.log("Skills Section Visible");
        fillBar();
    }
}