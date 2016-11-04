var size = ['small', "medium", "large", "x-large"];
var meat = ["pepperoni","sausage","chicken","canadian-bacon","pancetta", "ground-beef"]
var toppings = ["olives","mushrooms","onions","peppers","jalapenos","tomatoes","basil"]
var premium = ["artichoke","sun-dried-tomatoes","kalamata-olives"]

var Choices = {
  // 'size' : {
  //   'small': 5,
  //   "medium":10,
  //   "large":15,
  //   "x-large":20
  // }
  size , meat, toppings, premium};

function Pizza(size, meat, toppings, premium) {
  this.size = size;
  this.meat = meat;
  this.toppings = toppings;
  this.premium = premium;
};

Pizza.prototype.price = function() {
  var price = 0;
  price += this.size
}
Pizza.prototype.order = function() {
  var order = (
    "Size: " + this.size + "<br>" +
    "Meat: " + this.meat + "<br>" +
    "Toppings: " + this.toppings + "<br>" +
    "Premium toppings: " + this.premium + "<br>"
)
return order;

}


$(document).ready(function() {
  $('form').submit(function(event) {
    event.preventDefault();
    var userSize = $("#size-selection").val();

    var userMeatArray = [];
    var userToppingsArray = [];
    var userPremiumArray = [];
    $("input:checkbox[name=meat-selection]:checked").each(function() {
      var userMeat = $(this).val();
      userMeatArray.push(userMeat);
    });
    $("input:checkbox[name=toppings-selection]:checked").each(function() {
      userToppingsArray.push($(this).val());
    });
    $("input:checkbox[name=premium-selection]:checked").each(function() {
      var userPremium = $(this).val();
      userPremiumArray.push($(this).val());
    });
    userPizza = new Pizza(userSize,userMeatArray,userToppingsArray, userPremiumArray);

    console.log(userPizza);
    userOrder = userPizza.order()
    $("#confirmation-output").append(userOrder);
  });
});
