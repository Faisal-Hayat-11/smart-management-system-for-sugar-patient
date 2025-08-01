//Module:2 sugar patient Friendly Food List

document.addEventListener("DOMContentLoaded", function () {
    const foodList = [
        { name: "Fatty fish", sugar: "No Sugar", img: "./images/fish.jpg" },
        { name: "Avocados", sugar: "0.66 grams of sugar per 100 grams", img: "./images/avocados.jpg" },
        { name: "Fried eggs", sugar: "0.4g Sugar", img: "./images/fried-eggs.jpeg" },
        { name: "Spinach", sugar: "0.4g Sugar", img: "./images/Spinach.jpg" },
        { name: "Walnuts", sugar: "2.6 g Sugar", img: "./images/walnuts.jpeg" },
        { name: "Greek yogurt", sugar: "3.2 g Sugar in 100 grams", img: "./images/greek-yogurt.jpg" },
        { name: "Extra-virgin olive oil", sugar: "No Sugar", img: "./images/oil.jpg" },
        { name: "Strawberries", sugar: "100 grams contains about 4.89 grams of sugar", img: "./images/straw.jpeg" },
        { name: "Beans", sugar: "2.2g Sugar in 100 grams", img: "./images/beans.jpg" },
        { name: "Shirataki noodles", sugar: "No Sugar", img: "./images/Shirataki.jpeg" }
    ];
  
    const searchInput = document.getElementById("searchInput");
    const searchResults = document.getElementById("foodSearchResults");
  
    function createFoodCard(food) {
        const card = document.createElement("div");
        card.className = "food-card";
  
        const img = document.createElement("img");
        img.src = food.img;
        img.alt = food.name;
        card.appendChild(img);
  
        const title = document.createElement("h2");
        title.textContent = food.name;
        card.appendChild(title);
  
        const sugarInfo = document.createElement("p");
        sugarInfo.textContent = food.sugar;
        card.appendChild(sugarInfo);
  
        return card;
    }
  
    function searchFood(query) {
        query = query.trim().toLowerCase();
        if (query === "") {
            searchResults.innerHTML = ""; // Clear results if empty input
            return;
        }
  
        const results = foodList.filter(food =>
            food.name.toLowerCase().includes(query) || food.sugar.toLowerCase().includes(query)
        );
  
        searchResults.innerHTML = ""; // Clear previous results
  
        if (results.length === 0) {
            searchResults.innerHTML = "<p>No matching foods found.</p>";
        } else {
            results.forEach(food => {
                searchResults.appendChild(createFoodCard(food));
            });
        }
    }
  
    searchInput.addEventListener("input", function () {
        searchFood(searchInput.value);
    });
  });