//North-eastern blue square group
for (let i = 10; i > 0; i--) {
  const blueSquareSvg_ne = `<svg
        id="northEasternBlueSquare${i}"
        width="40"
        height="40"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          class="originalFill"
          x="10"
          y="10"
          height="20"
          width="20"
          transform="rotate(45 20 20 )"
        ></rect>
      </svg>`;
  $("#title").prepend(blueSquareSvg_ne);
  //animation
  const selector = `#northEasternBlueSquare${i} > rect`;
  $(selector).on("mouseover", () => {
    $(selector).toggleClass("originalFill");
    $(selector).toggleClass("mouseOverRect");
    setTimeout(() => {
      $(selector).toggleClass("originalFill");
      $(selector).toggleClass("mouseOverRect");
    }, 200);
  });
}

//South-western blue square group
for (let i = 6; i > 0; i--) {
  const blueSquareSvg_sw = `<svg
        id="southWesternBlueSquare${i}"
        width="40"
        height="40"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          class="originalFill"
          x="10"
          y="10"
          height="20"
          width="20"
          transform="rotate(45 20 20 )"
        ></rect>
      </svg>`;
  $("#title").prepend(blueSquareSvg_sw);
  //animation
  const selector = `#southWesternBlueSquare${i} > rect`;
  $(selector).on("mouseover", () => {
    $(selector).toggleClass("originalFill");
    $(selector).toggleClass("mouseOverRect");
    setTimeout(() => {
      $(selector).toggleClass("originalFill");
      $(selector).toggleClass("mouseOverRect");
    }, 200);
  });
}
