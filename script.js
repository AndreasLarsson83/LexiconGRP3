var minus = document.querySelector(".btn-subtract")
var add = document.querySelector(".btn-add");
var quantityNumber = document.querySelector(".item-quantity");
var currentValue = 1;

minus.addEventListener("click", function(){
    currentValue -= 1;
    quantityNumber.value = Math.max(1, currentValue);
    console.log(currentValue)
    if ( currentValue <= 0){
        currentValue = 1;
        };
});

add.addEventListener("click", function() {
    currentValue += 1;
    quantityNumber.value = Math.max(1, currentValue);
    console.log(currentValue);
});