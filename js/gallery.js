// Get the modal
var modal = document.getElementById("full-gallery");

// Get the images in the gallery-preview
var previewImages = document.querySelectorAll(".gallery-preview img");

// When any preview image is clicked, show the modal
previewImages.forEach(function(image) {
    image.addEventListener('click', function() {
        modal.style.display = "block";
    });
});

// Get the <span> element that closes the modal
var closeBtn = document.querySelector(".close");

// When the close button is clicked, hide the modal
closeBtn.onclick = function() {
    modal.style.display = "none";
}

// Close the modal when user clicks outside of the modal content
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
