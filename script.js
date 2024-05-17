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

