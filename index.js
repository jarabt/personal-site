var blueRect1 = document.querySelector("#southWesternBlueSquare1 rect");
blueRect1.addEventListener("mouseover", function () {
  this.classList.toggle("originalFill");
  this.classList.toggle("mouseOverRect");
  var myRect = this;
  setTimeout(function () {
    myRect.classList.toggle("originalFill");
    myRect.classList.toggle("mouseOverRect");
  }, 100);
});
