const ingredientRegex = /([a-zA-Z0-9, .\/-]+)/i;

// Find the ingredient list from product page.
const ingredientsParagraph = document.querySelector('#product-description-5 > div > div > p:nth-child(1)');

if (ingredientsParagraph) {

    console.log("Ingredients header found.");

    if (ingredientsParagraph.textContent) {
        
        const ingredientText = ingredientsParagraph.textContent.trim();

        const match = ingredientText.match(ingredientRegex);

        if (match && match[0]) {
            const ingredients = match[0].split(',').map(item => item.trim());
            console.log("Ingredients found: ", ingredients);
            // Send the ingredients to a background script
            // chrome.runtime.sendMessage({<message content>});
        }
    }
}

