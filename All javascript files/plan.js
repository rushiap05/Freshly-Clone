var container = document.getElementById('plan-container');


var searchFood = async () => {

   try {
    var response = await fetch("http://www.themealdb.com/api/json/v1/1/search.php?f=c");

    var data = await response.json();
    // console.log(data);
    return data;
   }
   catch(err) {
    console.log(err);
   }
}

var appendFood = async () => {
    var food_data = await searchFood();
    console.log(food_data);

    food_data.meals.forEach((food) => {
        let div1 = document.createElement('div1');

        if(food_data.meals === null){
            return;
        }

        let img = document.createElement('img');
        img.src = food.strMealThumb;
        img.classList.add('foodImg')

        let h3 = document.createElement('h3');
        h3.innerText = "Country: " + food.strArea;
        h3.classList.add('foodCountry')

        let p = document.createElement('p');
        p.innerText = food.strCategory;
        p.classList.add('foodName')

        div1.append(img,h3,p);
        container.append(div1);
    });
}

// showproduct()

appendFood()

function redirectBuy() {
    window.location.href = 'buyFood.html'
}