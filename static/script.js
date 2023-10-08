const productDropdown = document.getElementById("productDropdown");
const submitBtn = document.getElementById("submitBtn");
const resultDiv = document.getElementById("result");

submitBtn.addEventListener("click", function() {
    const selectedProduct = productDropdown.value;

    // Make an API call to get credit card recommendations based on the selected product
    // For demonstration purposes, let's assume you have a function getCreditCardRecommendations(product)
    // that returns credit card recommendations as an array of objects

    const creditCardRecommendations = getCreditCardRecommendations(selectedProduct);

    // Display the recommendations in the resultDiv
    resultDiv.innerHTML = "<h2>Best Credit Card Recommendations:</h2>";
    if (creditCardRecommendations.length === 0) {
        resultDiv.innerHTML += "<p>No credit card recommendations available for this product.</p>";
    } else {
        resultDiv.innerHTML += "<ul>";
        creditCardRecommendations.forEach(card => {
            resultDiv.innerHTML += `<li>${card.name} - ${card.offers}</li>`;
        });
        resultDiv.innerHTML += "</ul>";
    }
});

function getCreditCardRecommendations(product) {
    // Implement logic to fetch credit card recommendations based on the selected product
    // This can be done by making an API call to a backend service or database
    // For demonstration purposes, return a sample array of credit card objects
    // Replace this with actual logic to get credit card recommendations

    // Sample data
    const recommendations = {
        "product1": [
            { "name": "Credit Card A", "offers": "Cashback rewards, No annual fee" },
            { "name": "Credit Card B", "offers": "Travel rewards, Low APR" }
        ],
        "product2": [
            { "name": "Credit Card C", "offers": "Points rewards, Bonus sign-up points" },
            { "name": "Credit Card D", "offers": "No foreign transaction fees, Travel insurance" }
        ],
        "product3": [
            { "name": "Credit Card E", "offers": "Dining rewards, Entertainment perks" },
            { "name": "Credit Card F", "offers": "Flexible redemption options, Premium benefits" }
        ]
    };

    return recommendations[product] || [];
}
