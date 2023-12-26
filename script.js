
document.addEventListener('DOMContentLoaded', function () {
    // Get a reference to all clickable paths
    var clickableStars = document.querySelectorAll('.svg2 path');

    // Add a click event listener to each star
    clickableStars.forEach(function (star) {
        star.addEventListener('click', function () {
            // Toggle the "clicked" class to change the fill color to yellow
            star.classList.toggle('clicked');
        });
    });
});