import { suggestionsArray } from './../suggestion.js';

const [searchInput, suggestionContainer, searchButton] = [...document.querySelectorAll('.search-input, .suggestion-container, .serch-icon')];
let suggestionItem;

searchInput.addEventListener('input', (event) => {
    const value = event.target.value.toLowerCase();

    // show and hide suggestions
    if (value !== "") {
        suggestionContainer.classList.add('active');
    } else {
        suggestionContainer.classList.remove('active');
    }

    // filter videos by input value
    const suggestion = suggestionsArray.filter(suggest =>
        suggest.toLowerCase().includes(value)
    );

    // Clear suggestion container before regenerate items
    suggestionContainer.innerHTML = "";

    // Function for send the result
    const sendResult = () => {
        suggestionContainer.innerHTML = "";
        searchInput.value = "";
        window.location.href = `search.html?q=${encodeURIComponent(JSON.stringify(value))}`;
    }

    // Generate suggestion items
    suggestion.slice(0, 14).forEach(data => {
        suggestionItem = document.createElement('li');
        suggestionItem.classList.add('suggestion-item');
        suggestionItem.innerHTML = `<img src="imgs/Icons/Header/Search.svg" alt="">
            <span>${data}</span>`
        suggestionContainer.appendChild(suggestionItem);

        suggestionItem.addEventListener("click", () => {
            sendResult();
        });
    })

    searchButton.addEventListener('click', (event) => {
        event.preventDefault();
        const searchValue = searchInput.value.trim();
        if (searchValue) {
            sendResult();
        }
    });
})
