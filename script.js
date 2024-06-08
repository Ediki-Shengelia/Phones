
const burger = document.getElementById("burger");
const navigation = document.querySelector(".navigation");

burger.addEventListener("click", function () {
  this.classList.toggle("clicked");
  navigation.classList.toggle("show");
});
