let blueRect1 = $("#southWesternBlueSquare1 rect");
blueRect1.on("mouseover", () => {
  blueRect1.toggleClass("originalFill");
  blueRect1.toggleClass("mouseOverRect");
  setTimeout(() => {
    blueRect1.toggleClass("originalFill");
    blueRect1.toggleClass("mouseOverRect");
  }, 100);
});
