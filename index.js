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
}

//mouse-over blue rects animation
const blueRects = $("#title rect");
blueRects.on("mouseover", () => {
  blueRects.toggleClass("originalFill");
  blueRects.toggleClass("mouseOverRect");
  setTimeout(() => {
    blueRects.toggleClass("originalFill");
    blueRects.toggleClass("mouseOverRect");
  }, 100);
});
