window.onload = function() {
    function getBreakfastItems() {
        const foodItem = '/menu/breakfast.json';
        console.log('Fetching from:', foodItem); // Check if path is correct
        fetch(foodItem)
            .then(function(response) {
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                return response.json();
            })
            .then(function(data) {
                console.log('Data:', data); // Log the data to ensure it's fetched correctly
                const foodCards = document.querySelector('.foodCards');
                data.forEach(function(item) {
                    const foodGridBox = document.createElement("div");
                    foodGridBox.classList.add('foodCard');
                    foodGridBox.innerHTML = `
                        <h3>${item.name}</h3>
                        <p>Price: ${item.cost}</p>
                        <p>Ingredients: ${item.ingredients}</p>
                        <p>Photo: ${item.photo}</p>
                    `;
                    foodCards.appendChild(foodGridBox);
                });
            })
            .catch(function(error) {
                console.error("Error fetching JSON data:", error);
            });
    }

    getBreakfastItems();
}
