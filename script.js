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

function openTab(evt, tabName) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";

}
// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();