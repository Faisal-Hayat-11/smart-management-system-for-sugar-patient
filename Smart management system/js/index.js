// Sidebar for mobile

function showSidebar() {
    const sidebar = document.querySelector('.sidebar');
        sidebar.style.display = 'flex';
}

function hideSidebar() {
    const sidebar = document.querySelector('.sidebar');
        sidebar.style.display = 'none';
}

// Module 1: Health Predictor

document.addEventListener("DOMContentLoaded", function() {
    // Attach the handleSubmit function to the form's submit event
    document.getElementById("predictionForm").addEventListener("submit", handleSubmit);

    function handleSubmit(event) {
        event.preventDefault();

        // Retrieve input values from the form fields
        const calories = parseFloat(document.getElementById('calories').value);
        const activity = parseFloat(document.getElementById('activity').value);
        const sleep = parseFloat(document.getElementById('sleep').value);
        const weight = parseFloat(document.getElementById('weight').value);

        // Validate that all inputs are valid numbers
        if ([calories, activity, sleep, weight].some(val => isNaN(val))) {
            alert("Please enter valid numeric values for all fields.");
            return;
        }

        // Define the optimal sleep value (in hours)
        const optimalSleep = 8; 

        let predictedSugar = 100 +
                             (calories / 50) -
                             (activity / 10) +
                             ((optimalSleep - sleep) * 2) +
                             (weight / 10);

        // Round the result to one decimal place
        predictedSugar = parseFloat(predictedSugar.toFixed(1));

        // Display the numerical result in the span with id "result"
        const resultElement = document.getElementById('result');
        resultElement.textContent = `${predictedSugar}`;

        // Color-code the result based on typical clinical ranges
        if (predictedSugar < 90) {
            resultElement.style.color = "blue";   // Low blood sugar
        } else if (predictedSugar >= 90 && predictedSugar <= 130) {
            resultElement.style.color = "green";  // Healthy range
        } else {
            resultElement.style.color = "red";    // High blood sugar
        }

        // Generate and display personalized health advice
        generateAdvice(predictedSugar);
    }

    function generateAdvice(sugarLevel) {
        let advice = "";
        if (sugarLevel < 90) {
            advice = "Your blood sugar appears to be low. Consider a light snack rich in natural sugars (like a piece of fruit) and recheck your levels soon. If low readings continue, discuss with your healthcare provider.";
        } else if (sugarLevel >= 90 && sugarLevel <= 125) {
            advice = "Your blood sugar is within a healthy range. Continue maintaining a balanced diet, regular exercise, and consistent sleep routines to stay in this range.";
        } else {
            advice = "Your blood sugar is high. It may help to reduce high-calorie or high-sugar foods and increase your physical activity. If high readings persist, please consult your healthcare provider.";
        }
        document.getElementById('healthAdvice').textContent = advice;
    }
});

// Module 2: Recommend dier plan

document.addEventListener("DOMContentLoaded", function () {
    const caloriesInput = document.getElementById("caloriesInput");
    const sugarLevelInput = document.getElementById("sugarLevelInput");
    const generateDietButton = document.getElementById("generateDietButton");
    const dietPlanResults = document.getElementById("dietPlanResults");

    const categoryDescriptions = {
        "High-Fiber Foods": "Choose whole grains like oats, quinoa, and whole wheat. Non-starchy vegetables like spinach, kale, and broccoli are great choices due to their high fiber content and low glycemic index.",
        "Lean Proteins": "Opt for fish (salmon, sardines) and lean poultry. Beans, legumes, tofu, and low-fat dairy are protein-rich and help control blood sugar.",
        "Low-Glycemic Fruits": "Enjoy berries (blueberries, strawberries), apples, and pears in moderate portions. Pair them with protein or healthy fats to prevent spikes.",
        "Healthy Fats": "Include sources like avocados, nuts, seeds, and olive oil to support overall health without spiking blood sugar.",
        "Complex Carbohydrates": "Opt for whole grains, legumes, and starchy vegetables that provide sustained energy and fiber.",
        "Low-Calorie Vegetables": "Focus on non-starchy vegetables such as spinach, broccoli, and bell peppers, which are nutrient-rich and low in calories.",
        "Hydration & Beverages": "Drink plenty of water and unsweetened herbal teas. Avoid sugary beverages.",
        "Fiber & Probiotics": "Incorporate foods like yogurt, kefir, and fermented vegetables to support gut health and blood sugar regulation.",
        "Antioxidant-Rich Foods": "Add berries, dark leafy greens, and nuts to help combat oxidative stress and support overall health.",
        "Omega-3 Rich Foods": "Include fatty fish, flaxseeds, and chia seeds to help reduce inflammation and support heart health."
    };

    // Decision tree represented as a nested object.
    // Each node has a condition function and branches for yes/no outcomes.
    const decisionTree = {
        condition: (sugarLevel, calories) => sugarLevel > 140,
        yes: {
            categories: ["High-Fiber Foods", "Low-Calorie Vegetables", "Hydration & Beverages"],
            next: {
                condition: (sugarLevel, calories) => calories < 1500,
                yes: { additional: ["Complex Carbohydrates"] },
                no: { additional: [] }
            }
        },
        no: {
            condition: (sugarLevel, calories) => sugarLevel > 100,
            yes: {
                categories: ["Lean Proteins", "Complex Carbohydrates", "Fiber & Probiotics"],
                next: {
                    condition: (sugarLevel, calories) => calories >= 2500,
                    yes: { additional: ["Lean Proteins"] },
                    no: { additional: [] }
                }
            },
            no: {
                categories: ["Low-Glycemic Fruits", "Healthy Fats", "Omega-3 Rich Foods", "Antioxidant-Rich Foods"],
                next: {
                    condition: (sugarLevel, calories) => calories < 1500,
                    yes: { additional: ["Complex Carbohydrates"] },
                    no: { additional: [] }
                }
            }
        }
    };

    // Recursively traverse the decision tree node to get categories.
    function traverseTree(node, sugarLevel, calories) {
        let result = [];
        if (node.categories) {
            result = result.concat(node.categories);
        }
        if (node.next) {
            if (node.next.condition(sugarLevel, calories)) {
                if (node.next.yes.additional) {
                    result = result.concat(node.next.yes.additional);
                }
            } else {
                if (node.next.no.additional) {
                    result = result.concat(node.next.no.additional);
                }
            }
        }
        return result;
    }

    // Decide diet categories using the decision tree structure.
    function decideDietCategories(sugarLevel, calories) {
        if (decisionTree.condition(sugarLevel, calories)) {
            return traverseTree(decisionTree.yes, sugarLevel, calories);
        } else {
            if (decisionTree.no.condition(sugarLevel, calories)) {
                return traverseTree(decisionTree.no.yes, sugarLevel, calories);
            } else {
                return traverseTree(decisionTree.no.no, sugarLevel, calories);
            }
        }
    }

    function displayDietPlan(categories) {
        dietPlanResults.innerHTML = "<h3>Your Suggested Diet Plan</h3>";
        if (categories.length === 0) {
            dietPlanResults.innerHTML += "<p>No suitable diet plan found. Try adjusting your input.</p>";
            return;
        }
        // Remove duplicate categories.
        const uniqueCategories = [...new Set(categories)];
        uniqueCategories.forEach(category => {
            const card = document.createElement("div");
            card.className = "recommendation-card";
            const title = document.createElement("h2");
            title.textContent = category;
            card.appendChild(title);
            const description = document.createElement("p");
            description.textContent = categoryDescriptions[category];
            card.appendChild(description);
            dietPlanResults.appendChild(card);
        });
    }

    generateDietButton.addEventListener("click", function () {
        const calories = parseInt(caloriesInput.value);
        const sugarLevel = parseInt(sugarLevelInput.value);
        if (isNaN(calories) || isNaN(sugarLevel) || calories <= 0 || sugarLevel <= 0) {
            dietPlanResults.innerHTML = "<p>Please enter valid values.</p>";
            return;
        }
        const categories = decideDietCategories(sugarLevel, calories);
        displayDietPlan(categories);
    });
});


// Module No # 3 Nutrient Data

const foodCombinations = {
    pre: {
        breakfast: {
            cheap: {
                sweet: ["Oats Porridge + Dates (Pre)"],
                savory: ["Boiled Egg + Brown Bread (Pre)"],
                spicy: ["Besan Chilla + Mint Chutney (Pre)"],
                mild: ["Vegetable Sandwich (Pre)"]
            },
            costly: {
                sweet: ["Chia Pudding + Almond Milk (Pre)"],
                savory: ["Smoked Turkey + Multigrain Toast (Pre)"],
                spicy: ["Masala Oats (Pre)"],
                mild: ["Greek Yogurt + Berries (Pre)"]
            }
        },
        lunch: {
            cheap: {
                sweet: ["Fruit Salad + Nuts (Pre)"],
                savory: ["Lentil Soup + Brown Rice (Pre)"],
                spicy: ["Vegetable Pulao + Yogurt (Pre)"],
                mild: ["Daal + Whole Wheat Roti (Pre)"]
            },
            costly: {
                sweet: ["Quinoa Salad + Pomegranate (Pre)"],
                savory: ["Grilled Salmon + Quinoa (Pre)"],
                spicy: ["Avocado Salad + Grilled Chicken (Pre)"],
                mild: ["Grilled Steak + Quinoa + Sautéed Mushrooms (Pre)"]
            }
        },
        dinner: {
            cheap: {
                sweet: ["Apple Salad + Walnuts (Pre)"],
                savory: ["Vegetable Khichdi (Pre)"],
                spicy: ["Spicy Tofu Stir Fry (Pre)"],
                mild: ["Lentil Soup + Brown Bread (Pre)"]
            },
            costly: {
                sweet: ["Greek Yogurt + Blueberries (Pre)"],
                savory: ["Grilled Chicken + Steamed Vegetables (Pre)"],
                spicy: ["Spicy Grilled Fish + Quinoa (Pre)"],
                mild: ["Baked Salmon + Steamed Veggies (Pre)"]
            }
        }
    },
    type1: {
        breakfast: {
            cheap: {
                sweet: ["Fruit Salad + Nuts (Type 1)"],
                savory: ["Egg Omelet + Whole Wheat Toast (Type 1)"],
                spicy: ["Masala Oats (Type 1)"],
                mild: ["Boiled Egg + Brown Bread (Type 1)"]
            },
            costly: {
                sweet: ["Chia Seed Pudding + Berries (Type 1)"],
                savory: ["Smoked Salmon + Multigrain Bread (Type 1)"],
                spicy: ["Avocado Toast (Type 1)"],
                mild: ["Greek Yogurt + Berries (Type 1)"]
            }
        },
        lunch: {
            cheap: {
                sweet: ["Sweet Corn Salad (Type 1)"],
                savory: ["Daal (Masoor) + Brown Rice (Type 1)"],
                spicy: ["Vegetable Pulao + Yogurt (Type 1)"],
                mild: ["Lentil Soup + Brown Rice (Type 1)"]
            },
            costly: {
                sweet: ["Avocado Salad + Almonds (Type 1)"],
                savory: ["Grilled Steak + Quinoa + Sautéed Mushrooms (Type 1)"],
                spicy: ["Grilled Chicken + Quinoa (Type 1)"],
                mild: ["Grilled Salmon + Steamed Broccoli (Type 1)"]
            }
        },
        dinner: {
            cheap: {
                sweet: ["Berry Salad + Cottage Cheese (Type 1)"],
                savory: ["Vegetable Soup + Brown Bread (Type 1)"],
                spicy: ["Spicy Grilled Paneer (Type 1)"],
                mild: ["Boiled Lentils + Quinoa (Type 1)"]
            },
            costly: {
                sweet: ["Berries + Almond Yogurt (Type 1)"],
                savory: ["Grilled Chicken Breast + Veggies (Type 1)"],
                spicy: ["Spicy Tofu Stir Fry (Type 1)"],
                mild: ["Grilled Fish + Avocado Salad (Type 1)"]
            }
        }
    },
    type2: {
        breakfast: {
            cheap: {
                sweet: ["Oats Porridge + Dates (Type 2)"],
                savory: ["Besan Chilla + Mint Chutney (Type 2)"],
                spicy: ["Poha with Peanuts (Type 2)"],
                mild: ["Vegetable Sandwich (Type 2)"]
            },
            costly: {
                sweet: ["Chia Seed Pudding + Coconut Milk (Type 2)"],
                savory: ["Smoked Turkey + Multigrain Toast (Type 2)"],
                spicy: ["Spicy Avocado Toast (Type 2)"],
                mild: ["Greek Yogurt + Berries (Type 2)"]
            }
        },
        lunch: {
            cheap: {
                sweet: ["Fruit Salad (Type 2)"],
                savory: ["Vegetable Pulao (Brown Rice) + Yogurt (Type 2)"],
                spicy: ["Bhindi (Okra) + Chapati (Type 2)"],
                mild: ["Lentil Soup + Brown Rice (Type 2)"]
            },
            costly: {
                sweet: ["Avocado Salad + Grilled Chicken (Type 2)"],
                savory: ["Grilled Chicken Breast + Quinoa (Type 2)"],
                spicy: ["Baked Lamb Chops + Steamed Veggies (Type 2)"],
                mild: ["Grilled Fish + Green Salad (Type 2)"]
            }
        },
        dinner: {
            cheap: {
                sweet: ["Apple + Peanut Butter (Type 2)"],
                savory: ["Vegetable Soup + Whole Wheat Toast (Type 2)"],
                spicy: ["Spicy Vegetable Curry (Type 2)"],
                mild: ["Grilled Paneer + Salad (Type 2)"]
            },
            costly: {
                sweet: ["Greek Yogurt + Strawberries (Type 2)"],
                savory: ["Grilled Chicken + Asparagus (Type 2)"],
                spicy: ["Spicy Grilled Prawns (Type 2)"],
                mild: ["Baked Fish + Steamed Veggies (Type 2)"]
            }
        }
    },
    advanced: {
        breakfast: {
            cheap: {
                sweet: ["Chia Pudding + Almond Milk (Advanced)"],
                savory: ["Besan Chilla + Yogurt (Advanced)"],
                spicy: ["Masala Oats (Advanced)"],
                mild: ["Boiled Egg + Brown Bread (Advanced)"]
            },
            costly: {
                sweet: ["Egg White Scramble + Smoked Turkey (Advanced)"],
                savory: ["Grilled Tofu Sandwich (Advanced)"],
                spicy: ["Spicy Mushroom Toast (Advanced)"],
                mild: ["Avocado Toast (Advanced)"]
            }
        },
        lunch: {
            cheap: {
                sweet: ["Fruit Salad + Lemon (Advanced)"],
                savory: ["Mixed Daal + Roti (Advanced)"],
                spicy: ["Vegetable Curry + Brown Rice (Advanced)"],
                mild: ["Boiled Chickpeas + Lemon Juice (Advanced)"]
            },
            costly: {
                sweet: ["Pomegranate Salad + Feta (Advanced)"],
                savory: ["Grilled Sea Bass + Steamed Spinach (Advanced)"],
                spicy: ["Ribeye Steak + Roasted Brussels Sprouts (Advanced)"],
                mild: ["Grilled Chicken + Avocado Salad (Advanced)"]
            }
        },
        dinner: {
            cheap: {
                sweet: ["Chia Pudding + Dates (Advanced)"],
                savory: ["Vegetable Soup + Lentil Salad (Advanced)"],
                spicy: ["Spicy Paneer Curry (Advanced)"],
                mild: ["Brown Rice + Grilled Vegetables (Advanced)"]
            },
            costly: {
                sweet: ["Berries + Almond Yogurt (Advanced)"],
                savory: ["Grilled Salmon + Quinoa (Advanced)"],
                spicy: ["Spicy Grilled Chicken + Asparagus (Advanced)"],
                mild: ["Grilled Fish + Avocado Salad (Advanced)"]
            }
        }
    }
};


const foodNutrientData = {
    // Pre - Breakfast
    "Oats Porridge + Dates (Pre)": { Calories: 350, Carbohydrates: 60, Protein: 10, Fat: 5, Fiber: 7, Sugar: 12, Calcium: 100, Iron: 3, Magnesium: 90, Potassium: 450 },
    "Boiled Egg + Brown Bread (Pre)": { Calories: 250, Carbohydrates: 30, Protein: 15, Fat: 8, Fiber: 5, Sugar: 3, Calcium: 80, Iron: 2, Magnesium: 40, Potassium: 200 },
    "Besan Chilla + Mint Chutney (Pre)": { Calories: 280, Carbohydrates: 40, Protein: 12, Fat: 6, Fiber: 6, Sugar: 2, Calcium: 60, Iron: 3, Magnesium: 50, Potassium: 300 },
    "Vegetable Sandwich (Pre)": { Calories: 300, Carbohydrates: 45, Protein: 10, Fat: 7, Fiber: 5, Sugar: 4, Calcium: 100, Iron: 2, Magnesium: 40, Potassium: 250 },
    "Chia Pudding + Almond Milk (Pre)": { Calories: 320, Carbohydrates: 40, Protein: 12, Fat: 10, Fiber: 10, Sugar: 5, Calcium: 150, Iron: 3, Magnesium: 80, Potassium: 300 },
    "Smoked Turkey + Multigrain Toast (Pre)": { Calories: 350, Carbohydrates: 35, Protein: 25, Fat: 8, Fiber: 4, Sugar: 2, Calcium: 100, Iron: 2, Magnesium: 60, Potassium: 350 },
    "Masala Oats (Pre)": { Calories: 320, Carbohydrates: 50, Protein: 10, Fat: 6, Fiber: 7, Sugar: 3, Calcium: 80, Iron: 2, Magnesium: 90, Potassium: 400 },
    "Greek Yogurt + Berries (Pre)": { Calories: 200, Carbohydrates: 30, Protein: 15, Fat: 3, Fiber: 5, Sugar: 8, Calcium: 200, Iron: 1, Magnesium: 50, Potassium: 300 },

    // Pre - Lunch
    "Fruit Salad + Nuts (Pre)": { Calories: 280, Carbohydrates: 45, Protein: 7, Fat: 8, Fiber: 6, Sugar: 25, Calcium: 100, Iron: 2, Magnesium: 60, Potassium: 350 },
    "Lentil Soup + Brown Rice (Pre)": { Calories: 400, Carbohydrates: 65, Protein: 18, Fat: 5, Fiber: 10, Sugar: 2, Calcium: 80, Iron: 4, Magnesium: 90, Potassium: 450 },
    "Vegetable Pulao + Yogurt (Pre)": { Calories: 420, Carbohydrates: 70, Protein: 12, Fat: 10, Fiber: 7, Sugar: 5, Calcium: 120, Iron: 3, Magnesium: 80, Potassium: 400 },
    "Daal + Whole Wheat Roti (Pre)": { Calories: 350, Carbohydrates: 55, Protein: 15, Fat: 6, Fiber: 8, Sugar: 3, Calcium: 80, Iron: 3, Magnesium: 70, Potassium: 350 },
    "Quinoa Salad + Pomegranate (Pre)": { Calories: 350, Carbohydrates: 55, Protein: 12, Fat: 7, Fiber: 8, Sugar: 8, Calcium: 90, Iron: 3, Magnesium: 100, Potassium: 400 },
    "Grilled Salmon + Quinoa (Pre)": { Calories: 450, Carbohydrates: 45, Protein: 30, Fat: 12, Fiber: 5, Sugar: 2, Calcium: 80, Iron: 3, Magnesium: 90, Potassium: 500 },
    "Avocado Salad + Grilled Chicken (Pre)": { Calories: 400, Carbohydrates: 30, Protein: 35, Fat: 15, Fiber: 7, Sugar: 3, Calcium: 70, Iron: 2, Magnesium: 80, Potassium: 450 },
    "Grilled Steak + Quinoa + Sautéed Mushrooms (Pre)": { Calories: 550, Carbohydrates: 45, Protein: 45, Fat: 18, Fiber: 6, Sugar: 2, Calcium: 70, Iron: 4, Magnesium: 90, Potassium: 500 },

    // Pre - Dinner
    "Apple Salad + Walnuts (Pre)": { Calories: 250, Carbohydrates: 40, Protein: 5, Fat: 8, Fiber: 6, Sugar: 20, Calcium: 60, Iron: 1, Magnesium: 50, Potassium: 300 },
    "Vegetable Khichdi (Pre)": { Calories: 350, Carbohydrates: 60, Protein: 12, Fat: 6, Fiber: 7, Sugar: 2, Calcium: 60, Iron: 2, Magnesium: 70, Potassium: 350 },
    "Spicy Tofu Stir Fry (Pre)": { Calories: 300, Carbohydrates: 35, Protein: 18, Fat: 10, Fiber: 6, Sugar: 3, Calcium: 100, Iron: 3, Magnesium: 70, Potassium: 400 },
    "Lentil Soup + Brown Bread (Pre)": { Calories: 300, Carbohydrates: 50, Protein: 15, Fat: 5, Fiber: 8, Sugar: 2, Calcium: 80, Iron: 3, Magnesium: 60, Potassium: 350 },
    "Greek Yogurt + Blueberries (Pre)": { Calories: 220, Carbohydrates: 35, Protein: 15, Fat: 3, Fiber: 5, Sugar: 10, Calcium: 200, Iron: 1, Magnesium: 50, Potassium: 300 },
    "Grilled Chicken + Steamed Vegetables (Pre)": { Calories: 400, Carbohydrates: 30, Protein: 35, Fat: 8, Fiber: 5, Sugar: 3, Calcium: 70, Iron: 2, Magnesium: 70, Potassium: 400 },
    "Spicy Grilled Fish + Quinoa (Pre)": { Calories: 420, Carbohydrates: 45, Protein: 35, Fat: 10, Fiber: 5, Sugar: 2, Calcium: 70, Iron: 3, Magnesium: 80, Potassium: 450 },
    "Baked Salmon + Steamed Veggies (Pre)": { Calories: 450, Carbohydrates: 30, Protein: 40, Fat: 15, Fiber: 5, Sugar: 3, Calcium: 80, Iron: 3, Magnesium: 80, Potassium: 500 },

    // Type 1 - Breakfast
    "Fruit Salad + Nuts (Type 1)": { Calories: 300, Carbohydrates: 45, Protein: 7, Fat: 12, Fiber: 6, Sugar: 20, Calcium: 60, Iron: 2, Magnesium: 70, Potassium: 400 },
    "Egg Omelet + Whole Wheat Toast (Type 1)": { Calories: 350, Carbohydrates: 35, Protein: 22, Fat: 15, Fiber: 4, Sugar: 3, Calcium: 120, Iron: 3, Magnesium: 50, Potassium: 350 },
    "Masala Oats (Type 1)": { Calories: 320, Carbohydrates: 50, Protein: 10, Fat: 6, Fiber: 7, Sugar: 2, Calcium: 60, Iron: 3, Magnesium: 80, Potassium: 400 },
    "Boiled Egg + Brown Bread (Type 1)": { Calories: 280, Carbohydrates: 30, Protein: 15, Fat: 10, Fiber: 3, Sugar: 2, Calcium: 70, Iron: 2, Magnesium: 40, Potassium: 250 },
    "Chia Seed Pudding + Berries (Type 1)": { Calories: 350, Carbohydrates: 40, Protein: 10, Fat: 15, Fiber: 9, Sugar: 8, Calcium: 150, Iron: 3, Magnesium: 80, Potassium: 300 },
    "Smoked Salmon + Multigrain Bread (Type 1)": { Calories: 400, Carbohydrates: 35, Protein: 30, Fat: 12, Fiber: 5, Sugar: 2, Calcium: 80, Iron: 2, Magnesium: 60, Potassium: 350 },
    "Avocado Toast (Type 1)": { Calories: 360, Carbohydrates: 40, Protein: 10, Fat: 18, Fiber: 8, Sugar: 2, Calcium: 60, Iron: 2, Magnesium: 70, Potassium: 450 },
    "Greek Yogurt + Berries (Type 1)": { Calories: 200, Carbohydrates: 30, Protein: 15, Fat: 3, Fiber: 5, Sugar: 8, Calcium: 200, Iron: 1, Magnesium: 50, Potassium: 300 },

    // Type 1 - Lunch
    "Sweet Corn Salad (Type 1)": { Calories: 250, Carbohydrates: 45, Protein: 8, Fat: 4, Fiber: 5, Sugar: 6, Calcium: 50, Iron: 2, Magnesium: 40, Potassium: 300 },
    "Daal (Masoor) + Brown Rice (Type 1)": { Calories: 400, Carbohydrates: 65, Protein: 18, Fat: 5, Fiber: 10, Sugar: 2, Calcium: 80, Iron: 4, Magnesium: 90, Potassium: 450 },
    "Vegetable Pulao + Yogurt (Type 1)": { Calories: 420, Carbohydrates: 70, Protein: 12, Fat: 10, Fiber: 7, Sugar: 5, Calcium: 120, Iron: 3, Magnesium: 80, Potassium: 400 },
    "Lentil Soup + Brown Rice (Type 1)": { Calories: 400, Carbohydrates: 65, Protein: 18, Fat: 5, Fiber: 10, Sugar: 2, Calcium: 80, Iron: 4, Magnesium: 90, Potassium: 450 },
    "Avocado Salad + Almonds (Type 1)": { Calories: 350, Carbohydrates: 25, Protein: 10, Fat: 22, Fiber: 7, Sugar: 3, Calcium: 70, Iron: 3, Magnesium: 90, Potassium: 400 },
    "Grilled Steak + Quinoa + Sautéed Mushrooms (Type 1)": { Calories: 600, Carbohydrates: 45, Protein: 50, Fat: 18, Fiber: 6, Sugar: 2, Calcium: 80, Iron: 5, Magnesium: 80, Potassium: 550 },
    "Grilled Chicken + Quinoa (Type 1)": { Calories: 450, Carbohydrates: 40, Protein: 40, Fat: 8, Fiber: 5, Sugar: 2, Calcium: 80, Iron: 3, Magnesium: 80, Potassium: 500 },
    "Grilled Salmon + Steamed Broccoli (Type 1)": { Calories: 400, Carbohydrates: 25, Protein: 45, Fat: 12, Fiber: 5, Sugar: 2, Calcium: 80, Iron: 2, Magnesium: 60, Potassium: 450 },

    // Type 1 - Dinner
    "Berry Salad + Cottage Cheese (Type 1)": { Calories: 300, Carbohydrates: 35, Protein: 12, Fat: 10, Fiber: 5, Sugar: 15, Calcium: 120, Iron: 2, Magnesium: 50, Potassium: 300 },
    "Vegetable Soup + Brown Bread (Type 1)": { Calories: 250, Carbohydrates: 45, Protein: 8, Fat: 5, Fiber: 7, Sugar: 6, Calcium: 80, Iron: 2, Magnesium: 60, Potassium: 300 },
    "Spicy Grilled Paneer (Type 1)": { Calories: 350, Carbohydrates: 20, Protein: 18, Fat: 20, Fiber: 4, Sugar: 2, Calcium: 200, Iron: 2, Magnesium: 60, Potassium: 300 },
    "Boiled Lentils + Quinoa (Type 1)": { Calories: 400, Carbohydrates: 60, Protein: 20, Fat: 5, Fiber: 10, Sugar: 2, Calcium: 80, Iron: 3, Magnesium: 80, Potassium: 400 },
    "Berries + Almond Yogurt (Type 1)": { Calories: 250, Carbohydrates: 35, Protein: 10, Fat: 8, Fiber: 5, Sugar: 15, Calcium: 150, Iron: 2, Magnesium: 60, Potassium: 300 },
    "Grilled Chicken Breast + Veggies (Type 1)": { Calories: 400, Carbohydrates: 25, Protein: 40, Fat: 8, Fiber: 5, Sugar: 2, Calcium: 60, Iron: 2, Magnesium: 60, Potassium: 400 },
    "Spicy Tofu Stir Fry (Type 1)": { Calories: 350, Carbohydrates: 30, Protein: 25, Fat: 12, Fiber: 6, Sugar: 4, Calcium: 120, Iron: 3, Magnesium: 80, Potassium: 400 },
    "Grilled Fish + Avocado Salad (Type 1)": { Calories: 400, Carbohydrates: 25, Protein: 40, Fat: 12, Fiber: 6, Sugar: 2, Calcium: 70, Iron: 3, Magnesium: 70, Potassium: 450 },

    // Type 2 - Breakfast
    "Oats Porridge + Dates (Type 2)": { Calories: 350, Carbohydrates: 60, Protein: 10, Fat: 5, Fiber: 7, Sugar: 12, Calcium: 100, Iron: 3, Magnesium: 90, Potassium: 450 },
    "Besan Chilla + Mint Chutney (Type 2)": { Calories: 280, Carbohydrates: 40, Protein: 12, Fat: 6, Fiber: 6, Sugar: 2, Calcium: 60, Iron: 3, Magnesium: 50, Potassium: 300 },
    "Poha with Peanuts (Type 2)": { Calories: 320, Carbohydrates: 55, Protein: 8, Fat: 10, Fiber: 5, Sugar: 2, Calcium: 40, Iron: 2, Magnesium: 60, Potassium: 300 },
    "Vegetable Sandwich (Type 2)": { Calories: 300, Carbohydrates: 45, Protein: 10, Fat: 7, Fiber: 5, Sugar: 4, Calcium: 100, Iron: 2, Magnesium: 40, Potassium: 250 },
    "Chia Seed Pudding + Coconut Milk (Type 2)": { Calories: 350, Carbohydrates: 35, Protein: 10, Fat: 15, Fiber: 9, Sugar: 5, Calcium: 120, Iron: 3, Magnesium: 80, Potassium: 300 },
    "Smoked Turkey + Multigrain Toast (Type 2)": { Calories: 350, Carbohydrates: 35, Protein: 25, Fat: 8, Fiber: 4, Sugar: 2, Calcium: 100, Iron: 2, Magnesium: 60, Potassium: 350 },
    "Spicy Avocado Toast (Type 2)": { Calories: 360, Carbohydrates: 40, Protein: 10, Fat: 18, Fiber: 8, Sugar: 2, Calcium: 60, Iron: 2, Magnesium: 70, Potassium: 400 },
    "Greek Yogurt + Berries (Type 2)": { Calories: 200, Carbohydrates: 30, Protein: 15, Fat: 3, Fiber: 5, Sugar: 8, Calcium: 200, Iron: 1, Magnesium: 50, Potassium: 300 },

    // Type 2 - Lunch
    "Fruit Salad (Type 2)": { Calories: 200, Carbohydrates: 45, Protein: 3, Fat: 2, Fiber: 6, Sugar: 25, Calcium: 50, Iron: 1, Magnesium: 40, Potassium: 350 },
    "Vegetable Pulao (Brown Rice) + Yogurt (Type 2)": { Calories: 420, Carbohydrates: 70, Protein: 12, Fat: 10, Fiber: 7, Sugar: 5, Calcium: 120, Iron: 3, Magnesium: 80, Potassium: 400 },
    "Bhindi (Okra) + Chapati (Type 2)": { Calories: 380, Carbohydrates: 55, Protein: 10, Fat: 12, Fiber: 8, Sugar: 4, Calcium: 60, Iron: 3, Magnesium: 70, Potassium: 350 },
    "Lentil Soup + Brown Rice (Type 2)": { Calories: 400, Carbohydrates: 65, Protein: 18, Fat: 5, Fiber: 10, Sugar: 2, Calcium: 80, Iron: 4, Magnesium: 90, Potassium: 450 },
    "Avocado Salad + Grilled Chicken (Type 2)": { Calories: 400, Carbohydrates: 30, Protein: 35, Fat: 15, Fiber: 7, Sugar: 3, Calcium: 70, Iron: 2, Magnesium: 80, Potassium: 450 },
    "Grilled Chicken Breast + Quinoa (Type 2)": { Calories: 450, Carbohydrates: 40, Protein: 40, Fat: 8, Fiber: 5, Sugar: 2, Calcium: 80, Iron: 3, Magnesium: 80, Potassium: 500 },
    "Baked Lamb Chops + Steamed Veggies (Type 2)": { Calories: 500, Carbohydrates: 25, Protein: 45, Fat: 22, Fiber: 5, Sugar: 2, Calcium: 70, Iron: 4, Magnesium: 80, Potassium: 500 },
    "Grilled Fish + Green Salad (Type 2)": { Calories: 350, Carbohydrates: 20, Protein: 35, Fat: 8, Fiber: 5, Sugar: 2, Calcium: 60, Iron: 3, Magnesium: 70, Potassium: 450 },

    // Type 2 - Dinner
    "Apple + Peanut Butter (Type 2)": { Calories: 300, Carbohydrates: 35, Protein: 8, Fat: 15, Fiber: 7, Sugar: 25, Calcium: 40, Iron: 1, Magnesium: 50, Potassium: 350 },
    "Vegetable Soup + Whole Wheat Toast (Type 2)": { Calories: 250, Carbohydrates: 45, Protein: 8, Fat: 5, Fiber: 7, Sugar: 6, Calcium: 80, Iron: 2, Magnesium: 60, Potassium: 300 },
    "Spicy Vegetable Curry (Type 2)": { Calories: 300, Carbohydrates: 50, Protein: 10, Fat: 8, Fiber: 8, Sugar: 5, Calcium: 60, Iron: 2, Magnesium: 60, Potassium: 350 },
    "Grilled Paneer + Salad (Type 2)": { Calories: 350, Carbohydrates: 25, Protein: 18, Fat: 20, Fiber: 5, Sugar: 3, Calcium: 200, Iron: 2, Magnesium: 60, Potassium: 300 },
    "Greek Yogurt + Strawberries (Type 2)": { Calories: 200, Carbohydrates: 30, Protein: 15, Fat: 3, Fiber: 4, Sugar: 15, Calcium: 200, Iron: 1, Magnesium: 50, Potassium: 300 },
    "Grilled Chicken + Asparagus (Type 2)": { Calories: 400, Carbohydrates: 20, Protein: 40, Fat: 8, Fiber: 5, Sugar: 2, Calcium: 60, Iron: 2, Magnesium: 60, Potassium: 400 },
    "Spicy Grilled Prawns (Type 2)": { Calories: 350, Carbohydrates: 15, Protein: 35, Fat: 10, Fiber: 3, Sugar: 1, Calcium: 60, Iron: 2, Magnesium: 60, Potassium: 400 },
    "Baked Fish + Steamed Veggies (Type 2)": { Calories: 350, Carbohydrates: 30, Protein: 35, Fat: 6, Fiber: 5, Sugar: 2, Calcium: 60, Iron: 3, Magnesium: 70, Potassium: 450 },

    // Advanced - Breakfast
    "Chia Pudding + Almond Milk (Advanced)": { Calories: 320, Carbohydrates: 40, Protein: 10, Fat: 14, Fiber: 8, Sugar: 5, Calcium: 180, Iron: 2, Magnesium: 80, Potassium: 300 },
    "Besan Chilla + Yogurt (Advanced)": { Calories: 350, Carbohydrates: 45, Protein: 14, Fat: 10, Fiber: 6, Sugar: 3, Calcium: 120, Iron: 3, Magnesium: 70, Potassium: 400 },
    "Masala Oats (Advanced)": { Calories: 320, Carbohydrates: 50, Protein: 10, Fat: 6, Fiber: 7, Sugar: 2, Calcium: 60, Iron: 3, Magnesium: 80, Potassium: 400 },
    "Boiled Egg + Brown Bread (Advanced)": { Calories: 280, Carbohydrates: 30, Protein: 15, Fat: 10, Fiber: 3, Sugar: 2, Calcium: 70, Iron: 2, Magnesium: 40, Potassium: 250 },
    "Egg White Scramble + Smoked Turkey (Advanced)": { Calories: 300, Carbohydrates: 10, Protein: 40, Fat: 8, Fiber: 1, Sugar: 1, Calcium: 60, Iron: 2, Magnesium: 30, Potassium: 300 },
    "Grilled Tofu Sandwich (Advanced)": { Calories: 380, Carbohydrates: 45, Protein: 18, Fat: 12, Fiber: 6, Sugar: 3, Calcium: 150, Iron: 3, Magnesium: 70, Potassium: 400 },
    "Spicy Mushroom Toast (Advanced)": { Calories: 350, Carbohydrates: 45, Protein: 12, Fat: 10, Fiber: 5, Sugar: 3, Calcium: 80, Iron: 2, Magnesium: 60, Potassium: 350 },
    "Avocado Toast (Advanced)": { Calories: 360, Carbohydrates: 40, Protein: 10, Fat: 18, Fiber: 8, Sugar: 2, Calcium: 60, Iron: 2, Magnesium: 70, Potassium: 450 },

    // Advanced - Lunch
    "Fruit Salad + Lemon (Advanced)": { Calories: 220, Carbohydrates: 55, Protein: 3, Fat: 1, Fiber: 8, Sugar: 35, Calcium: 60, Iron: 1, Magnesium: 50, Potassium: 400 },
    "Mixed Daal + Roti (Advanced)": { Calories: 450, Carbohydrates: 70, Protein: 18, Fat: 8, Fiber: 10, Sugar: 2, Calcium: 80, Iron: 4, Magnesium: 90, Potassium: 450 },
    "Vegetable Curry + Brown Rice (Advanced)": { Calories: 420, Carbohydrates: 70, Protein: 12, Fat: 10, Fiber: 8, Sugar: 5, Calcium: 70, Iron: 3, Magnesium: 80, Potassium: 400 },
    "Boiled Chickpeas + Lemon Juice (Advanced)": { Calories: 350, Carbohydrates: 55, Protein: 15, Fat: 6, Fiber: 10, Sugar: 2, Calcium: 80, Iron: 3, Magnesium: 80, Potassium: 400 },
    "Pomegranate Salad + Feta (Advanced)": { Calories: 300, Carbohydrates: 40, Protein: 8, Fat: 12, Fiber: 6, Sugar: 25, Calcium: 150, Iron: 2, Magnesium: 60, Potassium: 350 },
    "Grilled Sea Bass + Steamed Spinach (Advanced)": { Calories: 450, Carbohydrates: 15, Protein: 50, Fat: 18, Fiber: 4, Sugar: 2, Calcium: 90, Iron: 3, Magnesium: 70, Potassium: 400 },
    "Ribeye Steak + Roasted Brussels Sprouts (Advanced)": { Calories: 600, Carbohydrates: 20, Protein: 50, Fat: 35, Fiber: 5, Sugar: 3, Calcium: 60, Iron: 5, Magnesium: 70, Potassium: 450 },
    "Grilled Chicken + Avocado Salad (Advanced)": { Calories: 500, Carbohydrates: 25, Protein: 50, Fat: 18, Fiber: 6, Sugar: 2, Calcium: 70, Iron: 3, Magnesium: 70, Potassium: 400 },   

    // Advanced - Dinner
    "Chia Pudding + Dates (Advanced)": { Calories: 350, Carbohydrates: 55, Protein: 10, Fat: 12, Fiber: 8, Sugar: 30, Calcium: 150, Iron: 3, Magnesium: 80, Potassium: 400 },
    "Vegetable Soup + Lentil Salad (Advanced)": { Calories: 400, Carbohydrates: 65, Protein: 18, Fat: 6, Fiber: 10, Sugar: 7, Calcium: 90, Iron: 3, Magnesium: 80, Potassium: 450 },
    "Spicy Paneer Curry (Advanced)": { Calories: 450, Carbohydrates: 30, Protein: 20, Fat: 22, Fiber: 6, Sugar: 4, Calcium: 200, Iron: 3, Magnesium: 70, Potassium: 400 },
    "Brown Rice + Grilled Vegetables (Advanced)": { Calories: 400, Carbohydrates: 70, Protein: 12, Fat: 8, Fiber: 8, Sugar: 4, Calcium: 80, Iron: 3, Magnesium: 80, Potassium: 400 },
    "Berries + Almond Yogurt (Advanced)": { Calories: 250, Carbohydrates: 35, Protein: 10, Fat: 8, Fiber: 5, Sugar: 15, Calcium: 150, Iron: 2, Magnesium: 60, Potassium: 300 },
    "Grilled Salmon + Quinoa (Advanced)": { Calories: 500, Carbohydrates: 40, Protein: 50, Fat: 15, Fiber: 7, Sugar: 3, Calcium: 90, Iron: 3, Magnesium: 80, Potassium: 500 },
    "Spicy Grilled Chicken + Asparagus (Advanced)": { Calories: 450, Carbohydrates: 20, Protein: 50, Fat: 15, Fiber: 5, Sugar: 2, Calcium: 70, Iron: 3, Magnesium: 70, Potassium: 400 },
    "Grilled Fish + Avocado Salad (Advanced)": { Calories: 400, Carbohydrates: 25, Protein: 40, Fat: 12, Fiber: 6, Sugar: 2, Calcium: 70, Iron: 3, Magnesium: 70, Potassium: 450 }
};

function suggestFood() {
    const sugarState = document.getElementById('sugarState').value;
    const timeOfDay = document.getElementById('timeOfDay').value;
    const pricePreference = document.getElementById('pricePreference').value;
    const tastePreference = document.getElementById('tastePreference').value;

    // Safely access the food combinations
    const suggestions = foodCombinations[sugarState]?.[timeOfDay]?.[pricePreference]?.[tastePreference] || [];

    const foodContainer = document.getElementById('foodContainer');
    foodContainer.innerHTML = '';

    if (suggestions.length === 0) {
        foodContainer.innerHTML = '<p>No suitable food found for the selected combination.</p>';
        return;
    }

    // Show up to 3 food suggestions
    const selectedSuggestions = suggestions.slice(0, 3);

    selectedSuggestions.forEach(foodItem => {
        const foodCard = document.createElement('div');
        foodCard.classList.add('food-card');

        // Get nutrient data or use default values if missing
        const nutrients = foodNutrientData[foodItem] || {
            Calories: 0,
            Carbohydrates: 0,
            Protein: 0,
            Fat: 0,
            Fiber: 0,
            Sugar: 0,
            Calcium: 0,
            Iron: 0,
            Magnesium: 0,
            Potassium: 0
        };

        // Build the food card
        foodCard.innerHTML = `
            <img src="./images/default-food.jpg" alt="${foodItem}" onerror="this.src='fallback-image.jpg';">
            <h2>${foodItem}</h2>
            <p>Recommended for ${capitalize(sugarState)} Diabetes (${capitalize(timeOfDay)})</p>
            ${getNutrientProgressBarsHTML(nutrients)}
        `;

        foodContainer.appendChild(foodCard);
    });
}

function capitalize(str) {
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

// Always show all nutrients, even if data is missing (use 0)
function getNutrientProgressBarsHTML(nutrients) {
    const maxValues = {
        Calories: 500,
        Carbohydrates: 100,
        Protein: 50,
        Fat: 50,
        Fiber: 30,
        Sugar: 20,
        Calcium: 100,
        Iron: 20,
        Magnesium: 200,
        Potassium: 1000
    };

    return Object.keys(maxValues).map(nutrient => {
        const value = nutrients[nutrient] || 0;  // Use actual value or 0 if missing
        const percent = Math.min((value / maxValues[nutrient]) * 100, 100);

        return `
            <div class="progress-bar-container">
                <div class="progress-label">${nutrient}: ${value}</div>
                <div class="progress-bar" role="progressbar" aria-valuenow="${value}" aria-valuemin="0" aria-valuemax="${maxValues[nutrient]}">
                    <div class="progress-bar-inner" style="width: ${percent}%; background: ${getColorByNutrient(nutrient)};"></div>
                </div>
            </div>
        `;
    }).join('');
}

function getColorByNutrient(nutrient) {
    const colors = {
        Calories: '#FF5722',
        Carbohydrates: '#3F51B5',
        Protein: '#4CAF50',
        Fat: '#FFC107',
        Fiber: '#009688',
        Sugar: '#F44336',
        Calcium: '#9C27B0',
        Iron: '#795548',
        Magnesium: '#00BCD4',
        Potassium: '#8BC34A'
    };
    return colors[nutrient] || '#ccc';
}






