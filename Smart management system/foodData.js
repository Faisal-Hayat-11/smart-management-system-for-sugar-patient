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

window.foodCombinations = foodCombinations;
window.foodNutrientData = foodNutrientData;