// Wait for the DOM to fully load before running scripts
document.addEventListener('DOMContentLoaded', () => {
    
    // Select the button using its ID
    const exploreButton = document.getElementById('exploreBtn');

    // Add a click event listener to the button
    exploreButton.addEventListener('click', () => {
        alert("Welcome to VarsityPath! The navigation feature is coming soon.");
        
        // You can also change the text of the button when clicked
        exploreButton.textContent = "Loading...";
        exploreButton.style.backgroundColor = "#888";
    });

    console.log("VarsityPath app loaded successfully!");
});