var MenuItems = document.getElementById("MenuItems");
MenuItems.style.maxHeight = "0px";

document.getElementById("menu-icon").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent any default action, just in case
    if (MenuItems.style.maxHeight === "0px") {
        MenuItems.style.maxHeight = "200px";
    } else {
        MenuItems.style.maxHeight = "0px";
    }
});


// new javascript product gallery

var ProductImg = document.getElementById("ProductImg");
var SmallImg = document.getElementsByClassName("SmallImg");

SmallImg[0].onclick = function() {
    ProductImg.src = SmallImg[0].src;
}

SmallImg[1].onclick = function() {
    ProductImg.src = SmallImg[1].src;
}

SmallImg[2].onclick = function() {
    ProductImg.src = SmallImg[2].src;
}

SmallImg[3].onclick = function() {
    ProductImg.src = SmallImg[3].src;
}



