document.addEventListener("DOMContentLoaded", function () {
    const searchButton = document.getElementById("searchButton");
  if (!searchButton) return; // exit if button doesn't exist

    searchButton.addEventListener("click", searchPosts);
});

function searchPosts() {
    const searchInput = document.getElementById("searchInput");
  if (!searchInput) return; // exit if input doesn't exist

    const input = searchInput.value.toLowerCase();
    const paragraphs = document.querySelectorAll("#blogContent p");

    paragraphs.forEach(p => {
    const text = p.textContent.toLowerCase();
    p.style.display = text.includes(input) ? "block" : "none";
    });
}
