//Filter Js
$(document).ready(function () {
  $(".filter-item").click(function () {
    const value = $(this).attr("data-filter");
    if (value == "all") {
      $(".product-box").show("1000");
    } else {
      $(".product-box")
        .not("." + value)
        .hide("1000");
      $(".product-box")
        .filter("." + value)
        .show("1000");
    }
  });
  //Add active to btn
  $(".filter-item").click(function () {
    $(this).addClass("active-filter").siblings().removeClass("active-filter");
  });
});
//header background change on scroll
let header = document.querySelector('header')

window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0)
})

window.onload = function (){
  var container = document.getElementById("container");
  var cards = Array.from(container.children);

  cards.sort(function(){
    return Math.random() - 0.5;
  });

  while (container.children.length){
    container.removeChild(container.children[0]);
  }

  cards.forEach(function(card){
    container.appendChild(card);
  });
};