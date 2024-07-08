window.onload = function() {
    function fetchMenuItems(jsonFile) {
        const foodItem = `/menu/${jsonFile}.json`;
        console.log('Fetching from:', foodItem);
        fetch(foodItem)
            .then(function(response) {
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                return response.json();
            })
            .then(function(data) {
                console.log('Data:', data); //checks if data is parsed
                const foodCards = document.querySelector('.foodCards');
                foodCards.innerHTML = ''; //clears grid when new tab is selected
                data.forEach(function(item) {//fills grid depending on how many objects are in the json file
                    const foodGridBox = document.createElement("div");
                    foodGridBox.classList.add('foodCard');
                    foodGridBox.innerHTML = `
                        <h2>${item.name}</h2>
                        <p>${item.cost}</p>
                        <p>${item.ingredients}</p>
                        <p>Photo: ${item.photo}</p>
                    `;
                    foodCards.appendChild(foodGridBox);
                });
            })
            .catch(function(error) {
                console.error("Error fetching JSON data:", error);
            });
    }

    //keeps tabs highlighted
    const buttons = document.querySelectorAll('.itemGroups button');
    function handleButtonClick(event) {
        buttons.forEach(function(button) {
            button.classList.remove('highlighted');
        });
        event.target.classList.add('highlighted');
    }
    buttons.forEach(function(button) {
        button.addEventListener('click', handleButtonClick);
    });

    // changes food items based off tab selected
    document.querySelector('.breakfastItems').addEventListener('click', function() {
        fetchMenuItems('breakfast');
    });

    document.querySelector('.dinnerPlates').addEventListener('click', function() {
        fetchMenuItems('dinnerPlates');
    });

    document.querySelector('.tacosBurritos').addEventListener('click', function() {
        fetchMenuItems('tacosBurritos');
    });

    document.querySelector('.seafood').addEventListener('click', function() {
        fetchMenuItems('seafood');
    });

    document.querySelector('.appetizers').addEventListener('click', function() {
        fetchMenuItems('appetizers');
    });

    document.querySelector('.entrees').addEventListener('click', function() {
        fetchMenuItems('entrees');
    });
    
    document.querySelector('.kidMenu').addEventListener('click', function() {
        fetchMenuItems('kidMenu');
    });

    // Load the breakfast items by default on page load
    fetchMenuItems('breakfast');
}
