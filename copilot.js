function calculateDaysBetweenDates(begin, end) {
  const beginDate = new Date(begin);
  const endDate = new Date(end);

  return (endDate - beginDate) / (1000 * 60 * 60 * 24);
}

// find all images without alternate text
// and give them a red border
function process() {
  const images = document.getElementsByTagName("img");
  for (let i = 0; i < images.length; i++) {
    const image = images[i];
    if (!image.hasAttribute("alt")) {
      image.style.border = "2px solid red";
    }
  }
}