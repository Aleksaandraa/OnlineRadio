document.addEventListener("DOMContentLoaded", function() {
    const searchButton = document.getElementById("search-button");
    const searchInput = document.getElementById("search-input");
    const content = document.querySelector(".content");

    searchButton.addEventListener("click", function() {
        const searchText = searchInput.value.toLowerCase();
        const paragraphs = content.getElementsByTagName("p");

        // Remove previous highlights
        for (let p of paragraphs) {
            p.innerHTML = p.textContent;
        }

        // Highlight new search terms
        for (let p of paragraphs) {
            const text = p.textContent.toLowerCase();
            if (text.includes(searchText)) {
                const regex = new RegExp(`(${searchText})`, "gi");
                p.innerHTML = p.textContent.replace(regex, "<span class='highlight'>$1</span>");
            }
        }
    });
});