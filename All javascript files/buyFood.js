var container = document.getElementById('main-container');


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
        div1.classList.add('show-food-div1')

        if(food_data.meals === null){
            return;
        }

        let img = document.createElement('img');
        img.src = food.strMealThumb;
        img.classList.add('foodImg')

        let h3 = document.createElement('h3');
        h3.innerText = food.strMeal;
        h3.classList.add('foodName')

        let p = document.createElement('p');
        p.innerText = "with " + food.strTags;
        p.classList.add('foodTags')

        let div3 = document.createElement('div')
        div3.classList.add('show-food-div3');

        div3.append(h3,p)

        let div2 = document.createElement('div');
        div2.classList.add('adding-button-div')
        
        let span1 = document.createElement("span")
        span1.innerText = "gluten free";

        let span2 = document.createElement("span")
        span2.innerText = "490 cals";

        let span3 = document.createElement("span")
        span3.innerText = "49g carbs";
        
        let span4 = document.createElement("span")
        span4.innerText = "28g protein";

        let button_add = document.createElement('button');
        button_add.innerText = "+Add"
        button_add.classList.add('btn-primary')

        let food_cart_data = {
            foodImg : food.strMealThumb,
            foodName : food.strMeal
        }

        button_add.onclick = () => {
            foodCart(food_cart_data)
        }

        div2.append(span1,span2,span3,span4,button_add)

        div1.append(img,div3,div2);
        container.append(div1);
    });
}

// showproduct()

let item_count = document.getElementById('item_count')

let cart_div_id = document.getElementById('cartId')

var foodCart = (d) => {
    console.log(d);
    
if(localStorage.getItem('foodCart') === null){
    localStorage.setItem('foodCart', JSON.stringify([]));
  }
  let product_cart = JSON.parse(localStorage.getItem('foodCart'));

  product_cart.push(d);
  localStorage.setItem('foodCart', JSON.stringify(product_cart))
  console.log(product_cart);

 product_cart.forEach(function(food_single){
     let div1 = document.createElement('div');

     let img = document.createElement('img');
     img.src = food_single.foodImg;

     let name = document.createElement('p');
     name.innerText = food_single.foodName;

     div1.append(img,name)

     cart_div_id.append(div1)

 })
 item_count.innerText = product_cart.length;
  
   
}

appendFood()

function redirectCheck() {
    window.location.href = "checkout.html"
}