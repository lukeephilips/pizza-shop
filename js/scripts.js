//Selections offered

// Pizza.prototype.sizeCost = {Small : 5, Medium : 10, Large : 15, "Extra-large" : 20};
// var meat = ["pepperoni","sausage","chicken","canadian-bacon","pancetta", "ground-beef"]
// var toppings = ["olives","mushrooms","onions","peppers","jalapenos","tomatoes","basil"]
// var premium = ["artichoke","sun-dried-tomatoes","kalamata-olives"]
//
// var Choices = {
//   // 'size' : {
//   //   'small': 5,
//   //   "medium":10,
//   //   "large":15,
//   //   "x-large":20
//   // }
//   size , meat, toppings, premium};

function Pizza(size, crust,meat, toppings, premium) {
  this.size = size;
  this.meat = meat;
  this.toppings = toppings;
  this.premium = premium;
  this.crust = crust;
  this.total = 0;

  this.crustTime = {"Thin-crust": 15, "Chicago-style":25};
  this.cookTime = this.crustTime[crust];
  this.sizeCost = {Small : 5, Medium : 10, Large : 15, "Extra-large" : 20};

  this.price();
  this.order = this.confirmation();
  };

Pizza.prototype.price = function() {
  var subtotal = 0;
  var sizeCost =  0;
  sizeCost = this.sizeCost[this.size];
  subtotal += (sizeCost);
  subtotal += (this.meat.length * 4);
  subtotal += (this.toppings.length);
  subtotal += (this.premium.length * 2.5);
  this.total = subtotal;
};

Pizza.prototype.confirmation = function() {
  return "<span>"+
    "Size: " + this.size + "<br>" +
    "Crust: " + this.crust + "<br>" +
    "Meat: " + this.meat + "<br>" +
    "Toppings: " + this.toppings + "<br>" +
    "Premium toppings: " + this.premium + "<br>" +
    "Total: $" + this.total + "<br><br>" +
    "Estimated cook time: " + this.cookTime + " minutes"+
    "</span>"
}


$(document).ready(function() {
  $('form').submit(function(event) {
    event.preventDefault();
    $(".confirmation").show();
    var userMeatArray = [];
    var userToppingsArray = [];
    var userPremiumArray = [];
    var userSize = $("#size-selection").val();
    var userCrust = $("#crust-selection").val();

    $("input:checkbox[name=meat-selection]:checked").each(function() {
      userMeatArray.push($(this).val());
    });
    $("input:checkbox[name=toppings-selection]:checked").each(function() {
      userToppingsArray.push($(this).val());
    });
    $("input:checkbox[name=premium-selection]:checked").each(function() {
      userPremiumArray.push($(this).val());
    });
    userPizza = new Pizza(userSize,userCrust,userMeatArray,userToppingsArray, userPremiumArray);
    $("#confirmation-output").html(userPizza.order);
  });
  $("#confirm-order").click(function(){
    $(".confirmation, .place-order").hide();
    $(".receipt").show();
    $("#receipt-output").html(userPizza.order);
  })
});
