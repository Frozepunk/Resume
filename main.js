var cursor1 = document.querySelector(".cursor1");
var cursor2 = document.querySelector(".cursor2");

document.addEventListener("mousemove", function(e) {
    cursor1.style.transform = cursor2.style.transform = "translate(-50%, -50%) translate(" + e.clientX + "px, " + e.clientY + "px)";
});