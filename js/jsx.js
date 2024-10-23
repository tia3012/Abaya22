function showModal(imageSrc, title, description) {
    var modal = document.getElementById("modal");
    modal.style.display = "flex"; // Show the modal

    var modalImg = modal.querySelector("img");
    modalImg.src = imageSrc;

    var modalTitle = modal.querySelector("h3");
    modalTitle.textContent = title;

    var modalDescription = modal.querySelector("p");
    modalDescription.textContent = description;
}

function closeModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "none"; // Hide the modal
}