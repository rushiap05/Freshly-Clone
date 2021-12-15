let container = document.getElementById('plan-container');


async function showproduct() {
    var res = await fetch("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/products/classify?locale=en_us")

    var data = await res.json()

    console.log(data);
}

showproduct()